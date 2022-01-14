require("dotenv").config();
const passport=require('passport');
const LocalStrategy=require('passport-local').Strategy;
const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const mysql = require('mysql2');
const crypto=require('crypto');
var session = require('express-session');


app.use(session({
	key: 'session_cookie_name',
	secret: 'session_cookie_secret',
  resave: false,
  saveUninitialized: false,
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static('public'));
app.set("view engine", "ejs");

var connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database : process.env.DB_NAME,
    multipleStatements: true
  });

connection.connect((err) => {
  if (!err)
    console.log("Connected to MySQL Database!");
  else
    console.log("Conection to MySQL Database Failed :(");
});
 

const customFields= {
  usernameField:'uname',
  passwordField:'pw',
};


/*Passport JS*/
const verifyCallback=(username,password,done)=> {
     connection.query('SELECT * FROM users WHERE username = ? ', [username], function(error, results, fields) {
        if (error) 
          return done(error);

        if(results.length==0)
          return done(null,false);
        
        const isValid=validPassword(password,results[0].hash,results[0].salt);

        user={id:results[0].id,username:results[0].username,hash:results[0].hash,salt:results[0].salt};
        if (isValid)
          return done(null,user);
        else
          return done(null,false);
    });
}

const strategy=new LocalStrategy(customFields,verifyCallback);
passport.use(strategy);


passport.serializeUser((user,done)=> {
    console.log("inside serialize");
    done(null,user.id)
});

passport.deserializeUser(function(userId,done) {
    console.log('deserializeUser'+ userId);
    connection.query('SELECT * FROM users where id = ?',[userId], function(error, results) {
            done(null, results[0]);    
    });
});

/*middleware*/
function validPassword(password,hash,salt) {
    var hashVerify=crypto.pbkdf2Sync(password,salt,10000,60,'sha512').toString('hex');
    return hash === hashVerify;
}

function genPassword(password){
    var salt=crypto.randomBytes(32).toString('hex');
    var genhash=crypto.pbkdf2Sync(password,salt,10000,60,'sha512').toString('hex');
    return {salt:salt,hash:genhash};
}


function isAuth(req,res,next) {
    if(req.isAuthenticated()) {
      next();
    }
    else {
      res.redirect('/notAuthorized');
    }
}


function isAdmin(req,res,next){
  if(req.isAuthenticated() && req.user.isAdmin==1) {
    next();
  }
  else {
    res.redirect('/notAuthorizedAdmin');
  }   
}

function userExists(req,res,next) {
  connection.query('Select * from users where username=? ', [req.body.uname], function(error, results, fields) {
    if (error) {
      console.log("Error");
    }
    else if(results.length>0) {
      res.redirect('/userAlreadyExists')
    }
    else {
        next();
    }
  });
}

app.use((req,res,next)=> {
  console.log(req.session);
  console.log(req.user);
  next(); 
});

app.post("/post", (req, res) => {
  console.log("Connected to React");
  res.redirect("/");
});

/*routes*/

app.get('/login', (req, res, next) => {
  res.render('login')
});

app.get('/logout', (req, res, next) => {
  req.logout(); //delets the user from the session
  res.redirect('/protected-route');
});

app.get('/login-success', (req, res, next) => {
  console.log("Login Successful!")
});

app.get('/login-failure', (req, res, next) => {
    res.send('You entered the wrong password.');
});

app.get('/register', (req, res, next) => {
    console.log("Inside get");
    res.render('register')
    
});

app.post('/register',userExists,(req,res,next)=>{
    console.log("Inside post");
    console.log(req.body.pw);
    const saltHash=genPassword(req.body.pw);
    console.log(saltHash);
    const salt=saltHash.salt;
    const hash=saltHash.hash;

    connection.query('INSERT INTO AuthTest VALUES (?,?,?,0) ', [req.body.uname,hash,salt], function(error, results, fields) {
        if (error) {
          console.log("Error");
        }
        else {
          console.log("Successfully Entered");
        }
       
    });

    res.redirect('/login');
});

app.post('/login',passport.authenticate('local',{failureRedirect:'/login-failure',successRedirect:'/login-success'}));

app.get('/protected-route',isAuth,(req, res, next) => {
    console.log("You are logged in as a User. Nice!")
});

app.get('/admin-route',isAdmin,(req, res, next) => {
    console.log("You are logged in as an Admin. Nice!")
});

app.listen(8080, function() {
  console.log('App listening on port 8080!')
});


app.get('/notAuthorized', (req, res, next) => {
  console.log("You are not logged in. Please login to continue!");
});
app.get('/notAuthorizedAdmin', (req, res, next) => {
  console.log("You are logged in, but do not have Admin Privileges!");
});

app.get('/userAlreadyExists', (req, res, next) => {
  console.log("This User already exists! Please login or register with a different username.");
});
require("dotenv").config();
const cookieParser = require("cookie-parser");
const express = require('express');
const bodyParser = require("body-parser");
const mysql = require('mysql2');
const crypto = require('crypto');
const cors = require('cors');
var session = require('express-session');
const User = require("./User");

const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
    credentials: true,
  })
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set('port', process.env.PORT || 8080);

var connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database : process.env.DB_NAME,
  multipleStatements: true
});

app.use(
  session({
    key: 'signed_session_key',
    secret: "secretcode",
    resave: false,
    saveUninitialized: false,
    cookie: {
      expires: 60 * 60 * 24,
    },
  })
);

app.use(cookieParser("secretcode"));

connection.connect((err) => {
  if (!err)
    console.log("Connected to MySQL Database!");
  else
    console.log("Conection to MySQL Database Failed :(");
});

function checkIfUserExists(req,res,next) {
  connection.query('Select * from AuthTest where EmailAddress=? ', [req.body.email], function(error, results, fields) {
    if (error) {
      console.log("Error");
    }
    else if(results.length>0) {
      console.log("big L ur email been used my dude");
    }
    else {
      next();
    }
  });
}

function generateHash(password){
  var salt=crypto.randomBytes(32).toString('hex');
  var genhash=crypto.pbkdf2Sync(password,salt,10000,60,'sha512').toString('hex');
  return {salt:salt,hash:genhash};
}

function validPassword(password,hash,salt) {
  var hashVerify=crypto.pbkdf2Sync(password,salt,10000,60,'sha512').toString('hex');
  return hash === hashVerify;
}

function isAdmin(req,res,next){
  if(req.isAuthenticated() && req.user.isAdmin==1) {
    next();
  }
  else {
    res.redirect('/notAuthorizedAdmin');
  }   
}

app.use((req,res,next)=> {
  console.log(req.session);
  console.log(req.user);
  next(); 
});

app.post("/login", (req, res, next) => {
  connection.query('SELECT * FROM AuthTest WHERE EmailAddress = ?;',[req.body.email], function(error, results) {
      if (results.length > 0) {
          if (validPassword(req.body.password, results[0].Password, results[0].Salt) === true) {
              req.session.user = results[0];
              res.send(results[0]);
          }
          else {
              res.send("Incorrect Password");
          }
      }
      else {
          res.send("User Not Found");
      }
  })
});

app.get('/login', (req, res, next) => {
  if (req.session.user) {
    res.send({loggedIn: true, user: req.session.user});
  } else {
    res.send({loggedIn: false});
  }
});

app.post("/cartItmes", (req, res, next) => {
  var id = req.body.id;
  if(!User.doesIdExist(id)) return res.sendStatus(400); // bad request

  var user = new User(id);
  res.send({savedOrder: user.getOrderHistory()});
});

app.post("/addCartItem", (req, res, next) => {
  var orderId = req.body.orderId;
  var productId = req.body.productId;
  var qty = req.body.qty;

  // TODO: null is because I don't understand the right fields
  connection.query("INSERT INTO order_items VALUES (?,?,?,?,?,?,?)", [orderId, productId, null, null, qty, null, null], (error, results, fields) => {
    if(error) res.sendStatus(500);
    else res.send(results);
  });
});

app.post('/register',checkIfUserExists,(req,res,next)=>{
  const saltHash=generateHash(req.body.password);
  const salt=saltHash.salt;
  const hash=saltHash.hash;
 
  connection.query('INSERT INTO AuthTest VALUES (?,?,?,?,?) ', [req.body.email,hash,req.body.firstName,req.body.lastName,salt], function(error, results, fields) {
    if (error)
      res.send({registered: false});
    else
      res.send({registered: true});
  });
});

app.listen(8080, function() {
  console.log('App listening on port 8080!')
});
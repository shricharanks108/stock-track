require("dotenv").config();

const cookieParser = require("cookie-parser");
const express = require('express');
const bodyParser = require("body-parser");
const mysql = require('mysql2');
const crypto = require('crypto');
const cors = require('cors');
var session = require('express-session');
var Test = require('./Database/TestClass');

var connection = require("./Database/Database").connection;
var Authentication = require("./Authentication");

const app = express();

// console.log(Test.returnTest());

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
    credentials: true,
  })
);

console.log(Test.returnTest("test"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set('port', process.env.PORT || 8080);

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
          if (Authentication.validPassword(req.body.password, results[0].Password, results[0].Salt) === true) {
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

app.post('/register', Authentication.checkIfUserExists,(req,res,next)=>{
  const saltHash=Authentication.generateHash(req.body.password);
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
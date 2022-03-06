require("dotenv").config();

const cookieParser = require("cookie-parser");
const express = require('express');
const bodyParser = require("body-parser");
const router = express.Router();
const mysql = require('mysql2/promise');
const crypto = require('crypto');
const cors = require('cors');
var session = require('express-session');

var connection = require("./DatabaseFunctions/Database").connection;
var Authentication = require("./Authentication");

var User = require('./DatabaseFunctions/User');
var UserRoutes = require('./Routes/UserRoutes');
var Inventory = require('./DatabaseFunctions/Inventory');
const { getMaxListeners } = require("process");

const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
    credentials: true,
  })
);

app.use("/user", UserRoutes);

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

async function checkIfUserExists(req, res, next) {
  const [results, fields] = await connection.execute('Select * from users where Email=? ', [req.body.email]);
  if (error) {
    console.log(error);
  }
  else if (results.length > 0) {
    console.log("big L ur email been used my dude");
  }
  else {
    next();
  }
}

function generateHash(password) {
  var salt = crypto.randomBytes(32).toString('hex');
  var genhash = crypto.pbkdf2Sync(password, salt, 10000, 60, 'sha512').toString('hex');
  return { salt: salt, hash: genhash };
}

function validPassword(password, hash, salt) {
  var hashVerify = crypto.pbkdf2Sync(password, salt, 10000, 60, 'sha512').toString('hex');
  return hash === hashVerify;
}

function isAdmin(req, res, next) {
  if (req.isAuthenticated() && req.user.isAdmin == 1) {
    next();
  }
  else {
    res.redirect('/notAuthorizedAdmin');
  }
}

app.use((req, res, next) => {
  // console.log(req.session);
  // console.log(req.user);
  next();
});

app.post("/login", async (req, res, next) => {
  const [results, fields] = await connection.execute('SELECT * FROM users WHERE Email = ?;', [req.body.email]);
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
});

app.get('/login', (req, res, next) => {
  if (req.session.user) {
    res.send({ loggedIn: true, user: req.session.user });
  } else {
    res.send({ loggedIn: false });
  }
});

app.post('/register', checkIfUserExists, async (req, res, next) => {
  const saltHash = generateHash(req.body.password);
  const salt = saltHash.salt;
  const hash = saltHash.hash;
  const date_ob = new Date();
  const date = date_ob.getFullYear() + "-" + ("0" + (date_ob.getMonth() + 1)).slice(-2) + "-" + ("0" + date_ob.getDate()).slice(-2);

  try {
    const [results, fields] = await connection.execute('INSERT INTO users VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?) ', [null, req.body.email, hash, req.body.firstName, req.body.age, date, req.body.birthday, req.body.countrycode, req.body.zipcode, req.body.foodpantryid, req.body.phonenumber, "Active", req.body.role, req.body.lastName, salt]);
    res.send({ registered: true });
  } catch (error) {
    res.send({ registered: false });
    console.log(error);
  }
});

// USER RELATED ENDPOINTS

// app.get('/user/firstName', async (req, res) => {
//   if (req.session.user) {
//     let result = await User.getFirstName(connection, req.body.email);
//     res.send({ "firstName": result });
//   }
//   else {
//     res.send("Not Logged In!");
//   }
// });

// app.post('/user/firstName', async (req, res) => {
//   if (req.session.user) {
//     try{
//       await User.setFirstName(connection, req.body.email, req.body.firstName);
//       res.sendStatus(200);
//     } catch(error){
//       res.sendStatus(500);
//     }
//   }
//   else {
//     res.send("Not Logged In!");
//   }
// });

app.get('/user/lastName', async (req, res) => {
  if (req.session.user) {
    let result = await User.getLastName(connection, req.body.email);
    res.send(result);
  }
  else {
    res.send("Not Logged In!");
  }
});

app.post('/user/lastName', async (req, res) => {
  if (req.session.user) {
    try{
      await User.setLastName(connection, req.body.email, req.body.lastName);
      res.sendStatus(200);
    } catch(error){
      res.sendStatus(500);
    }
  }
  else {
    res.send("Not Logged In!");
  }
});

app.get('/user/age', async (req, res) => {
  if (req.session.user) {
    let result = await User.getAge(connection, req.body.email);
    res.send(result);
  }
  else {
    res.send("Not Logged In!");
  }
});

app.post('/user/age', async (req, res) => {
  if (req.session.user) {
    try{
      await User.setAge(connection, req.body.email, req.body.age);
      res.sendStatus(200);
    } catch(error){
      res.sendStatus(500);
    }
  }
  else {
    res.send("Not Logged In!");
  }
});

app.listen(8080, function () {
  console.log('App listening on port 8080!')
});

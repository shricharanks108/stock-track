const express = require('express');
const router = express.Router();
var bodyParser = require('body-parser');
var session = require('express-session');
const mysql = require('mysql2/promise');
var Authentication = require("../Authentication");
var connection = require(".././DatabaseFunctions/Database");

async function setupConnection(){
    connection = await connection.setupConnection();
}
setupConnection();

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));
router.use(
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
router.use((req, res, next) => {
    next()
});

router.post("/login", async (req, res, next) => {
const [results, fields] = await connection.execute('SELECT * FROM users WHERE Email = ?;', [req.body.email]);
    if (results.length > 0) {
        if (Authentication.validPassword(req.body.password, results[0].Password, results[0].Salt) === true) {
        req.session.user = results[0];
        res.send(results[0]);
        }
        else {
        res.send("Incorrect Password");
        }
    } else {
        res.send("User Not Found");
    }
});

router.get('/login', (req, res) => {
    if (req.session.user) {
        res.send({ loggedIn: true, user: req.session.user });
    } else {
        res.send({ loggedIn: false });
    }
});
  
router.post('/register', Authentication.checkIfUserExists, async (req, res, next) => {
    const saltHash = Authentication.generateHash(req.body.password);
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

module.exports = router;

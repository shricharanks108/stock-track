const express = require('express');
const router = express.Router();
var bodyParser = require('body-parser');
var session = require('express-session');

const User = require('../DatabaseFunctions/User');

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

router.get('/firstName', async (req, res) => {
    if (req.session.user) {
        let result = await User.getFirstName(connection, req.body.email);
        res.status(200).send({ "firstName": result });
    }
    else {
        res.status(401).send("Not Logged In!");
    }
});
  
router.post('/firstName', async (req, res) => {
    if (req.session.user) {
        try{
            await User.setFirstName(connection, req.body.email, req.body.newFirstName);
            res.sendStatus(200);
        } catch(error){
            res.sendStatus(500);
        }
    }
    else {
        res.status(401).send("Not Logged In!");
    }
});

router.get('/lastName', async (req, res) => {
    if (req.session.user) {
        let result = await User.getLastName(connection, req.body.email);
        res.status(200).send({ "lastName": result });
    }
    else {
        res.status(401).send("Not Logged In!");
    }
});

router.post('/lastName', async (req, res) => {
    if (req.session.user) {
        try {
            await User.setLastName(connection, req.body.email, req.body.newLastName);
            res.sendStatus(200);
        } catch(error){
            res.sendStatus(500);
        }
    }
    else {
        res.status(401).send("Not Logged In!");
    }
});

router.get('/age', async (req, res) => {
    if (req.session.user) {
        let result = await User.getAge(connection, req.body.email);
        res.status(200).send({ "Age": result });
    }
    else {
        res.status(401).send("Not Logged In!");
    }
});

router.post('/age', async (req, res) => {
    if (req.session.user) {
        try{
            await User.setAge(connection, req.body.email, req.body.newAge);
            res.sendStatus(200);
        } catch(error){
            res.sendStatus(500);
        }
    }
    else {
        res.status(401).send("Not Logged In!");
    }
});
  
router.get('/email', async (req, res) => {
    if (req.session.user) {
        let result = await User.getEmail(connection, req.body.email);
        res.status(200).send({ "Email": result });
    }
    else {
        res.status(401).send("Not Logged In!");
    }
});

router.post('/email', async (req, res) => {
    if (req.session.user) {
        try{
            await User.setEmail(connection, req.body.email, req.body.newEmail);
            res.sendStatus(200);
        } catch(error){
            res.sendStatus(500);
        }
    }
    else {
        res.status(401).send("Not Logged In!");
    }
});

router.get('/creationDate', async (req, res) => {
    if (req.session.user) {
        let result = await User.getCreationDate(connection, req.body.email);
        res.status(200).send({ "CreationDate": result });
    }
    else {
        res.status(401).send("Not Logged In!");
    }
});

router.get('/countryCode', async (req, res) => {
    if (req.session.user) {
        let result = await User.getCountryCode(connection, req.body.email);
        res.status(200).send({ "CountryCode": result });
    }
    else {
        res.status(401).send("Not Logged In!");
    }
});

router.post('/countryCode', async (req, res) => {
    if (req.session.user) {
        try {
            await User.setCountryCode(connection, req.body.email, req.body.newCountryCode);
            res.sendStatus(200);
        } catch(error){
            res.sendStatus(500);
        }
    }
    else {
        res.status(401).send("Not Logged In!");
    }
});

router.get('/phoneNumber', async (req, res) => {
    if (req.session.user) {
        let result = await User.getPhoneNumber(connection, req.body.email);
        res.status(200).send({ "PhoneNumber": result });
    }
    else {
        res.status(401).send("Not Logged In!");
    }
});

router.post('/phoneNumber', async (req, res) => {
    if (req.session.user) {
        try {
            await User.setPhoneNumber(connection, req.body.email, req.body.newPhoneNumber);
            res.sendStatus(200);
        } catch(error){
            res.sendStatus(500);
        }
    }
    else {
        res.status(401).send("Not Logged In!");
    }
});

router.get('/accountStatus', async (req, res) => {
    if (req.session.user) {
        let result = await User.getAccountStatus(connection, req.body.email);
        res.status(200).send({ "AccountStatus": result });
    }
    else {
        res.status(401).send("Not Logged In!");
    }
});

router.post('/accountStatus', async (req, res) => {
    if (req.session.user) {
        try {
            await User.setAccountStatus(connection, req.body.email, req.body.newAccountStatus);
            res.sendStatus(200);
        } catch(error){
            res.sendStatus(500);
        }
    }
    else {
        res.status(401).send("Not Logged In!");
    }
});

router.get('/userRole', async (req, res) => {
    if (req.session.user) {
        let result = await User.getUserRole(connection, req.body.email);
        res.status(200).send({ "UserRole": result });
    }
    else {
        res.status(401).send("Not Logged In!");
    }
});

router.post('/userRole', async (req, res) => {
    if (req.session.user) {
        try {
            await User.setUserRole(connection, req.body.email, req.body.newAccountStatus);
            res.sendStatus(200);
        } catch(error){
            res.sendStatus(500);
        }
    }
    else {
        res.status(401).send("Not Logged In!");
    }
});

router.get('/street', async (req, res) => {
    if (req.session.user) {
        let result = await User.getStreet(connection, req.body.email);
        res.status(200).send({ "Street": result });
    }
    else {
        res.status(401).send("Not Logged In!");
    }
});

router.post('/street', async (req, res) => {
    if (req.session.user) {
        try {
            await User.setStreet(connection, req.body.email, req.body.newStreet);
            res.sendStatus(200);
        } catch(error){
            res.sendStatus(500);
        }
    }
    else {
        res.status(401).send("Not Logged In!");
    }
});

router.get('/city', async (req, res) => {
    if (req.session.user) {
        let result = await User.getCity(connection, req.body.email);
        res.status(200).send({ "City": result });
    }
    else {
        res.status(401).send("Not Logged In!");
    }
});

router.post('/city', async (req, res) => {
    if (req.session.user) {
        try {
            await User.setCity(connection, req.body.email, req.body.newCity);
            res.sendStatus(200);
        } catch(error){
            res.sendStatus(500);
        }
    }
    else {
        res.status(401).send("Not Logged In!");
    }
});

router.get('/state', async (req, res) => {
    if (req.session.user) {
        let result = await User.getState(connection, req.body.email);
        res.status(200).send({ "State": result });
    }
    else {
        res.status(401).send("Not Logged In!");
    }
});

router.post('/state', async (req, res) => {
    if (req.session.user) {
        try {
            await User.setState(connection, req.body.email, req.body.newState);
            res.sendStatus(200);
        } catch(error){
            res.sendStatus(500);
        }
    }
    else {
        res.status(401).send("Not Logged In!");
    }
});

router.get('/accessLevel', async (req, res) => {
    if (req.session.user) {
        let result = await User.getAccessLevel(connection, req.body.email);
        res.status(200).send({ "AccessLevel": result });
    }
    else {
        res.status(401).send("Not Logged In!");
    }
});

router.post('/accessLevel', async (req, res) => {
    if (req.session.user) {
        try {
            await User.setAccessLevel(connection, req.body.email, req.body.newAccessLevel);
            res.sendStatus(200);
        } catch(error){
            res.sendStatus(500);
        }
    }
    else {
        res.status(401).send("Not Logged In!");
    }
});

module.exports = router;

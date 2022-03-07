const express = require('express');
const router = express.Router();
var bodyParser = require('body-parser');
var session = require('express-session');

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
        res.send({ "firstName": result });
    }
    else {
        res.status(401).send("Not Logged In!");
    }
});
  
router.post('/firstName', async (req, res) => {
    if (req.session.user) {
        try{
            await User.setFirstName(connection, req.body.email, req.body.firstName);
            res.sendStatus(200);
        } catch(error){
            res.sendStatus(500);
        }
    }
    else {
        res.status(401).send("Not Logged In!");
    }
});

router.get('/user/lastName', async (req, res) => {
    if (req.session.user) {
        let result = await User.getLastName(connection, req.body.email);
        res.send(result);
    }
    else {
        res.send("Not Logged In!");
    }
});

router.post('/user/lastName', async (req, res) => {
    if (req.session.user) {
        try {
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

router.get('/user/age', async (req, res) => {
    if (req.session.user) {
        let result = await User.getAge(connection, req.body.email);
        res.send(result);
    }
    else {
        res.send("Not Logged In!");
    }
});

router.post('/user/age', async (req, res) => {
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
  
// add rest of the routes here (one for each user related function)

module.exports = router;

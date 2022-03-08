const express = require('express');
const router = express.Router();
var bodyParser = require('body-parser');
var session = require('express-session');

const Permissions = require('./DatabaseFunctions/Permissions');

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

router.get('/createStaffPermission', async (req, res) => {
    if (req.session.user) {
        let result = await Permissions.getCreateStaffPermission(connection, req.body.accessLevel);
        res.send({ "createStaffPermission": result });
    }
    else {
        res.status(401).send("Not Logged In!");
    }
});
  
router.post('/createStaffPermission', async (req, res) => {
    if (req.session.user) {
        try{
            await Permissions.setCreateStaffPermission(connection, req.body.accessLevel, req.body.newPermissionStatus);
            res.sendStatus(200);
        } catch(error){
            res.sendStatus(500);
        }
    }
    else {
        res.status(401).send("Not Logged In!");
    }
});

router.get('/placeOrdersPermission', async (req, res) => {
    if (req.session.user) {
        let result = await Permissions.getPlaceOrdersPermission(connection, req.body.accessLevel);
        res.send({ "createStaffPermission": result });
    }
    else {
        res.status(401).send("Not Logged In!");
    }
});
  
router.post('/placeOrdersPermission', async (req, res) => {
    if (req.session.user) {
        try{
            await Permissions.setPlaceOrdersPermission(connection, req.body.accessLevel, req.body.newPermissionStatus);
            res.sendStatus(200);
        } catch(error){
            res.sendStatus(500);
        }
    }
    else {
        res.status(401).send("Not Logged In!");
    }
});

router.get('/fulfillOrdersPermission', async (req, res) => {
    if (req.session.user) {
        let result = await Permissions.getFulfillOrdersPermission(connection, req.body.accessLevel);
        res.send({ "createStaffPermission": result });
    }
    else {
        res.status(401).send("Not Logged In!");
    }
});
  
router.post('/fulfillOrdersPermission', async (req, res) => {
    if (req.session.user) {
        try{
            await Permissions.setFulfillOrdersPermission(connection, req.body.accessLevel, req.body.newPermissionStatus);
            res.sendStatus(200);
        } catch(error){
            res.sendStatus(500);
        }
    }
    else {
        res.status(401).send("Not Logged In!");
    }
});

router.get('/addMerchantsPermission', async (req, res) => {
    if (req.session.user) {
        let result = await Permissions.getAddMerchantsPermission(connection, req.body.accessLevel);
        res.send({ "createStaffPermission": result });
    }
    else {
        res.status(401).send("Not Logged In!");
    }
});
  
router.post('/addMerchantsPermission', async (req, res) => {
    if (req.session.user) {
        try{
            await Permissions.setAddMerchantsPermission(connection, req.body.accessLevel, req.body.newPermissionStatus);
            res.sendStatus(200);
        } catch(error){
            res.sendStatus(500);
        }
    }
    else {
        res.status(401).send("Not Logged In!");
    }
});
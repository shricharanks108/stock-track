const express = require('express');
const router = express.Router();
var bodyParser = require('body-parser');
var session = require('express-session');
const Permissions = require('../DatabaseFunctions/Permissions');
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
        expires: 60 * 60 * 1000,
      },
    })
  );
router.use((req, res, next) => {
    next()
});

router.get('/userPermissionLevelDetails', async (req, res) => {
    if (req.session.user) {
        let result = await Permissions.getUserPermissionLevelDetails(connection, req.body.accessLevel);
        res.send({ "UserPermissions": result });
    }
    else {
        res.status(401).send("Not Logged In!");
    }
});

router.post('/createNewAccessLevel', async (req, res) => {
    try {
        const [results, fields] = await connection.execute("INSERT INTO user_permissions VALUES (?,?,?,?,?,?,?,?,?);", [null,req.body.description,req.body.CreateStaffPermission,req.body.PlaceOrdersPermission,req.body.FulfillOrdersPermission,req.body.AddMerchantsPermission,req.body.ViewAllOrdersPermission,req.body.RestockInventoryPermission,req.body.MakeAnnouncementsPermission]);
        res.status(200).send({ "created": true });
    } catch (error) {
        res.status(500).send({ "created": false });
        console.log(error);
    }
});

router.get('/createStaffPermission', async (req, res) => {
    if (req.session.user) {
        let result = await Permissions.getCreateStaffPermission(connection, req.body.accessLevel);
        res.send({ "CreateStaffPermission": result });
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
        res.send({ "PlaceOrdersPermission": result });
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
        res.send({ "FulfillOrdersPermission": result });
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
        res.send({ "AddMerchantsPermission": result });
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

router.get('/viewAllOrdersPermission', async (req, res) => {
    if (req.session.user) {
        let result = await Permissions.getViewAllOrdersPermission(connection, req.body.accessLevel);
        res.send({ "ViewAllOrdersPermission": result });
    }
    else {
        res.status(401).send("Not Logged In!");
    }
});
  
router.post('/viewAllOrdersPermission', async (req, res) => {
    if (req.session.user) {
        try{
            await Permissions.setViewAllOrdersPermission(connection, req.body.accessLevel, req.body.newPermissionStatus);
            res.sendStatus(200);
        } catch(error){
            res.sendStatus(500);
        }
    }
    else {
        res.status(401).send("Not Logged In!");
    }
});

router.get('/restockInventoryPermission', async (req, res) => {
    if (req.session.user) {
        let result = await Permissions.getRestockInventoryPermission(connection, req.body.accessLevel);
        res.send({ "RestockInventoryPermission": result });
    }
    else {
        res.status(401).send("Not Logged In!");
    }
});
  
router.post('/viewAllOrdrestockInventoryPermissionersPermission', async (req, res) => {
    if (req.session.user) {
        try{
            await Permissions.setRestockInventoryPermission(connection, req.body.accessLevel, req.body.newPermissionStatus);
            res.sendStatus(200);
        } catch(error){
            res.sendStatus(500);
        }
    }
    else {
        res.status(401).send("Not Logged In!");
    }
});

router.get('/makeAnnouncementsPermission', async (req, res) => {
    if (req.session.user) {
        let result = await Permissions.getMakeAnnouncementsPermission(connection, req.body.accessLevel);
        res.send({ "MakeAnnouncementsPermission": result });
    }
    else {
        res.status(401).send("Not Logged In!");
    }
});
  
router.post('/makeAnnouncementsPermission', async (req, res) => {
    if (req.session.user) {
        try{
            await Permissions.setMakeAnnouncementsPermission(connection, req.body.accessLevel, req.body.newPermissionStatus);
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

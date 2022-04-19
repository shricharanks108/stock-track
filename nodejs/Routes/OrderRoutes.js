const express = require('express');
const router = express.Router();
var bodyParser = require('body-parser');
var connection = require("../DatabaseFunctions/Database").connection;
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

router.get("/getOrderItems", async (req, res) => {
    var orderID = req.body.orderID;
    if(!orderID) return res.status(400); // Bad Request

    var orderItems = await Orders.getOrderItems(connection, orderID);
    return res.status(200).send({"OrderItems": orderItems}); // OK
});

router.get("/getOrder", async (req, res) => {
    var orderID = req.body.orderID;
    if(!orderID) return res.status(400); // Bad Request

    var order = await Orders.getOrder(connection, orderID);
    return res.send(200).send({"Order": order});
});

router.delete("/deleteOrder", async (req, res) => {
    var orderID = req.body.orderID;
    if(!orderID) return res.status(400); // Bad Request

    var userID = await Orders.getUserIDFromOrder(connection, orderID);

    // TODO: is it req.session.user.id?
    if(req.session.user && req.session.user.id == userID){
        await Orders.deleteOrder(connection, orderID);
        return res.status(200); // OK
    } else {
        return res.status(401); // Unauthorized
    }
});

router.put("/editOrderStatus", async (req, res) => {
    var orderID = req.body.orderID;
    var newStatus = req.body.newStatus;
    if(!orderID) return res.status(400); // Bad Request
    if(!newStatus) return res.status(400); // Bad Request

    // TODO: what users should have the ability to edit an order?
    await Orders.editOrderStatus(connection, orderID, newStatus);
    res.status(200); // OK
});

router.post("/createOrder", async (req, res) => {
    var staff_nr = req.body.staffNumber;
    var productIDsWithQuantities = req.body.productIDsWithQuantities;
    if(!staff_nr) return res.status(400); // Bad Request
    if(!productIDsWithQuantities) return res.status(400); // Bad Request

    if(!req.session.user) return res.status(401); // Unauthorized
    
    // TODO: make sure id can be fetched like this
    var userID = req.session.user.id;
    await Orders.createOrder(connection, staff_nr, userID, productIDsWithQuantities);
    return res.status(200); // OK
});

module.exports = router;
const express = require('express');
const Orders = require("../DatabaseFunctions/Orders");
const router = express.Router();
var bodyParser = require('body-parser');
var connection = require("../DatabaseFunctions/Database");
var session = require('express-session');

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

router.get("/getOrderItems", async (req, res) => {
    var orderID = req.headers.orderID;
    if(!orderID) return res.status(400); // Bad Request

    var orderItems = await Orders.getOrderItems(connection, orderID);
    return res.status(200).send({"OrderItems": orderItems}); // OK
});

router.get("/getOrder", async (req, res) => {
    var orderID = req.headers.orderID;
    if(!orderID) return res.status(400); // Bad Request

    var order = await Orders.getOrder(connection, orderID);
    return res.send(200).send({"Order": order});
});

router.delete("/deleteOrder", async (req, res) => {
    var orderID = req.headers.orderID;
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
    var orderID = req.headers.orderID;
    var newStatus = req.headers.newStatus;
    if(!orderID) return res.status(400); // Bad Request
    if(!newStatus) return res.status(400); // Bad Request

    // TODO: what users should have the ability to edit an order?
    await Orders.editOrderStatus(connection, orderID, newStatus);
    res.status(200); // OK
});

router.post("/createOrder", async (req, res) => {
    var staff_nr = req.headers.staffNumber;
    var pantryID = req.headers.pantryid;
    var productIDsWithQuantities = req.headers.productIDsWithQuantities;
    if(!staff_nr) return res.status(400); // Bad Request
    if(!productIDsWithQuantities) return res.status(400); // Bad Request

    if(!req.session.user) return res.status(401); // Unauthorized

    // TODO: make sure id can be fetched like this
    // var userID = req.session.user.id;
    var userID = 1;
    await Orders.createOrder(connection, pantryID, staff_nr, userID, productIDsWithQuantities);
    return res.status(200); // OK 
});

router.get("/getPendingOrders", async (req, res) => {
    var order = await Orders.getPendingOrders(connection);
    return res.send(200).send({"Orders": order});
});

router.get("/getFulfilledOrders", async (req, res) => {
    var order = await Orders.getFulfilledOrders(connection);
    return res.send(200).send({"Orders": order});
});

router.get("/getPendingOrderItems", async (req, res) => {
    var orderID = req.headers.orderID;
    if(!orderID) return res.status(400); // Bad Request

    var order = await Orders.getPendingOrderItems(connection, orderID);
    return res.send(200).send({"OrderItems": order});
});

router.get("/getFulfilledOrderItems", async (req, res) => {
    var orderID = req.headers.orderID;
    if(!orderID) return res.status(400); // Bad Request

    var order = await Orders.getFulfilledOrderItems(connection, orderID);
    return res.send(200).send({"OrderItems": order});
});


module.exports = router;

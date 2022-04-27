require("dotenv").config();

const cookieParser = require("cookie-parser");
const express = require('express');
const bodyParser = require("body-parser");
const path = require("path");
const router = express.Router();
const mysql = require('mysql2/promise');
const crypto = require('crypto');
const cors = require('cors');
var session = require('express-session');
var connection = require("./DatabaseFunctions/Database");
var Authentication = require("./Authentication");

var User = require('./DatabaseFunctions/User');
// var Inventory = require('./DatabaseFunctions/Inventory');

var UserRoutes = require('./Routes/UserRoutes');
var AuthRoutes = require('./Routes/AuthenticationRoutes');
var InventoryRoutes = require('./Routes/InventoryRoutes');
var PermissionRoutes = require('./Routes/PermissionRoutes');
var OrderRoutes = require("./Routes/OrderRoutes");
var ProductRoutes = require("./Routes/ProductRoutes");
var ProductStatusRoutes = require("./Routes/ProductStatusRoutes");
var WWEIACategorizationRoutes = require("./Routes/WWEIACategorizationRoutes");

const { getMaxListeners } = require("process");
const app = express();

async function setupConnection(){
    connection = await connection.setupConnection();
}

setupConnection();
app.use(
    cors({
        origin: "http://localhost:3000",
        methods: ["GET", "POST"],
        credentials: true,
    })
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
let port = process.env.PORT || 8080;

app.use(
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

app.use(cookieParser("secretcode"));

app.use("/user", UserRoutes);
app.use("/auth", AuthRoutes);
app.use("/inventory", InventoryRoutes);
app.use("/permissions", PermissionRoutes);
app.use("/order", OrderRoutes);
app.use("/wweia", WWEIACategorizationRoutes);
app.use("/product", ProductRoutes);
app.use("/product-status", ProductStatusRoutes);

app.use(express.static(path.join(__dirname, "build")));

app.use((req, res, next) => {
    // console.log(req.session);
    // console.log(req.user);
    next();
});

app.post("/cartItmes", (req, res, next) => {
    var id = req.body.id;
    if (!User.doesIdExist(id)) return res.sendStatus(400); // bad request

    var user = new User(id);
    res.send({ savedOrder: user.getOrderHistory() });
});

app.post("/cartItmes", (req, res, next) => {
    var id = req.body.id;
    if (!User.doesIdExist(id)) return res.sendStatus(400); // bad request

    var user = new User(id);
    res.send({ savedOrder: user.getOrderHistory() });
});

app.post("/addCartItem", (req, res, next) => {
    var orderId = req.body.orderId;
    var productId = req.body.productId;
    var qty = req.body.qty;

    // TODO: null is because I don't understand the right fields
    connection.query("INSERT INTO order_items VALUES (?,?,?,?,?,?,?)", [orderId, productId, null, null, qty, null, null], (error, results, fields) => {
        if (error) res.sendStatus(500);
        else res.send(results);
    });
});

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(port, function () {
    console.log(`App listening on port ${port}!`)
});

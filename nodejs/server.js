require("dotenv").config();

const cookieParser = require("cookie-parser");
const express = require('express');
const bodyParser = require("body-parser");
const router = express.Router();
const mysql = require('mysql2/promise');
const crypto = require('crypto');
const cors = require('cors');
var session = require('express-session');
var Authentication = require("./Authentication");

// let connection = require('./DatabaseFunctions/Database').connection;
var User = require('./DatabaseFunctions/User');
var Inventory = require('./DatabaseFunctions/Inventory');

var UserRoutes = require('./Routes/UserRoutes');
var AuthRoutes = require('./Routes/AuthenticationRoutes');
var InventoryRoutes = require('./Routes/InventoryRoutes');

const { getMaxListeners } = require("process");

const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
    credentials: true,
  })
);

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

let connection;
setup();

async function setup() {
  connection = await mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    multipleStatements: true
  });
}

app.use("/user", UserRoutes);
app.use("/auth", AuthRoutes);
app.use("/inventory", InventoryRoutes);

app.use((req, res, next) => {
  next();
});

app.post("/cartItmes", (req, res, next) => {
  var id = req.body.id;
  if(!User.doesIdExist(id)) return res.sendStatus(400); // bad request

  var user = new User(id);
  res.send({savedOrder: user.getOrderHistory()});
});

app.post("/addCartItem", (req, res, next) => {
  var orderId = req.body.orderId;
  var productId = req.body.productId;
  var qty = req.body.qty;

  // TODO: null is because I don't understand the right fields
  connection.query("INSERT INTO order_items VALUES (?,?,?,?,?,?,?)", [orderId, productId, null, null, qty, null, null], (error, results, fields) => {
    if(error) res.sendStatus(500);
    else res.send(results);
  });
});

app.listen(8080, function () {
  console.log('App listening on port 8080!')
});

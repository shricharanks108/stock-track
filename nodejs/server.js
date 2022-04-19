require("dotenv").config();

const cookieParser = require("cookie-parser");
const express = require('express');
const bodyParser = require("body-parser");
const router = express.Router();
const mysql = require('mysql2/promise');
const crypto = require('crypto');
const cors = require('cors');
var session = require('express-session');
var connection = require("./DatabaseFunctions/Database");
var Authentication = require("./Authentication");

// let connection = require('./DatabaseFunctions/Database').connection;
var User = require('./DatabaseFunctions/User');
var Inventory = require('./DatabaseFunctions/Inventory');

var UserRoutes = require('./Routes/UserRoutes');
var AuthRoutes = require('./Routes/AuthenticationRoutes');
var InventoryRoutes = require('./Routes/InventoryRoutes');
var PermissionRoutes = require('./Routes/PermissionRoutes');
var OrderRoutes = require("./Routes/OrderRoutes");

const { getMaxListeners } = require("process");

const app = express();
setTimeout(function () { connection = connection.connection;}, 100);

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

app.use("/user", UserRoutes);
app.use("/auth", AuthRoutes);
app.use("/inventory", InventoryRoutes);
app.use("/permissions", PermissionRoutes);
app.use("/order", OrderRoutes);

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
        } else {
            res.send("Incorrect Password");
        }
    } else {
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

app.post('/register', Authentication.checkIfUserExists, async (req, res, next) => {
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

app.post("/cartItmes", (req, res, next) => {
    var id = req.body.id;
    if (!User.doesIdExist(id)) return res.sendStatus(400); // bad request

    var user = new User(id);
    res.send({ savedOrder: user.getOrderHistory() });
});
app.post('/register', Authentication.checkIfUserExists, async (req, res, next) => {
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
    } else {
        res.send("Not Logged In!");
    }
});

app.post('/user/lastName', async (req, res) => {
    if (req.session.user) {
        try {
            await User.setLastName(connection, req.body.email, req.body.lastName);
            res.sendStatus(200);
        } catch (error) {
            res.sendStatus(500);
        }
    } else {
        res.send("Not Logged In!");
    }
});

app.get('/user/age', async (req, res) => {
    if (req.session.user) {
        let result = await User.getAge(connection, req.body.email);
        res.send(result);
    } else {
        res.send("Not Logged In!");
    }
});

app.post('/user/age', async (req, res) => {
    if (req.session.user) {
        try {
            await User.setAge(connection, req.body.email, req.body.age);
            res.sendStatus(200);
        } catch (error) {
            res.sendStatus(500);
        }
    } else {
        res.send("Not Logged In!");
    }
});

app.listen(8080, function () {
    console.log('App listening on port 8080!')
});

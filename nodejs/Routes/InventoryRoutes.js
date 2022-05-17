const express = require('express');
const router = express.Router();
var bodyParser = require('body-parser');
var session = require('express-session');
const Inventory = require('.././DatabaseFunctions/Inventory');
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

router.get('/productsFromPantryID', async (req, res) => {
  let result = await Inventory.getFoodPantryInventory(connection, req.headers.pantryid);
  res.status(200).send({ "products": result });
});

router.get('/productIDsBySubcategory', async (req, res) => {
  let result = await Inventory.getProductIDsBySubcategory(connection, req.headers.pantryid, req.headers.subcategory);
  res.status(200).send({ "productIDs": result });
});
  
router.get('/productIDsByMajorCategory', async (req, res) => {
  let result = await Inventory.getProductIDsByMajorCategory(connection, req.headers.pantryid, req.headers.majorcategory);
  res.status(200).send({ "productIDs": result });
});

router.get('/productsBySubcategory', async (req, res) => {
  let result = await Inventory.getProductsBySubcategory(connection, req.headers.pantryid, req.headers.subcategory);
  res.status(200).send({ "products": result });
});

router.get('/productsByMajorCategory', async (req, res) => {
  let result = await Inventory.getProductsByMajorCategory(connection, req.headers.pantryid, req.headers.majorcategory);
  res.status(200).send({ "products": result });
});

router.get('/pantryIDsFromProductID', async (req, res) => {
  let result = await Inventory.getPantryIDsFromProductID(connection, req.headers.productid);
  res.status(200).send({ "pantryIDs": result });
});



module.exports = router;

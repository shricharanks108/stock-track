const express = require('express');
const router = express.Router();
var bodyParser = require('body-parser');
var session = require('express-session');
const ProductStatus = require('.././DatabaseFunctions/ProductStatus');
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

router.get('/productQuantity', async (req, res) => {
  let result = await ProductStatus.getProductQuantity(connection, req.body.pantryID, req.body.subcategory);
  res.status(200).send({ "productIDs": result });
});

router.post('/productQuantity', async (req, res) => {
  try {
    await ProductStatus.setProductQuantity(connection, req.body.pantryID, req.body.productID, req.body.productQuantity);
    res.sendStatus(200);
  } catch(error){
    res.sendStatus(500);
  }
});

router.get('/nextShipment', async (req, res) => {
  let result = await ProductStatus.getNextShipment(connection, req.body.pantryID, req.body.subcategory);
  res.status(200).send({ "productIDs": result });
});

router.post('/nextShipment', async (req, res) => {
  try {
    await ProductStatus.setNextShipment(connection, req.body.pantryID, req.body.productID, req.body.nextShipment);
    res.sendStatus(200);
  } catch(error){
    res.sendStatus(500);
  }
});

router.get('/outOfStock', async (req, res) => {
  let result = await ProductStatus.getOutOfStock(connection, req.body.pantryID, req.body.subcategory);
  res.status(200).send({ "productIDs": result });
});

router.post('/outOfStock', async (req, res) => {
  try {
    await ProductStatus.setOutOfStock(connection, req.body.pantryID, req.body.productID, req.body.outOfStock);
    res.sendStatus(200);
  } catch(error){
    res.sendStatus(500);
  }
});



module.exports = router;

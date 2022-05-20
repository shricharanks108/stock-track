const express = require('express');
const router = express.Router();
var bodyParser = require('body-parser');
var session = require('express-session');
const Product = require('.././DatabaseFunctions/Product');
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

router.get('/productByID', async (req, res) => {
  let result = await Product.getProductByID(connection, req.headers.pantryid, req.headers.productid);
  res.status(200).send({ "product": result });
});

router.get('/productIDByName', async (req, res) => {
  let result = await Product.getProductIDByName(connection, req.headers.pantryid, req.headers.productname);
  res.status(200).send({ "productID": result });
});

router.get('/productName', async (req, res) => {
  let result = await Product.getProductIDByName(connection, req.headers.pantryid, req.headers.productid);
  res.status(200).send({ "productName": result });
});

router.post('/productName', async (req, res) => {
  try {
    await Product.setProductName(connection, req.body.pantryID, req.body.productID, req.body.productName);
    res.sendStatus(200);
  } catch(error){
    res.sendStatus(500);
  }
});

router.get('/productDescription', async (req, res) => {
  let result = await Product.getProductIDByName(connection, req.headers.pantryid, req.headers.productid);
  res.status(200).send({ "productName": result });
});

router.post('/productDescription', async (req, res) => {
  try {
    await Product.setProductDescription(connection, req.body.pantryID, req.body.productID, newProductDescription);
    res.sendStatus(200);
  } catch(error){
    res.sendStatus(500);
  }
});

router.get('/productExpiryDate', async (req, res) => {
  let result = await Product.getProductExpiryDate(connection, req.headers.pantryid, req.headers.productid);
  res.status(200).send({ "productExpiryDate": result });
});

router.post('/productExpiryDate', async (req, res) => {
  try {
    await Product.setProductExpiryDate(connection, req.body.pantryID, req.body.productID, req.body.newProductExpiryDate);
    res.sendStatus(200);
  } catch(error){
    res.sendStatus(500);
  }
});

router.get('/productMajorCategory', async (req, res) => {
  let result = await Product.getProductMajorCategory(connection, req.headers.pantryid, req.headers.productid);
  res.status(200).send({ "productMajorCategory": result });
});

router.post('/productMajorCategory', async (req, res) => {
  try {
    await Product.setProductMajorCategory(connection, req.body.pantryID, req.body.productID, req.body.newProductMajorCategory);
    res.sendStatus(200);
  } catch(error){
    res.sendStatus(500);
  }
});

router.get('/productSubcategory', async (req, res) => {
  let result = await Product.getProductSubcategory(connection, req.headers.pantryid, req.headers.productid);
  res.status(200).send({ "productSubcategory": result });
});

router.post('/productSubcategory', async (req, res) => {
  try {
    await Product.setProductSubcategory(connection, req.body.pantryID, req.body.productID, req.body.newProductSubcategory);
    res.sendStatus(200);
  } catch(error){
    res.sendStatus(500);
  }
});

router.get('/productMerchantID', async (req, res) => {
  let result = await Product.getProductMerchantID(connection, req.headers.pantryid, req.headers.productid);
  res.status(200).send({ "merchantID": result });
});

router.post('/productMerchantID', async (req, res) => {
  try {
    await Product.setProductMerchantID(connection, req.body.pantryID, req.body.productID, req.body.newMerchantID);
    res.sendStatus(200);
  } catch(error){
    res.sendStatus(500);
  }
});

router.get('/productNutritionInfo', async (req, res) => {
  let result = await Product.getProductNutrition(connection, req.headers.pantryid, req.headers.productid);
  res.status(200).send({ "NutritionInfo": result });
});

module.exports = router;

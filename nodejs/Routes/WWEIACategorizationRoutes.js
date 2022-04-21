const express = require('express');
const router = express.Router();
var bodyParser = require('body-parser');
var session = require('express-session');
const WWEIAFoodCategories = require('.././DatabaseFunctions/WWEIAFoodCategories.js');
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
        expires: 60 * 60 * 24,
      },
    })
  );

router.use((req, res, next) => {
    next()
});

router.get('/getNumberFromSubcategory', async (req, res) => {
    if (req.session.user) {
        let result = await WWEIAFoodCategories.getNumberFromSubcategory(connection, req.body.subcategory);
        res.status(200).send({ "categoryNumber": result });
    }
});
  
router.get('/getFoodSubcategoryFromNumber', async (req, res) => {
    if (req.session.user) {
        let result = await WWEIAFoodCategories.getFoodSubcategoryFromNumber(connection, req.body.categoryNumber);
        res.status(200).send({ "subcategory": result });
    }
});

router.get('/getFoodMajorCategoryFromSubcategory', async (req, res) => {
    if (req.session.user) {
        let result = await WWEIAFoodCategories.getAge(connection, req.body.subcategory);
        res.status(200).send({ "majorCategory": result });
    }
});

router.get('/getFoodSubcategoriesFromMajorCategory', async (req, res) => {
    if (req.session.user) {
        let result = await WWEIAFoodCategories.getEmail(connection, req.body.majorCategory);
        res.status(200).send({ "subcategories": result });
    }
});

router.get('/getFoodSubcategoryDescription', async (req, res) => {
    if (req.session.user) {
        let result = await WWEIAFoodCategories.getFoodSubcategoryDescription(connection, req.body.subcategory);
        res.status(200).send({ "description": result });
    }
});

router.get('/getFoodCategoryNumbersfromMajorCategory', async (req, res) => {
    if (req.session.user) {
        let result = await WWEIAFoodCategories.getFoodCategoryNumbersfromMajorCategory(connection, req.body.majorCategory);
        res.status(200).send({ "categoryNumbers": result });
    }
});

router.get('/getMajorCategoryAndSubcategoryFromNumber', async (req, res) => {
    if (req.session.user) {
        let result = await WWEIAFoodCategories.getMajorCategoryAndSubcategoryFromNumber(connection, req.body.categoryNumber);
        res.status(200).send({ "numberDetails": result });
    }
});

module.exports = router;

const express = require('express');
const router = express.Router();
var bodyParser = require('body-parser');
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

router.get('/firstName', async (req, res) => {

});
  
router.post('/firstName', async (req, res) => {

});

module.exports = router;

const express = require('express');
const router = express.Router();


router.get('/firstName', async (req, res) => {
    if (req.session.user) {
        let result = await User.getFirstName(connection, req.body.email);
        res.send({ "firstName": result });
    }
    else {
        res.send("Not Logged In!");
    }
});
  
router.post('/firstName', async (req, res) => {
    console.log(req);
    res.send(req);
    // if (req.session.user) {
    //     try{
    //         await User.setFirstName(connection, req.body.email, req.body.firstName);
    //         res.sendStatus(200);
    //     } catch(error){
    //         res.sendStatus(500);
    //     }
    // }
    // else {
    //     res.send("Not Logged In!");
    // }
});

module.exports = router;

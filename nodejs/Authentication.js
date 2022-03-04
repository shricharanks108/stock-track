var connection = require("./Database/Database").connection;
const crypto = require('crypto');

function userExists(req,res,next) {
    connection.query('Select * from AuthTest where EmailAddress=? ', [req.body.email], function(error, results, fields) {
      if (error) {
        console.log("Error");
      }
      else if(results.length>0) {
        console.log("big L ur email been used my dude");
      }
      else {
        next();
      }
    });
}

function generateHash(password){
    var salt=crypto.randomBytes(32).toString('hex');
    var genhash=crypto.pbkdf2Sync(password,salt,10000,60,'sha512').toString('hex');
    return {salt:salt,hash:genhash};
}

function validPassword(password,hash,salt) {
    var hashVerify=crypto.pbkdf2Sync(password,salt,10000,60,'sha512').toString('hex');
    return hash === hashVerify;
}

module.exports = {
    checkIfUserExists: userExists,
    generateHash: generateHash,
    validPassword: validPassword,
};
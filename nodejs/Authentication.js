var connection = require("./DatabaseFunctions/Database");
const mysql = require('mysql2/promise');
const crypto = require('crypto');

async function setupConnection(){
  connection = await connection.setupConnection();
}

setupConnection();

async function checkIfUserExists(req, res, next) {
  const [results, fields] = await connection.execute('SELECT * FROM users WHERE Email=? ', [req.body.email]);
  if (results.length > 0) {
    console.log("big L ur email been used my dude");
  }
  else {
    next();
  }
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
    checkIfUserExists: checkIfUserExists,
    generateHash: generateHash,
    validPassword: validPassword,
};
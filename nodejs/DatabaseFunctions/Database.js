require("dotenv").config();
const mysql = require('mysql2/promise');

let connection;

async function setup() {
  connection = await mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    multipleStatements: true
  });
}

setup();

module.exports.connection = connection;
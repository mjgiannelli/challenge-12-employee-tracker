// import mysql2
const mysql = require('mysql2');
require('dotenv').config();

// connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        // your MySQL username,
        user: process.env.DB_USER,
        // your MySQL password
        password: process.env.DB_PW,
        database: process.env.DB_NAME
    },
);
// export db
module.exports = db;
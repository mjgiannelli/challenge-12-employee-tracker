// import mysql2
const mysql = require('mysql2');
// connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        // your MySQL username,
        user: 'root',
        // your MySQL password
        password: 'sqlDatabase#1988',
        database: 'company'
    },
    console.log('Connected to the election database.')
);
// export db
module.exports = db;
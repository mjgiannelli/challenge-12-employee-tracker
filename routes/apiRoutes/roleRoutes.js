// import necessary files
const express = require('express');
const router = express.Router();
const db = require('../../db/connection');
const inputCheck = require('../../utils/inputCheck');

// create a get route to select all
router.get('/roles', (req, res) => {
    const sql = `SELECT * FROM roles;`;

    db.query(sql, (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json ({
            message: 'success',
            data: rows
        });
    });
});
// create a get route to view the total utilized budget of a department (combined salaries of all employees in that department)
// create a post route to add
// create a delete route
// export router
module.exports = router;
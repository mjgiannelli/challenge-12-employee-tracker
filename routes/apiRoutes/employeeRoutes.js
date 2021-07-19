// import necessary files
const express = require('express');
const router = express.Router();
const db = require('../../db/connection');
const inputCheck = require('../../utils/inputCheck');

// create a get route to select all  (left join department to pull in name & left join role to pull in job title and salary)
router.get('/employees', (req, res) => {
    const sql = `SELECT e.id, 
    e.first_name, 
    e.last_name,
    roles.title AS title, 
    departments.dept_name AS department, 
    roles.salary AS salary,
    concat(m.first_name, ' ', m.last_name) AS manager
    FROM employees e
    LEFT JOIN employees m ON m.id = e.manager_id
    LEFT JOIN roles ON e.role_id = roles.id
    LEFT JOIN departments ON roles.department_id = departments.id`;

    db.query(sql, (err, rows) => {
        if(err) {
            res.status(500).json({error: err.message });
            return;
        }
        res.json({
            message: 'success',
            data: rows
        });
    });
});


// create a get route to view all employees by department

// create a get route to view all employees by manager

// create a post route to add

// create a delete route

// create a put route to update an employee

// export router
module.exports = router;
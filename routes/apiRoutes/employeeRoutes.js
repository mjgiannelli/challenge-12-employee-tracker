// import necessary files
const express = require('express');
const router = express.Router();
const db = require('../../db/connection');
const inputCheck = require('../../utils/inputCheck');

// create a get route to select all 
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
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json({
            message: 'success',
            data: rows
        });
    });
});


// create a get route to view all employees by department (BONUS)

// create a get route to view all employees by manager (BONUS)
router.get('/managersgroup', (req, res) => {
    const sql = `SELECT concat(e.first_name, ' ', e.last_name) AS employee,
    concat(m.first_name, ' ', m.last_name) AS manager
    FROM employees e
    LEFT JOIN employees m ON m.id = e.manager_id
    ORDER BY manager`;

    db.query(sql, (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json({
            message: 'success',
            data: rows
        });
    });
});

// create a post route to add
router.post('/employee', ({ body }, res) => {
    const errors = inputCheck(body, 'first_name', 'last_name', 'role_id', 'manager_id');

    if (errors) {
        res.status(400).json({ error: errors });
        return;
    }

    const sql = `INSERT INTO employees (first_name, last_name, role_id, manager_id)
    VALUES (?,?,?,?)`;

    const params = [body.first_name, body.last_name, body.role_id, body.manager_id];

    db.query(sql, params, (err, result) => {
        if (err) {
            res.status(400).json({ error: err.message });
            return;
        }
        res.json({
            message: 'success',
            data: body
        });
    });
});


// create a delete route
router.delete('/employee/:id', (req, res) => {
    const sql = `DELETE FROM employees WHERE id = ?`;
    const params = [req.params.id];

    db.query(sql, params, (err, result) => {
        if (err) {
            res.statusMessage(400).json({ error: res.message });
        } else if (!result.affectedRows) {
            res.json({
                message: 'Employee not found'
            });
        } else {
            res.json({
                message: 'deleted',
                changes: result.affectedRows,
                id: req.params.id
            });
        }
    });
});

// create a put route to update an employee's role

// create a put route to update an employee's manager (BONUS)

// export router
module.exports = router;
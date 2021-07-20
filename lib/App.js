//user starts application
// user is presented a menu:
// what would you like to do?
// --view all employees, view all employees by department, view all employees by manager, update employee managers, view all employees by department, add an employee, delete an employee, update an employee
// -- view total utilized budget
// -- view all departments
// -- add a department
// -- delete a department
// -- view all roles, add a role, delete a role
// user selects menu and is then presented data or prompted information
// user is then presented menu again

// Packages needed for this application
const inquirer = require('inquirer');
const Department = require('./Department');
const Employee = require('./Employee');
const Role = require('./Role');
const fetch = require('node-fetch');
const cTable = require('console.table');

function initializeApp () {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'menu',
            message: 'What would you like to do?',
            choices: ['View All Employees', 'View All Employees By Department', 'View All Employees By Manager', 'View Total Utilized Budget By Department', 'Add Employee', 'Remove Employee', 'Update Employee Role', 'Update Employee Manager', 'View All Departments', 'Add A Department', 'Delete A Department', 'View All Roles', 'Add A Role', 'Delete A Role', 'Exit']
        }
    ])
    .then(selection => {
        console.log(selection.menu)
        switch (selection.menu) {
            case 'View All Employees':
                fetch('http://localhost:3001/api/employees')
                .then(response => {
                    if(!response.ok) {
                        return console.log('Error: ' + response.statusText);
                    }
                    return response.json();
                })
                .then(employeeData => {
                    console.table(employeeData.data);
                })
                // initializeApp();
            case 'View All Employees By Department':
                fetch('http://localhost:3001/api/employees-dept')
                .then(response => {
                    if(!response.ok) {
                        return console.log('Error: ' + response.statusText);
                    }
                    return response.json();
                })
                .then(employeeData => {
                    console.table(employeeData.data);
                })
                // initializeApp();
            case 'View All Employees By Manager':
                fetch('http://localhost:3001/api/managersgroup')
                .then(response => {
                    if(!response.ok) {
                        return console.log('Error: ' + response.statusText);
                    }
                    return response.json();
                })
                .then(employeeData => {
                    console.table(employeeData.data);
                })
                // initializeApp();
            case 'View Total Utilized Budget By Department':
                fetch('http://localhost:3001/api/payroll')
                .then(response => {
                    if(!response.ok) {
                        return console.log('Error: ' + response.statusText);
                    }
                    return response.json();
                })
                .then(employeeData => {
                    console.table(employeeData.data);
                })
                // initializeApp();
        }   
    })
}

module.exports = {initializeApp};
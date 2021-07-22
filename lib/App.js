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

function initializeApp() {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'menu',
            message: 'What would you like to do?',
            choices: ['View All Employees', 'View All Employees By Department', 'View All Employees By Manager', 'View Total Utilized Budget By Department', 'Add An Employee', 'Remove An Employee', 'Update An Employee Role', "Update An Employee's Manager", 'View All Departments', 'Add A Department', 'Delete A Department', 'View All Roles', 'Add A Role', 'Delete A Role', 'Exit']
        }
    ])
        .then(selection => {
            switch (selection.menu) {
                case 'View All Employees':
                    fetch('http://localhost:3001/api/employees')
                        .then(response => {
                            if (!response.ok) {
                                return console.log('Error: ' + response.statusText);
                            }
                            return response.json();
                        })
                        .then(employeeData => {
                            console.table(employeeData.data);
                        })
                        .then(initializeApp);
                    break;
                case 'View All Employees By Department':
                    fetch('http://localhost:3001/api/employees-dept')
                        .then(response => {
                            if (!response.ok) {
                                return console.log('Error: ' + response.statusText);
                            }
                            return response.json();
                        })
                        .then(employeeData => {
                            console.table(employeeData.data);
                        })
                        .then(initializeApp);
                    break;
                case 'View All Employees By Manager':
                    fetch('http://localhost:3001/api/managersgroup')
                        .then(response => {
                            if (!response.ok) {
                                return console.log('Error: ' + response.statusText);
                            }
                            return response.json();
                        })
                        .then(employeeData => {
                            console.table(employeeData.data);
                        })
                        .then(initializeApp);
                    break;
                case 'View Total Utilized Budget By Department':
                    fetch('http://localhost:3001/api/payroll')
                        .then(response => {
                            if (!response.ok) {
                                return console.log('Error: ' + response.statusText);
                            }
                            return response.json();
                        })
                        .then(employeeData => {
                            console.table(employeeData.data);
                        })
                        .then(initializeApp);
                    break;
                case 'View All Departments':
                    fetch('http://localhost:3001/api/departments')
                        .then(response => {
                            if (!response.ok) {
                                return console.log('Error: ' + response.statusText);
                            }
                            return response.json();
                        })
                        .then(employeeData => {
                            console.table(employeeData.data);
                        })
                        .then(initializeApp);
                    break;
                case 'View All Roles':
                    fetch('http://localhost:3001/api/roles')
                        .then(response => {
                            if (!response.ok) {
                                return console.log('Error: ' + response.statusText);
                            }
                            return response.json();
                        })
                        .then(employeeData => {
                            console.table(employeeData.data);
                        })
                        .then(initializeApp);
                    break;
                case 'Add An Employee':
                    const rolesArray = [];
                    const managersArray = [];

                    fetch('http://localhost:3001/api/roles')
                        .then(response => {
                            if (!response.ok) {
                                return console.log('Error: ' + response.statusText);
                            }
                            return response.json();
                        })
                        .then(employeeData => {
                            for (let i = 0; i < employeeData.data.length; i++) {
                                rolesArray.push(employeeData.data[i].title);
                            }

                            fetch('http://localhost:3001/api/managersgroup')
                                .then(response => {
                                    if (!response.ok) {
                                        return console.log('Error: ' + response.statusText);
                                    }
                                    return response.json();
                                })
                                .then(employeeData => {
                                    for (let i = 0; i < employeeData.data.length; i++) {
                                        managersArray.push(employeeData.data[i].manager);
                                    }

                                    const employeeInfo = [rolesArray, managersArray];

                                    return employeeInfo;
                                })
                                .then(employeeInfo => {

                                    console.log(employeeInfo[0]);

                                    const questions = [
                                        {
                                            type: 'input',
                                            name: 'first_name',
                                            message: "What is your employee's first name? (Required)",
                                            validate: firstNameInput => {
                                                if (firstNameInput) {

                                                    return true;
                                                } else {
                                                    console.log("Please enter your employee's first name!");
                                                    return false;
                                                }
                                            }
                                        },
                                        {
                                            type: 'input',
                                            name: 'last_name',
                                            message: "What is your employee's last name? (Required)",
                                            validate: lastNameInput => {
                                                if (lastNameInput) {

                                                    return true;
                                                } else {
                                                    console.log("Please enter your employee's last name!");
                                                    return false;
                                                }
                                            }
                                        },
                                        {
                                            type: 'list',
                                            name: 'role_id',
                                            message: 'Please select a role for the employee',
                                            //pull the roles array from above
                                            choices: employeeInfo[0]
                                        },
                                        {
                                            type: 'list',
                                            name: 'manager_id',
                                            message: 'Please select a manager for the employee',
                                            // pull the managers array from above
                                            choices: [...new Set(employeeInfo[1].filter(item =>
                                                !!item
                                            ))]
                                        }
                                    ]

                                    return inquirer.prompt(questions);
                                })
                                .then(async (employeeObject) => {
                                    const response = await fetch('http://localhost:3001/api/role/' + employeeObject.role_id)

                                    if (!response.ok) {
                                        return console.log('Error: ' + response.statusText);
                                    } else {
                                        const data = await response.json();

                                        const roleId = (data.data[0].id)

                                        employeeObject.role_id = roleId;
                                    }

                                    const managerFirstName = employeeObject.manager_id.split(' ')[0];
                                    const managerLastName = employeeObject.manager_id.split(' ')[1];

                                    const response2 = await fetch('http://localhost:3001/api/employee/' + managerFirstName + '/' + managerLastName);

                                    if (!response2.ok) {
                                        return console.log('Error: ' + response2.statusText);
                                    } else {
                                        const data2 = await response2.json();

                                        // console.log(data2);
                                        const managerId = (data2.data[0].id)

                                        employeeObject.manager_id = managerId;
                                    }

                                    return employeeObject;

                                })
                                .then(employeeObject => {
                                    fetch('http://localhost:3001/api/employee', {
                                        method: 'POST',
                                        headers: {
                                            Accept: 'application/json',
                                            'Content-Type': 'application/json'
                                        },
                                        body: JSON.stringify(employeeObject)
                                    })
                                        .then(response => {
                                            if (response.ok) {
                                                return response.json();
                                            }
                                            alert('Error: ' + response.statusText);
                                        })
                                        .then(postResponse => {
                                            console.log(postResponse)
                                            console.log('Employee has been added to the database');
                                        });
                                })
                                .then(initializeApp);

                        })
                        
                    break;
                // get the roles names, manager names set them equal to an array
                // prompt user for first name, last name, select role name, select manager name
                // take that object and pass it through a fetch with POST method
                // then notify that employee has been added to database

                case 'Remove An Employee':
                    // get a list of employees Names from db
                    // present the list of employee names to the User to select
                    // take the user's selection, split it and assign the values to first name and last name
                    // use that information to get the entire employee object
                    // pass the employee object through the delete route



            }
                
        })
}

module.exports = { initializeApp };
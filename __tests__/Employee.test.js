const Employee = require('../lib/Employee');

test('creates an employee object', () => {
    const employee = new Employee('Dave', 'Doe', 1, 1);

    expect(employee.firstName).toBe('Dave');
    expect(employee.lastName).toBe('Doe');
    expect(employee.role).toBe(1);
    expect(employee.managerId).toBe(1);
})

test('gets employees first name as an object', () => {
    const employee = new Employee(('Dave', 'Doe', 'Engineer', 1));

    expect(employee.getFirstName()).toHaveProperty('firstName');
})

test('gets employees last name as an object', () => {
    const employee = new Employee(('Dave', 'Doe', 'Engineer', 1));

    expect(employee.getLastName()).toHaveProperty('lastName');
})

test('gets employees role as an object', () => {
    const employee = new Employee(('Dave', 'Doe', 'Engineer', 1));

    expect(employee.getRole()).toHaveProperty('role');
})

test('gets employees manager id as an object', () => {
    const employee = new Employee(('Dave', 'Doe', 'Engineer', 1));

    expect(employee.getManagerId()).toHaveProperty('managerId');
})
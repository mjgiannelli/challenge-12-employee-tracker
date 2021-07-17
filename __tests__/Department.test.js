const Department = require('../lib/Department');

test('creates an department object', () => {
    const department = new Department('Corporate');

    expect(department.name).toBe('Corporate');
})

test('gets departments name as an object', () => {
    const department = new Department(('Dave', 'Doe', 'Engineer', 1));

    expect(department.getName()).toHaveProperty('name');
})

const Role = require('../lib/Role');

test('creates an role object', () => {
    const role = new Role('Engineer', 40000, 1);

    expect(role.title).toBe('Engineer');
    expect(role.salary).toBe(40000);
    expect(role.departmentId).toBe(1);
})

test('gets roles title as an object', () => {
    const role = new Role('Engineer', 40000, 1);

    expect(role.getTitle()).toHaveProperty('title');
})

test('gets roles salary as an object', () => {
    const role = new Role('Engineer', 40000, 1);

    expect(role.getSalary()).toHaveProperty('salary');
})

test('gets roles departmentID as an object', () => {
    const role = new Role('Engineer', 40000, 1);

    expect(role.getDepartmentId()).toHaveProperty('departmentId');
})

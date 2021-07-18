-- add drop table commands here
DROP TABLE IF EXISTS employees;
DROP TABLE IF EXISTS roles;
DROP TABLE IF EXISTS departments;

-- create tables

-- -- department: id INT PRIM KEY, name VARCHAR(30), NOT NULL
CREATE TABLE departments (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30) NOT NULL
);

-- -- Role: id INT PRIM KEY, title VARCHAR(30) NOT NULL, salary DECIMAL NOT NULL, department_id INT NOT NULL
CREATE TABLE roles (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30) NOT NULL,
    salary INTEGER NOT NULL,
    department_id INTEGER,
    CONSTRAINT fk_department FOREIGN KEY (department_id) REFERENCES departments(id) ON DELETE SET NULL
);

-- -- Employee: id INT PRIM KEY, first_name VARCHAR(30) NOT NULL, last_name VARCHAR(30) NOT NULL, role_id INT NOT NULL, manager_id (ref to another employee) INT (can be null if no manager)
CREATE TABLE employees (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INTEGER,
    manager_id INTEGER,
    CONSTRAINT fk_role FOREIGN KEY (role_id) REFERENCES roles(id) ON DELETE CASCADE,
    FOREIGN KEY (manager_id) REFERENCES employees(id) ON DELETE SET NULL
);

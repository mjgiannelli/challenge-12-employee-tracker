-- insert into tables values for testing purposes

INSERT INTO departments (name)
VALUES
('Executive'),
('Finance'),
('Marketing'),
('Sales'),
('IT');

INSERT INTO roles (title, salary, department_id)
VALUES
('CEO', 250000, 1),
('CFO', 230000, 1),
('CTO', 220000, 1),
('CMO', 220000, 1),
('COO', 220000, 1),
('Controller', 140000, 2),
('Assistant Controller', 110000, 2),
('Senior Accountant', 85000, 2),
('Staff Accountant', 65000, 2),
('Accounts Payable Clerk', 40000, 2),
('Accounts Receivable Clerk', 40000, 2),
('Marketing Manager', 140000, 3),
('Marketing Specialist', 90000, 3),
('Marketing Specialist', 90000, 3),
('VP of Sales', 180000, 4),
('Territory Manager', 150000, 4),
('Sales Associate', 95000, 4),
('IT Manager', 180000, 5),
('Senior Web Developer', 110000, 5),
('Junior Web Developer', 75000, 5);


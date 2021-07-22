// create a role constuctor that takes in title, salary & department ID

class Role {
    constructor(title, salary, departmentId) {
        this.title = title;
        this.salary = salary;
        this.department_id = department_id;
    }

    getTitle() {
        return {
            title: this.title
        }
    }

    getSalary() {
        return {
            salary: this.salary
        }
    }

    getDepartmentId() {
        return {
            department_id: this.department_id
        }
    }
}

module.exports = Role;
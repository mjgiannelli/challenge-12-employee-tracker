// create a role constuctor that takes in title, salary & department ID

class Role {
    constructor(title, salary, departmentId) {
        this.title = title;
        this.salary = salary;
        this.departmentId = departmentId;
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
            departmentId: this.departmentId
        }
    }
}

module.exports = Role;
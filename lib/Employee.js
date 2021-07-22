//create an employee constructor function that takes in first, last, role_id, manager_id

class Employee {
    constructor(firstName, lastName, role, managerId) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.role_id = role_id;
        this.manager_id = manager_id;
    }

    getFirstName() {
        return {
            firstName: this.firstName
        }
    }

    getLastName() {
        return {
            lastName: this.lastName
        }
    }

    getRole() {
        return {
            role: this.role_id
        }
    }

    getManagerId() {
        return {
            managerId: this.manager_id
        }
    }
}

module.exports = Employee;
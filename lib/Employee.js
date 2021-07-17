//create an employee constructor function that takes in first, last, role_id, manager_id

class Employee {
    constructor(firstName, lastName, role, managerId) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.role = role;
        this.managerId = managerId;
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
            role: this.role
        }
    }

    getManagerId() {
        return {
            managerId: this.managerId
        }
    }
}

module.exports = Employee;
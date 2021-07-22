// create a constructor function that takes in name

class Department {
    constructor(dept_name) {
        this.dept_name = dept_name;
    }

    getName() {
        return {
            dept_name: this.dept_name
        }
    }
}

module.exports = Department;
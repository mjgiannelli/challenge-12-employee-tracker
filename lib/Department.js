// create a constructor function that takes in name

class Department {
    constructor(name) {
        this.name = name;
    }

    getName() {
        return {
            name: this.name
        }
    }
}

module.exports = Department;
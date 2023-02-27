const Employee = require("./Employee");

// Enginner object constructor inherits employee class
class Engineer extends Employee {
    constructor(name, id, email, github){
        super(name, id, email);
        this.github = github;
    };

    getRole() {
        return this.constructor.name;
    };

    getGithub() {
        return this.github;
    };

};

module.exports = Engineer;


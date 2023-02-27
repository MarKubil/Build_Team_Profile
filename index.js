const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");

// Questions for manager
const managerQ = [
    {
        type: 'input',
        message: `What is the Team manager's name?\nAnswer: `,
        name: 'managerName',
        validate: response => response.length > 0 ? true : 'Please enter valid managers name'
    },
    {
        type: 'input',
        message: `What is the team manager's id?\nAnswer: `,
        name: 'managerId',
        validate: response => !isNaN(response) && response.length > 0 ? true : "Please enter valid managers ID number"
    },
    {
        type: 'input',
        message: `What is the team manager's email?\nAnswer: `,
        name: 'managerEmail',
        validate: response => response.length > 0 ? true : `Please enter valid email address`
    },
    {
        type: 'input',
        message: `What is the team manager's office number?\nAnswer: `,
        name: 'managerOfficeNum',
        validate: response => !isNaN(response) && response.length > 0 ? true : "Please enter valid managers office number"
    },
];

// Prompt questions for engineer
const engineerQ = () => {
    inquirer.prompt([
        {
            type: 'input',
            message: `What is your engineer's name?\nAnswer: `,
            name: 'engineerName',
            validate: response => response.length > 0 ? true : 'Please enter valid engineer name'
        },
        {
            type: 'input',
            message: `What is your engineer's ID?\nAnswer: `,
            name: 'engineerID',
            validate: response => response.length > 0 && !isNaN(response) ? true : 'Please enter valid engineer ID number'
        },
        {
            type: 'input',
            message: `What is your engineer's email?\nAnswer: `,
            name: 'engineerEmail',
            validate: response => response.length > 0 ? true : 'Please enter valid engineer email'
        },
        {
            type: 'input',
            message: `What is your engineer's GitHub username?\nAnswer: `,
            name: 'enginnerGithub',
            validate: response => response.length > 0 ? true : 'Please enter valid engineer GitHub username'
        }
    ]).then(response => {
        const engineer = new Engineer(response.engineerName, response.engineerID, response.engineerEmail, response.enginnerGithub);
        addMember();
    })
};

// Prompt questions for intern
const internQ = () => {
    inquirer.prompt([
        {
            type: 'input',
            message: `What is your intern's name?\nAnswer: `,
            name: 'internName',
            validate: response => response.length > 0 ? true : 'Please enter valid intern name'
        },
        {
            type: 'input',
            message: `What is your intern's ID?\nAnswer: `,
            name: 'internID',
            validate: response => response.length > 0 && !isNaN(response) ? true : 'Please enter valid intern ID number'
        },
        {
            type: 'input',
            message: `What is your intern's email?\nAnswer: `,
            name: 'internEmail',
            validate: response => response.length > 0 ? true : 'Please enter valid intern email'
        },
        {
            type: 'input',
            message: `What is your intern's school?\nAnswer: `,
            name: 'internSchool',
            validate: response => response.length > 0 ? true : 'Please enter valid intern school'
        }
    ]).then(response => {
        const intern = new Intern(response.internName, response.internID, response.internEmail, response.internSchool);
        addMember();
    })
};

// Promp question for user does he wants to add more team members
const addMember = () => {
    inquirer.prompt([
        {
            name: 'toAdd',
            type: 'list',
            message: `Which type of team member would you like to add?`,
            choices: ['Engineer', 'Intern', `I don't want to add any more team members`]
        }
    ]).then(response => {
        if (response.toAdd === 'Engineer') {
            engineerQ();
        } else if (response.toAdd === 'Intern') {
            internQ();
        } else {

        }
    })
};


inquirer.prompt([...managerQ]).then(response => {
    const manager = new Manager(response.managerName, response.managerId, response.managerEmail, response.managerOfficeNum);

    addMember();
});

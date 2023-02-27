const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");


// TODO: Write Code to gather information about the development team members, and render the HTML file.

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


const addMember = () => {
    inquirer.prompt([
        {
            name: 'toAdd',
            type: 'list',
            message: `Which type of team member would you like to add?`,
            choices: [
                {
                    name: 'Engineer',
                },
                {
                    name: 'Intern',
                },
                {
                    name: `I don't want to add any more team members`,
                }
            ]
        }
    ]).then(answer => {
        if (answer.toAdd === 'Engineer') {

        } else if (answer.toAdd === 'Intern') {

        } else {

        }
    })
};


inquirer.prompt([...managerQ]).then(response => {
    const manager = new Manager(response.managerName, response.managerId, response.managerEmail, response.managerOfficeNum);

    addMember();
});

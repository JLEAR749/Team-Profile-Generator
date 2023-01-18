const inquirer = require('inquirer');
const fs = require('fs');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');

const path = require('path');
const generateTeam = require('./src/generateHTML.js');

const teamArray = [];

function managerStart() {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is your manager's name?"
        },
        {
            type: "input",
            name: "id",
            message: "What is your manager's ID?"
        },
        {
            type: "input",
            name: "email",
            message: "What is your manager's email?"
        },
        {
            type: "input",
            name: "officeNumber",
            message: "What is your manager's office number?"
        }

    ]).then(data => {
        const manager = new Manager(data.managerName, data, data.managerId, data.managerEmail, data.managerOfficeNumber);
        teamArray.push(manager);
        createTeam();
    });
}

function engineerStart() {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is your enigneer's name?"
        },
        {
            type: "input",
            name: "id",
            message: "What is your engineer's ID?"
        },
        {
            type: "input",
            name: "email",
            message: "What is your engineer's email?"
        },
        {
            type: "input",
            name: "github",
            message: "What is your engineer's GitHub?"
        },
    ]).then((data) => {
        const engineer = new Engineer(data.engineerName, data.engineerId, data.engineerEmail, data.engineerGitHub);
        team.splice(team.length - 1, 0, engineer.getHTML());
        createTeam();
    })
}

function internStart() {
     inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is your intern's name?"
        },
        {
            type: "input",
            name: "id",
            message: "What is your intern's ID?"
        },
        {
            type: "input",
            name: "email",
            message: "What is your intern's email?"
        },
        {
            type: "input",
            name: "github",
            message: "What is your intern's school?"
        }
    ]).then((data) => {
        const intern = new Intern(data.internnName, data.internId, data.InternEmail, data.InternSchool);
        team.splice(team.length - 1, 0, intern.getHTML());
        createTeam();
    })
}
    const writeFile = (fileContent) => {
        fs.writeFileSync('./dist/index.html', fileContent, (err) => {
            if (err) {
                console.log(err);
            } else {
                console.log('Succes!  Your team profile has been generated!');
            }
        });
    }
module.exports = writeFile;
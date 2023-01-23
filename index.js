const inquirer = require('inquirer');
const generateHTML = require('./src/generateHTML')
const writeFile = require('./src/write-file')

const { Manager, managerQuestionArr } = require('./lib/Manager');
const { Engineer, engineerQuestionArr } = require('./lib/Engineer.js');
const { Intern, internQuestionArr } = require('./lib/Intern.js');
const template = require('./src/generateHTML');

const teamArray = []

const init = () => { managerQuestions() }

const managerQuestions = () => {
    inquirer.prompt(managerQuestionArr)
        .then((results) => {
            results = new Manager(results.name, results.id, results.email, results.officeNumber)
            teamArray.push(results);
            return employeePrompt();
        })
}

const engineerQuestions = () => {
    inquirer.prompt(engineerQuestionArr)
        .then((results) => {
            results = new Engineer(results.name, results.id, results.email, results.GitHub)
            teamArray.push(results);
            return employeePrompt();
        })
}

const internQuestions = () => {
    inquirer.prompt(internQuestionArr)
        .then((results) => {
            results = new Intern(results.name, results.id, results.email, results.school)
            teamArray.push(results);
            return employeePrompt();
        })
}

const employeePrompt = () => {
    inquirer.prompt([{
        type: "list",
        name: "employeeType",
        message: "Who would you like to add on your team?",
        choices: [
            { name: "Engineer", value: "addEngineer" },
            { name: "Intern", value: "addIntern" },
            { name: "Complete", value: "complete" }
        ]
    }])
        .then(result => {
            if (result.employeeType === "addManager") {managerQuestions();};
            if (result.employeeType === "addEngineer") { engineerQuestions(); };
            if (result.employeeType === "addIntern") { internQuestions(); };
            if (result.employeeType === "complete") {
                let html=template(teamArray)
                console.log("teamArray")
                writeFile(html);
            }
        })
}

init();
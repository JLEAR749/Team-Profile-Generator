const inquirer = require('inquirer');
const fs = require('fs');
const {Manager, managerQuestionArr} = require('./lib/Manager');
const {Engineer, engineerQuestionArr} = require('./lib/Engineer.js');
const {Intern, internQuestionArr} = require('./lib/Intern.js');
const teamArray = [];
const template = require('./src/generateHTML');

const teamArrary = []

const init = () => { managerQuestions() }
const managerQuestions = () => {
    inquirer.prompt(managerQuestionArr)
        .then((data) => {
            results = new Manager(results.name, results.id, results.email, results.officeNumber)
            teamArray.push(results);
            return employeePrompt();
        })
}
const engineerQuestions = () => {
    inquirer.prompt(engineerQuestionArr)
        .then((results) => {
            results = new Engineer(results.name, results.id, results.email, results.GitHub);
            teamArray.push(results);
            return employeePrompt();
        })
}

const internQuestions = () => {
    inquirer.prompt(internQuestionArr)
        .then((data) => {
            results = new Intern(results.name, results.id, results.email, results.school);
            teamArray.push(data);
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
            if (result.employeeType === "addEngineer") { engineerQuestionsArr(); };
            if (result.employeeType === "addIntern") { internQuestionsArr(); };
            if (result.employeeType === "complete") {
                let HTML = template(teamArray)
                console.log("...")
                writeFile(HTML);
            }
        })
}

init();
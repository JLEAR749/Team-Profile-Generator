const inquirer = require('inquirer');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');
const teamArray = [];

const template  = require('./src/template');
const writeFile = require ('./src/write-file.js')

const init = () => {managerQuestions()} 
const managerQuestions = () => {
    inquirer.prompt(Manager.managerQuestionArr)
        .then((data) => {
            result = new Manager(data.managerName, data, data.managerId, data.managerEmail, data.managerOfficeNumber);
            teamArray.push(answers);
            return employeePrompt();
        })
}
const engineerQuestions = () => {
    inquirer.prompt(Manager.engineerQuestionArr)
        .then((data) => {
            result = new Engineer(data.managerName, data, data.managerId, data.managerEmail, data.managerOfficeNumber);
            teamArray.push(answers);
            return employeePrompt();
        })
}

const internQuestions = () => {
    inquirer.prompt(Manager.internQuestionArr)
        .then((data) => {
            result = new Intern(data.managerName, data, data.managerId, data.managerEmail, data.managerOfficeNumber);
            teamArray.push(answers);
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
            { name: "complete", value: "complete" }
        ]
    }])
        .then(result => {
            if (result.employeeType === "addEngineer") { engineerQuestions(); };
            if (result.employeeType === "addIntern") { internQuestions(); };
            if (result.employeeType === "complete") {
                const HTML = template(teamArray)
                console.log("...")
                fs.writeFile(HTML);
            }
        })
}

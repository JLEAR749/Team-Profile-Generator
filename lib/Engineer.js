const Employee = require('./Employee')

const engineerQuestionArr =[
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
}
]

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email)
        this.github = github
    }
    getGitHub() {
        return this.github;
    }
    getRole() {
        return 'engineer';
    }
}

module.exports = {Engineer, engineerQuestionArr};
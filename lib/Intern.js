const Employee = require('./Employee')
const internQuestionArr =[
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
]

class Intern extends Employee {
    constructor(name, id,  email, school) {
        super(name, id, email)
        this.school = school
    }
    getSchool() {
        return this.school
    }
    getRole() {
        return 'Intern'
    }
}

module.exports = {Intern, internQuestionArr};
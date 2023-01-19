const Employee = require('./Employee')

const managerQuestionArr =[
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
]

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email)
        this.officeNumber = officeNumber;
        
    }
    getRole(){
        return 'manager'
    }

    getOfficeNumber() {
        return this.officeNumber
    }
}

module.exports = {Manager, managerQuestionArr };
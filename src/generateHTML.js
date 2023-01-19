const { template } = require("@babel/core")
const { moduleExpression } = require("@babel/types")
const { json } = require("stream/consumers")
const { Engineer } = require("../lib/Engineer")

// Manager Card 
const manager = managerData => {
    return `
    <div id=${managerData.getRole()}
        <div class = box name- role manager-name">
        <h2>${managerData.getName()}/h2>
        <h3> Role: ${managerData.getRole()}</h3>
    </div>
    <div class = "box employee- info">
        <ul class= "list-group">
            <li class = "list-group-item"> ID: ${managerData.getId()}</li>
            <li class = "list-group-item"> Email: <a href="mailto:${managerData.getEmail()}">${managerData.getEmail()}</a></li>
            <li class = "list-group-item"> Office Number: ${managerData.getOfficeNumber()}</li>
        </ul>
    </div>
 </div>
`
}

//Engineer Card
const engineer = engineerData => {
    return `
    <div id=${engineerData.getRole()}
        <div class = box name- role engineer-name">
        <h2>${engineerData.getName()}/h2>
        <h3> Role: ${engineerData.getRole()}</h3>
    </div>
    <div class = "box employee- info">
        <ul class= "list-group">
            <li class = "list-group-item"> ID: ${engineerData.getId()}</li>
            <li class = "list-group-item"> Email: <a href="mailto:${engineerData.getEmail()}">${engineerData.getEmail()}</a></li>
            <li class = "list-group-item"> Github: ${engineerData.getGitHub()}"target="_blank">www.github.com/${engineerData.getGitHub()}</li>
        </ul>
    </div>
 </div>
`
}

// Intern Card
const intern = internData => {
    return `
    <div id=${internData.getRole()}
        <div class = box name- role intern-name">
        <h2>${internData.getName()}/h2>
        <h3> Role: ${internData.getRole()}</h3>
    </div>
    <div class = "box employee- info">
        <ul class= "list-group">
            <li class = "list-group-item"> ID: ${internData.getId()}</li>
            <li class = "list-group-item"> Email: <a href="mailto:${internData.getEmail()}">${internData.getEmail()}</a></li>
            <li class = "list-group-item"> Office Number: ${internData.getSchool()}</li>
        </ul>
    </div>
 </div>
`
}

const employeeDiv = teamArr => {
    const employeeHTML = ""

    for (i = 0; i < teamArr.length; i++) {
        if (teamArr[i].getRole() === "Manager") {
            employeeHTML = employeeHTML + manager(teamArr[i])
        }
        if (teamArr[i].getRole() === "Engineer") {
            employeeHTML = employeeHTML + engineer(teamArr[i])
        }
        if (teamArr[i].getRole() === "Intern") {
            employeeHTML = employeeHTML + intern(teamArr[i])
        }
    } return employeeHTML
}
module.exports = template;
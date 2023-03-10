// Manager Card Template
const manager = managerData => {
    return `
    <div id="${managerData.getRole()}--card" class="box card">
     <div class= "box name-role manager-name">
        <h2>${managerData.getName()}</h2>
        <h3>Role: ${managerData.getRole()}</h3>
    </div>
    <div class="box employee-info">
     <ul class="list-group">
      <li class="list-group-item">ID: ${managerData.getId()}</li>
      <li class="list-group-item">Email: <a href="mailto:${managerData.getEmail()}">${managerData.getEmail()}</a></li>
      <li class="list-group-item">Office Number: ${managerData.getOfficeNumber()}</li>
     </ul>
    </div>
   </div>
   `
}

// Engineer Card Template
const engineer = engineerData => {
    return `
    <div id="${engineerData.getRole()}--card" class="box card">
     <div class= "box name-role manager-name">
        <h2>${engineerData.getName()}</h2>
        <h3>Role: ${engineerData.getRole()}</h3>
    </div>
    <div class="box employee-info">
     <ul class="list-group">
      <li class="list-group-item">ID: ${engineerData.getId()}</li>
      <li class="list-group-item">Email: <a href="mailto:${engineerData.getEmail()}">${engineerData.getEmail()}</a></li>
      <li class="list-group-item">GitHub:
      <a href="https://www.github.com/${engineerData.getGitHub()}" target="_blank">www.github.com/${engineerData.getGitHub()}</a></li>
     </ul>
    </div>
   </div>
   `
}
// Intern Card Template
const intern = internData => {
    return `
    <div id="${internData.getRole()}--card" class="box card">
     <div class= "box name-role manager-name">
        <h2>${internData.getName()}</h2>
        <h3>Role: ${internData.getRole()}</h3>
    </div>
    <div class="box employee-info">
     <ul class="list-group">
      <li class="list-group-item">ID: ${internData.getId()}</li>
      <li class="list-group-item">Email: <a href="mailto:${internData.getEmail()}">${internData.getEmail()}</a></li>
      <li class="list-group-item">School: ${internData.getSchool()}</li>
     </ul>
    </div>
   </div>
   `
}

const employeeDiv = teamArray => {
    let employeeHTML = ''

    for (i = 0; i < teamArray.length; i++) {
        if (teamArray[i].getRole() === "Manager") {
            employeeHTML = employeeHTML + manager(teamArray[i])
        }
        if (teamArray[i].getRole() === "Engineer") {
            employeeHTML = employeeHTML + engineer(teamArray[i])
        }
        if (teamArray[i].getRole() === "Intern") {
            employeeHTML = employeeHTML + intern(teamArray[i])
        }
    } return employeeHTML
}

const template = data => {
    return `
    <!DOCTYPE html>
    <html>
     <head>
        <title> Team Profile </title>
        <link rel="stylesheet" href="/assets/style.css"><sourc src="../src/generatedHTML.js" type="template">
     </head>
     <body>
       <header class = "container">
        <div class = "flex box justify- center my-team">
         <h1> My team </h1>
        </div>
       </header>
       <main class = "containers">
       ${employeeDiv(data)}
       </main>
     </body>
    </html>
`
}

module.exports = template;
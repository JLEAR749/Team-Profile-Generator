const inquirer = require('inquirer')


function mainPrompt() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'manager',
            message: 'creating manager.  please wait...',
        }
    ]).then((result) => {
        console.log('main prompt result', result)
        return result
    }).catch((err) => console.error(err))
}


console.log(mainPrompt())
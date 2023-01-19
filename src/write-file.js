const fs = require('fs');

const writeFile = (fileContent) => {
    fs.writeFile('./dist/index.html', fileContent, (err) => {
        if (err) {
            console.log(err);
        }else{
            console.log("Success! Your team has been generated!")
        }
    });
};

module.export=writeFile.js;
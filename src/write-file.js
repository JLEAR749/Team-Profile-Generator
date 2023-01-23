const fs = require('fs');

const writeFile = (fileContent) => {
	fs.writeFile('./dist/index.html', fileContent, (err) => {
		if (err) {
			console.log(err);
		} else {
			console.log('Success!  Your team profile file has been generated under the dist folder!');
		}
	});
};

module.exports = writeFile;
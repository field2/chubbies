var fs = require('fs');
var Utils = require('../core');

/* Utils.readFile();
 * Read a file */

function readFile (filePath) {
	return fs.readFileSync(filePath, 'utf8');
}

function readFolder (folderPath) {
	return Utils.each(folderPath + '**/*');
}

module.exports = {
	file: readFile,
	folder: readFolder
};

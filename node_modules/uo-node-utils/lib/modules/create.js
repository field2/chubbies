var fs = require('fs');
var Utils = require('../core');
var mkdirp = require('mkdirp');

/* Utils.create.folder();
 * Utils.create.file();
 * Create folder if needed
 * Then create file */

function createFile (filePath, fileContent) {
	var folderPath = filePath.split('/');
	folderPath.pop();
	folderPath = folderPath.join('/');

	if (!Utils.exist(folderPath))
		createFolder(folderPath);

	fs.writeFileSync(filePath, fileContent);
	Utils.log('Created file: ' + filePath);

	return Utils;
}

function createFolder (obj) {
	if (Utils.tools.isArray(obj))
		obj.forEach(newFolder);
	else
		newFolder(obj);

	return Utils;
}

function newFolder (folderPath) {
	if (Utils.exist(folderPath))
		return false;

	mkdirp.sync(folderPath);
	return Utils.log('Created folder: ' + folderPath);
}

module.exports = {
	folder: createFolder,
	file: createFile
};

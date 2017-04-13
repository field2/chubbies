var fs = require('fs');
var Utils = require('../core');

/* Utils.clear()
 * If folder exist, clear files inside
 * Else create it */

function clearFile (obj) {
	if (Utils.tools.isArray(obj))
		obj.forEach(_clearFile);
	else
		_clearFile(obj);

	return Utils;
}

function _clearFile (path) {
	fs.writeFileSync(path, '');
	return Utils.log('Cleared: ' + path);
};

function clearFolder (obj) {
	if (Utils.tools.isArray(obj))
		obj.forEach(_clearFolder);
	else
		_clearFolder(obj);

	return Utils;
}

function _clearFolder (path) {
	var exist = Utils.exist(path);
	var suf = path.slice(-1) === '/' ? '**/*' : '/**/*'
	return exist ? Utils.del(path + suf) : Utils.create.folder(path);
}


module.exports = {
	file: clearFile,
	folder: clearFolder
};

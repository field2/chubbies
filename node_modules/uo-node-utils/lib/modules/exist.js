var fs = require('fs');

/* Utils.exist()
 * return existence of a path */

module.exports = function (filePath) {
	return fs.existsSync(filePath);
};

var fs = require('fs');

/* Utils.trim();
 * Remove all whitespace and backlines
 * If arg is a path, update file content
 * Else, return arg trimmed */

function trim (str) {
	return str.replace(/(?:(?:^|\n)\s+|\s+(?:$|\n))/g,'').replace(/\s+/g,'');
};

module.exports = function (content) {
	if (!this.exist(content))
		return trim(content);

	var fileContent = this.read.file(content);
	var newContent = trim(fileContent);

	fs.writeFileSync(content, newContent);
	this.log('Trimed: ' + content);

	return this;
};

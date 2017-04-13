var fs = require('fs');
var Utils = require('./core');


Utils.silent = false;

Utils.del = require('./modules/del');
Utils.each = require('./modules/each');
Utils.log = require('./modules/log');
Utils.read = require('./modules/read');
Utils.trim = require('./modules/trim');
Utils.clear = require('./modules/clear');
Utils.check = require('./modules/check');
Utils.create = require('./modules/create');
Utils.exist = require('./modules/exist');
Utils.extend = require('./modules/extend');
Utils.replaceInFile = require('./modules/replace-in-file');

Utils.tools = {
	isArray: function (path) {
		return Array.isArray(path);
	}
}

module.exports = Utils;

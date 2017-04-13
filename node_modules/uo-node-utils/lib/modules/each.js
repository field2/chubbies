var glob = require('glob');

/* Utils.each()
 * return an array of path */

module.exports = function (path, cb) {
	var arr = glob.sync(path);
	return cb ? arr.forEach(cb) : arr;
};

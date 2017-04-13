var del = require('del');

/* Utils.del()
 * Delete a specify path (file/folder) */

module.exports = function (obj) {
	del.sync(obj);
	this.log('Cleared: ' + obj);
	return this;
};

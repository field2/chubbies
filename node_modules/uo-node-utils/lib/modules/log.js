/* Utils.log();
 * Log a message if silent is false */

module.exports = function (str) {
	if (!this.silent)
		console.log('> ' + str);

	return this;
};

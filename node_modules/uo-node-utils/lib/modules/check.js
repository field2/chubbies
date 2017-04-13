var Utils = require('../core');

/* Utils.check.value();
 * Utils.check.fn();
 * Test typeof of a returned value
 * or of a single value */

function checkValue (val, expectedType, name) {
	if (typeof val !== expectedType) {
		throw new Error(name + ' must return ' + expectedType);
	}
	return Utils;
}

function checkFn (fn, args, expectedType, name) {
	if (typeof fn(args) !== expectedType) {
		throw new Error(name + ' must return ' + expectedType);
	}
	return Utils;
}

module.exports = {
	value: checkValue,
	fn: checkFn
};

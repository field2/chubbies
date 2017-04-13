/* Utils.extend();
 * extend Utils as the User wants */

module.exports = function (obj) {
	var self = this;
	var _extend = function (_obj) {
		self[_obj.name] = _obj.content;
	};

	if (this.tools.isArray(obj))
		obj.forEach(_extend);
	else
		_extend(obj);

	return this;
};

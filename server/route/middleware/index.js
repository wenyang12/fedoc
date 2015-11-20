var _ = require('lodash');

var config = context.config,
	util = context.util,
	dirPath = context.dirPath,
	filePath = context.filePath;


module.exports = {
	requireLogin: function (req, res, next) {
		next();
	}
};
var url = require('url');
var config = context.config,
	util = context.util,
	dirPath = context.dirPath,
	userDao = util.getDao('User'),
	filePath = context.filePath;

var isPro = util.isPro(),
	isDev = util.isDev();


exports.index = function (req, res) {
	return res.render('site');
};

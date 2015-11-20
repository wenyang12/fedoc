// 环境变脸默认为dev
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

var path = require('path'),
	express = require('express'),
	passport = require('passport');

// 注入全局上下文
require(path.join(__dirname, 'lib', 'util')).setContext(__dirname);

var config = context.config,
	util = context.util,
	dirPath = context.dirPath,
	filePath = context.filePath;


require(filePath.db).connect(function (mongoose) {

	var app = express();

	// passport配置
	require(filePath.passport)(passport);

	// Express配置
	require(filePath.express)(app, passport, mongoose);

	// Route配置
	require(filePath.route)(app);

		// Route配置
	require(filePath.init)(app);

	app.listen(app.get('port'), function () {
		console.log('Listen on port ' + app.get('port'));
	});
});
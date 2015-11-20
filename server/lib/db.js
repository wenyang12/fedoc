var path = require('path'),
	fs = require('fs-extra'),
	mongoose = require('mongoose');

var config = context.config,
	util = context.util,
	dirPath = context.dirPath,
	filePath = context.filePath;

var DB_CONFIG = config.APP.db,
	DB_HOST = 'mongodb://' + DB_CONFIG.host + ':' + DB_CONFIG.port + '/' + DB_CONFIG.name;



// 连接数据库
exports.connect = function (callback) {
	db = mongoose.connect(DB_HOST);
	mongoose.connection.on('close', function (str) {
		console.err('DB disconnected: ' + str);
	});

	mongoose.connection.once('open', function () {
		console.log('DB connected %s', DB_HOST);
		callback(mongoose);
	});
};
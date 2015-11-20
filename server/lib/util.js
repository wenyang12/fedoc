var path = require('path'),
	fs = require('fs-extra'),
	_ = require('lodash'),
	moment = require('moment'),
	mongoose = require('mongoose'),
	Schema = mongoose.Schema;



// 注册上下文
exports.setContext = function (serverPath) {
	var self = this,
		rootPath = path.join(serverPath, '..'),
		clientPath = path.join(rootPath, 'client'),
		configPath = path.join(serverPath, 'config');

	global.context = {
		env: process.env.NODE_ENV,
		config: require(configPath),
		util: self,
		// 文件夹路径
		dirPath: {
			root: rootPath,
			client: clientPath,
			server: serverPath,
			config: configPath,
			controller: path.join(serverPath, 'controller'),
			dao: path.join(serverPath, 'dao'),
			lib: path.join(serverPath, 'lib'),
			model: path.join(serverPath, 'model'),
			route: path.join(serverPath, 'route'),
			test: path.join(serverPath, 'test')
		},
		// 文件路径
		filePath: {}
	};

	// client下视图文件夹路径
	context.dirPath.view = path.join(clientPath, 'src', 'views');

	// client下 dist 文件夹路径
	context.dirPath.dist = path.join(clientPath, 'dist');

	// lib文件夹下子文件路径
	libPath = context.dirPath.lib;

	_.forEach(fs.readdirSync(libPath), function (fileName) {
		if (~fileName.indexOf('.js')) {
			fileName = fileName.replace('.js', '');
			context.filePath[fileName] = path.join(libPath, fileName);
		}
	});

	context.pkgJSON = require(path.join(rootPath, 'package.json'));

	// 注册model
	this.registerModels();

	// 注册dao
	this.registerDaos();

	// 设置前端config
	setConfigFront();
};

// 前端配置文件
function setConfigFront() {
	var config = context.config;
	context.configFront = {
		WX: config.WX,
		HOST: config.HOST,
		env: context.env
	};
}

// 注册数据模型
exports.registerModels = function () {
	_.forEach(fs.readdirSync(context.dirPath.model), function (fileName) {
		if (/\.js$/.test(fileName)) {
			var modelName = fileName.replace('.js', ''),
				modelPath = path.join(context.dirPath.model, fileName);
			require(modelPath);
		}
	});
};

// 注册Dao
exports.registerDaos = function () {
	require(context.dirPath.dao);
};

exports.dateTimeFormat = function (date) {
	return getUTC(date).format("YYYY-MM-DD HH:mm");
};
exports.dateFormat = function (date) {
	return getUTC(date).format("YYYY-MM-DD");
};

exports.getCtrl = function (ctrlName) {
	return require(path.join(context.dirPath.controller, ctrlName));
};

exports.getDao = function (daoName) {
	return require(context.dirPath.dao)[daoName];
};

exports.isPro = function () {
	return context.env === 'pro';
};

exports.isDev = function () {
	return context.env === 'dev';
};



function getUTC(date) {
	return moment(date).utc().zone(-8);
}


//获取model字段类型
exports.getSchemaType = function (type) {
	switch (type) {
	case 'string':
		return String;
	case 'objectid':
		return Schema.ObjectId;
	case 'number':
		return Number;
	case 'array':
		return Array;
	case 'string':
		return String;
	case 'boolean':
		return Boolean;
	default:
		return String;
	}
};

//创建主键ABCDEFGHIJKLMNOPQRSTUVWXTZ
exports.createToken = function () {
	var length = length || 6;
	var chars = '0123456789abcdefghiklmnopqrstuvwxyz'.split('');
	str = '';
	for (var i = 0; i < length; i++) {
		str += chars[Math.floor(Math.random() * chars.length)];
	}
	return str;
};

//将文件名转化为对象名,例如 user-modal  =>  UserModel
exports.transFormFileToClassName = function (file) {
	var words = file.split("-");
	var name = '';
	for (var i = 0; i < words.length; i++) {
		name = name + words[i].slice(0, 1).toUpperCase() + words[i].slice(1);
	}
	return name;
};


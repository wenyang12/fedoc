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

/**
 * Generate the pagination
 * @param {int} page
 * @param {int} perPage
 * @param {int} count
 * @return {Object}
 */
exports.pagination = function(options, count) {
    options.page += 1;
    var pagination = {}, //分页对象
        curpage = options.page, //当前页
        perPage = options.perPage, //每页显示数量
        pages = Math.ceil(count / perPage), //所有页
        limitPage = options.limitPage, //最多出现页数
        clas = "no",
        skipPage = 5; //当前页左右跨度
    var start = 1,
        end = pages;
    if (count <= perPage) return null;
    //向左
    pagination.content = [];
    //总页数大于最多出现页数
    if (pages > limitPage) {
        if (curpage + skipPage > limitPage) {
            //求出当前页码组最后页码
            end = curpage + skipPage + (skipPage > curpage ? (skipPage - curpage) : 0);
            //最后页码超出总数，最后页码则为页码总数
            if (end > pages) {
                end = pages;
            }
            start = curpage - skipPage <= 0 ? 1 : (curpage - skipPage);
            if (end - start < skipPage * 2 && curpage > 1) {
                start = end - skipPage * 2 + 1;
                start = start <= 0 ? 1 : start;
            }
            pagination.left = curpage - 1 <= 0 ? 1 : curpage - 1;
            pagination.right = curpage + 1 > pages ? pages : (curpage + 1);
        } else {
            if (curpage <= 1) {
                pagination.left = 1;
            } else {
                pagination.left = curpage - 1;
            }
            pagination.right = curpage + 1;
            end = limitPage;
        }
        if (curpage - skipPage > 1) {
            pagination.leftIgnore = true;
        }
    } else {
        if (curpage + 1 >= pages) {
            pagination.right = pages;
        } else {
            pagination.right = curpage + 1;
        }
        if (curpage - 1 === 0) {
            pagination.left = 1;
        } else {
            pagination.left = curpage - 1;
        }
    }
    if (end < pages) {
        pagination.rightIgnore = true;
    }
    for (var p = start; p <= end; p++) {
        if (p == curpage) {
            clas = 'active';
        } else {
            clas = 'no;';
        }
        pagination.content.push({
            pclass: clas,
            curpage: p,
            ptext: p
        });
    }
    return pagination;
};


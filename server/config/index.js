var path = require('path'),
	fs = require('fs-extra'),
	_ = require('lodash'),
	CONFIG = {},
	CONFIG_ALL = require(path.join(__dirname, 'env', 'all')),
	configName = process.env.NODE_ENV;


CONFIG_ENV = require(path.join(__dirname, 'env', configName)) || {};



// 需要改进成遍历所有文件夹
_.forEach(fs.readdirSync(__dirname), function (fileName) {
	if (/\.js$/.test(fileName) && fileName !== 'index.js') {
		CONFIG = _.merge(CONFIG, require(path.join(__dirname, fileName)));
	}
});


CONFIG = _.merge(CONFIG, CONFIG_ALL);


CONFIG = _.merge(CONFIG, CONFIG_ENV);
module.exports = CONFIG;
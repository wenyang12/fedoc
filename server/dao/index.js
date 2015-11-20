var path = require('path'),
	fs = require('fs-extra'),
	_ = require('lodash'),
	mongoose = require('mongoose');


var config = context.config,
	util = context.util,
	dirPath = context.dirPath,
	filePath = context.filePath;

// var daoBase = require(path.join(__dirname, 'daoBase'));
var daoBase = require(path.join(__dirname, 'daobase'));

_.forEach(fs.readdirSync(context.dirPath.model), function (modelFileName) {
	if (/\.js$/.test(modelFileName)) {
		var modelName = util.transFormFileToClassName(modelFileName.replace('.js', '')),
			Model = mongoose.model(modelName),
			daoFilePath = path.join(context.dirPath.dao, modelFileName);
		if (fs.existsSync(daoFilePath)) {
			module.exports[modelName] = _.merge(daoBase.getInstance(Model), require(daoFilePath));
		} else {
			module.exports[modelName] = daoBase.getInstance(Model);
		}
	}
});

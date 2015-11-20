var path 	= require('path'),
	fs 		= require('fs-extra'),
	_ 		= require('lodash');

var config 	= context.config,
	util 	= context.util,
	dirPath = context.dirPath,
	filePath = context.filePath;


// 路由根目录
var routeDirPath = dirPath.route;

// 路由文件路径
var routeMappingPath = path.join(routeDirPath, 'mapping');

// 路由中间件路径
var routeMWPath = path.join(routeDirPath, 'middleware');

var mw = require(routeMWPath);

module.exports = function(app) {

	// 注册mapping文件夹中的路由
	_.forEach(fs.readdirSync(routeMappingPath), function(routeFileName, index) {
		if (/\.js$/.test(routeFileName)) {
			var routeFilePath = path.join(routeMappingPath, routeFileName),
				ctrlName = routeFileName.replace('.js', ''),
				ctrl = util.getCtrl(ctrlName);

			require(routeFilePath)(app, mw, ctrl);
		}
	});
};
var mongoose = require('mongoose'),
	async = require('async'),
	fs = require('fs-extra'),
	_ = require('lodash'),
	path = require('path'),
	util = context.util,
	config = context.config,
	dirPath = context.dirPath,
	exec = require('child_process').exec;


exports.init = function(req, res) {
		var key = req.param('key');
	// if (key !== 'fedoc') {
	// 	return res.send('无权限请求');
	// }
	console.log('构建开始'+dirPath.root);
	exec(dirPath.root+'/deploy.sh', {
		cwd: dirPath.root
	}, function(err) {
		if (!err) {
			console.log('[重新构建成功]');
		} else {
			console.log(err);
		}
	});
	res.send('deploy ok');
};

var async = require('async');
var exec = require('child_process').exec;
var config = context.config,
	dirPath = context.dirPath,
	filePath = context.filePath;


exports.init = function(req, res) {
		var key = req.param('key');
	if (key !== 'fedoc') {
		return res.send('无权限请求');
	}
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
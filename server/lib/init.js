var url = require('url');
var config = context.config,
	util = context.util,
	dirPath = context.dirPath,
	filePath = context.filePath,
	userDao = util.getDao('User'),
	async = require('async'),
	superadmins = config.USERS.superadmins || [];

var isPro = util.isPro(),
	isDev = util.isDev();


module.exports = function() {
	async.each(superadmins, function(superadmin, next) {
		autoCreateUser(superadmin, function() {

			next();
		});
	}, function() {

	});
};


function autoCreateUser(user, callback) {
	var email = user.email;
	var pwd = user.pwd;
	async.auto({
		'checkUser': function(cb) {
			userDao.countByQuery({
				email: email
			}, function(err, count) {
				if (count === 0) {
					console.log('[用户创建成功]' + email);
					return cb(null);
				} else {
					console.log('[用户已创建]' + email);
					callback(null, user);
				}
			});
		},
		'createUser': ['checkUser', function(cb) {
			var _user = {
				email: email,
				nickname: email,
				pwd: pwd
			};
			userDao.createBySave(_user, cb);
		}]
	}, function(err) {
		if (!err) {
			callback(null);
		} else {
			console.log(err);
			callback(err);
		}
	});
}
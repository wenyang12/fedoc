var mongoose = require('mongoose'),
	async = require('async'),
	util = context.util,
	config = context.config,
	userDao = util.getDao('User');


exports.updateInfo = function(req, res) {
	var form = req.body;
	var user = req.user;
	var userId = req.params.userId;
	var isAdmin = user.isAdmin;
	var isAuthor = userId.toString() === user._id.toString();
	if (!isAdmin) {
		if (!isAuthor) {
			return res.errorMsg(10000, '无权限操作');
		}
	}
	userDao.update({
		_id: userId
	}, {
		nickname: form.nickname,
		avatar: form.avatar
	}, '', function(err) {
		if (!err) {
			if (isAuthor) {
				req.user.nickname = form.nickname;
				req.user.avatar = form.avatar;
				req.logIn(req.user, function() {
					return res.successMsg();
				});
			} else {
				return res.successMsg();
			}
		} else {
			console.log(err);
			return res.errorMsg(10000, '更新失败');
		}
	});
};

exports.updatePwd = function(req, res) {
	var pwd = req.body.pwd,
		npwd = req.body.npwd,
		cpwd = req.body.cpwd,
		user = req.user;
	if (npwd != cpwd) {
		return res.errorMsg(10000, '两次输入的密码不一致');
	}

	async.auto({
		'getUser': function(cb) {
			userDao.getOnePwd({
				_id: user._id
			}, cb);
		},
		'checkAuthenticate': ['getUser',
			function(cb, results) {
				var targetUser = results.getUser;
				if (!targetUser.authenticate(pwd)) {
					return res.errorMsg(10000, '原密码错误');
				} else {
					targetUser.pwd = npwd;
					targetUser.save(cb);
				}
			}
		]
	}, function(err, results) {
		if (!err) {
			return res.successMsg('密码更新成功');
		} else {
			console.log(err);
			res.errorMsg(10000, '服务忙，请稍后再试');
		}
	});

};

exports.create = function(req, res) {
	var form = req.body;
	userDao.createBySave({
		email: form.email,
		nickname: form.email,
		pwd: '000000'
	}, function(err) {
		if (!err) {
			return res.successMsg();
		} else {
			console.log(err);
			return res.errorMsg(10000, '创建失败');
		}
	});
};

exports.delete = function(req, res) {
	var userId = req.params.userId;
	userDao.delete({
		_id: userId
	}, function(err) {
		if (!err) {
			return res.successMsg();
		} else {
			console.log(err);
			return res.errorMsg(10000, '更新失败');
		}
	});
};

exports.list = function(req, res) {
	var page = (req.param('page') || 0) > 0 ? req.param('page') : 1;
	var perPage = config.LIST.perPage,
		limitPage = config.LIST.limitPage,
		keyword = req.param('keyword'),
		tag = req.param('tag');
	var options = {
		page: page - 1,
		perPage: perPage,
		limitPage: limitPage,
	};

	options.criteria = {};

	userDao.list(options, function(err, data) {
		if (!err) {
			data.pagination = util.pagination(options, data.count);
			data.count = parseInt(data.count);
			return res.successMsg(data || null);
		} else {
			console.log(err);
			return res.errorMsg(10000, '获取列表失败');
		}
	});
};


exports.get = function(req, res) {
	var userId = req.params.userId;
	async.auto({
		'getuser': function(cb) {
			userDao.getOne({
				_id: userId
			}, function(err, user) {
				if (!err) {
					if (user) {
						cb(null, user._doc);
					} else {
						return cb('找不到文档');
					}
				} else {
					console.log(err);
					return cb(err);
				}
			});
		}
	}, function(err, results) {
		if (!err) {
			var user = results.getuser;
			return res.successMsg(user);
		} else {
			console.log(err);
			return res.errorMsg(200, '获取文档失败');
		}
	});
};
exports.listAll = function(req, res) {
	userDao.listAll({
		criteria: {}
	}, {
		createdTime: -1
	}, function(err, data) {
		if (!err) {
			return res.successMsg({
				users: data
			} || null);
		} else {
			console.log(err);
			return res.errorMsg(10000, '获取列表失败');
		}
	});
};
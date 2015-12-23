var mongoose = require('mongoose'),
	async = require('async'),
	util = context.util,
	config = context.config,
	deployDao = util.getDao('Deploy');


exports.update = function(req, res) {
	var form = req.body;
	var deployId = req.params.deployId;
	deployDao.update({
		_id: deployId
	}, form, '', function(err) {
		if (!err) {
			return res.successMsg();
		} else {
			console.log(err);
			return res.errorMsg(10000, '更新失败');
		}
	});
};

exports.create = function(req, res) {
	var form = req.body;
	deployDao.createBySave(form, function(err) {
		if (!err) {
			return res.successMsg();
		} else {
			console.log(err);
			return res.errorMsg(10000, '创建失败');
		}
	});
};

exports.delete = function(req, res) {
	var deployId = req.params.deployId;
	deployDao.delete({
		_id: deployId
	}, function(err) {
		if (!err) {
			return res.successMsg();
		} else {
			console.log(err);
			return res.errorMsg(10000, '更新失败');
		}
	});
};


exports.get = function(req, res) {
	var deployId = req.params.deployId;
	var user = req.user;
	async.auto({
		'getdeploy': function(cb) {
			deployDao.getOne({
				_id: deployId
			}, function(err, deploy) {
				if (!err) {
					if (deploy) {
						cb(null, deploy._doc);
					} else {
						return cb('找不到分类');
					}
				} else {
					console.log(err);
					return cb(err);
				}
			});
		}
	}, function(err, results) {
		if (!err) {
			var deploy = results.getdeploy;
			if (user) {
				deploy.isAuthor = user._id === deploy.user._id.toString();
			}
			return res.successMsg(deploy);
		} else {
			console.log(err);
			return res.errorMsg(ERRORS_CODE.loadError);
		}
	});
};
exports.listAll = function(req, res) {
	deployDao.listAll({
		criteria: {}
	}, {
		sort: 1,
		createdTime: -1
	}, function(err, data) {
		if (!err) {
			return res.successMsg({
				deploys: data
			} || null);
		} else {
			console.log(err);
			return res.errorMsg(10000, '获取列表失败');
		}
	});
};
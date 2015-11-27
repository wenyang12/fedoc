var mongoose = require('mongoose'),
	async = require('async'),
	util = context.util,
	config = context.config,
	tagDao = util.getDao('Tag');


exports.update = function(req, res) {
	var form = req.body;
	var tagId = req.params.tagId;
	tagDao.update({
		_id: tagId
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
	form.user = userId;
	tagDao.createBySave(form, function(err) {
		if (!err) {
			return res.successMsg();
		} else {
			console.log(err);
			return res.errorMsg(10000, '创建失败');
		}
	});
};

exports.delete = function(req, res) {
	var tagId = req.params.tagId;
	tagDao.delete({
		_id: tagId
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
	var tagId = req.params.tagId;
	var user = req.user;
	async.auto({
		'gettag': function(cb) {
			tagDao.getOne({
				_id: tagId
			}, function(err, tag) {
				if (!err) {
					if (tag) {
						cb(null, tag._doc);
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
			var tag = results.gettag;
			if (user) {
				tag.isAuthor = user._id === tag.user._id.toString();
			}
			return res.successMsg(tag);
		} else {
			console.log(err);
			return res.errorMsg(ERRORS_CODE.loadError);
		}
	});
};
exports.listAll = function(req, res) {
	tagDao.listAll({
		criteria: {}
	}, {
		sort: 1,
		createdTime: -1
	}, function(err, data) {
		if (!err) {
			return res.successMsg({
				tags: data
			} || null);
		} else {
			console.log(err);
			return res.errorMsg(10000, '获取列表失败');
		}
	});
};
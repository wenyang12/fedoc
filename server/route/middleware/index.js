var _ = require('lodash');

var config = context.config,
	util = context.util,
	dirPath = context.dirPath,
	filePath = context.filePath;


module.exports = {
	requireLogin: function(req, res, next) {
		if (!req.isAuthenticated()) {
			var path = req.path.toLowerCase();
			if (path.lastIndexOf('api') < 0) {
				// 如果是套餐页面或帮助页面cookie超时， 重定向至首页
				return res.redirect('/');
			} else {
				return res.errorMsg(201);
			}
		} else {
			next();
		}
	},
	requireAdminLogin: function(req, res, next) {
		if (!req.isAuthenticated()) {
			var path = req.path.toLowerCase();
			if (path.lastIndexOf('api') < 0) {
				// 如果是套餐页面或帮助页面cookie超时， 重定向至首页
				return res.redirect('/');
			} else {
				return res.errorMsg(201, '权限不足');
			}
		} else {
			if (req.user.isAdmin) {
				next();
			} else {
				return res.errorMsg(201, '权限不足');
			}
		}
	}
};
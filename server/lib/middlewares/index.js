var _ = require('lodash'),
    config = process.common.config,
    utils = process.common.utils;

module.exports = {
    requiresLogin: function(req, res, next) {
        if (!req.isAuthenticated()) {
            var path = req.path.toLowerCase();
            if (path.lastIndexOf('api') < 0) {
                // 如果是套餐页面或帮助页面cookie超时， 重定向至首页
                return res.redirect('/');
            } else {
                return res.requestError(201);
            }
        }
    }
};



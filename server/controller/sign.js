var url = require('url');
var async = require('async');
var config = context.config,
    util = context.util,
    dirPath = context.dirPath,
    filePath = context.filePath,
    AUDIO = config.AUDIO;

var isPro = util.isPro(),
    isDev = util.isDev();
var userDao = util.getDao('User');

exports.signout = function(req, res) {
    if (req.user) {
        var user = req.user;
        req.logout();
    }
    return res.redirect(req.headers.referer || '/');
};

exports.reg = function(req, res) {
    var form = req.body;
    userDao.createBySave({
        email: form.email,
        nickname: form.email,
        pwd: '000000'
    }, function(err, _user) {
        if (!err) {
            var signUser = {
                _id: _user._id,
                email: _user.email,
                nickname: _user.nickname,
                avatar: _user.avatar,
                isAdmin: _user.isAdmin
            };
            req.logIn(signUser, function() {
                return res.successMsg({
                    user: signUser
                });
            });
        } else {
            console.log(err);
            return res.errorMsg(10000, '创建失败');
        }
    });

};
exports.login = function(req, res) {
    var form = req.body;
    async.auto({
        //验证登录用户
        'getLoginUser': function(cb) {
            userDao.getLoginUser({
                email: form.email.toLowerCase()
            }, function(err, user) {
                if (!user) {
                    return res.errorMsg(10000, '密码或邮箱错误');
                } else if (user && !user.authenticate(form.pwd)) {
                    return res.errorMsg(10000, '密码或邮箱错误');
                } else {
                    cb(null, user);
                }
            });
        }
    }, function(err, results) {
        var user = results.getLoginUser;
        if (!err && user) {
            var signUser = {
                _id: user._id,
                email: user.email,
                nickname: user.nickname,
                avatar: user.avatar,
                isAdmin: user.isAdmin
            };
            req.logIn(signUser, function() {
                return res.successMsg({
                    user: signUser
                });
            });

        } else {
            return res.errorMsg(10001, '服务器异常');
        }
    });
};

exports.isLogin = function(req, res) {
    if (req.user) {
        return res.successMsg({
            user: req.user
        });
    } else {
        return res.successMsg({});
    }
};

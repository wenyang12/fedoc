var mongoose = require('mongoose'),
    async = require('async'),
    util = context.util,
    config = context.config,
    articleDao = util.getDao('Article');


exports.update = function(req, res) {
    var form = req.body;
    var user = req.user;
    var userId = req.user._id;
    var articleId = req.params.articleId;
    var query = {
        _id: articleId
    };
    // if (!user.isAdmin) {
    // 	query.user = userId;
    // }
    articleDao.update(query, form, '', function(err) {
        if (!err) {
            return res.successMsg();
        } else {
            console.log(err);
            return res.errorMsg(10000, '更新失败');
        }
    });
};

exports.top = function(req, res) {

    var articleId = req.params.articleId;
    var query = {
        _id: articleId
    };
    articleDao.update(query, {
        isTop: parseInt(req.body.flag)
    }, '', function(err) {
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
    var userId = req.user._id;
    form.user = userId;
    articleDao.createBySave(form, function(err) {
        if (!err) {
            return res.successMsg();
        } else {
            console.log(err);
            return res.errorMsg(10000, '创建失败');
        }
    });
};

exports.delete = function(req, res) {
    var articleId = req.params.articleId;
    var query = {
        _id: articleId,
        user: req.user._id
    };

    if (req.user.isAdmin) {
        query = {
            _id: articleId
        };
    }
    articleDao.delete(query, function(err) {
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
    var userId = req.param('userId');
    var options = {
        page: page - 1,
        perPage: perPage,
        limitPage: limitPage,
    };
    if (keyword) {
        keyword = keyword.toLowerCase();
    }
    options.criteria = {};
    if (userId) {
        options.criteria.user = userId;
    }
    if (keyword && (typeof keyword !== 'undefined')) {
        options.criteria['$or'] = [];
        var titleObj = {};
        var contentObj = {};
        keyword = keyword.toString('UTF-8');
        titleObj.title = {
            $regex: '(.)*' + keyword + '(.)*$',
            $options: 'i'
        };
        contentObj.content = {
            $regex: '(.)*' + keyword + '(.)*$',
            $options: 'i'
        };
        options.criteria['$or'].push(titleObj);

        options.criteria['$or'].push(contentObj);
    }
    if (tag) {
        options.criteria.tags = {
            $elemMatch: {
                $in: [tag]
            }
        };
    }

    articleDao.list(options, function(err, data) {
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


exports.listHot = function(req, res) {
    articleDao.listHot(function(err, data) {
        if (!err) {
            return res.successMsg(data || null);
        } else {
            console.log(err);
            return res.errorMsg(10000, '获取热门文档失败');
        }
    });
};

exports.get = function(req, res) {
    var articleId = req.params.articleId;
    var user = req.user;
    async.auto({
        'getArticle': function(cb) {
            articleDao.getOne({
                _id: articleId
            }, function(err, article) {
                if (!err) {
                    if (article) {
                        article.views++;
                        article.save(function() {

                        });
                        cb(null, article._doc);
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
            var article = results.getArticle;
            if (user) {
                // article.isAuthor = user.isAdmin || user._id === article.user._id.toString();
                article.isAuthor = true; //默认所有文章都开启编辑模式
            }
            return res.successMsg(article);
        } else {
            console.log(err);
            return res.errorMsg(200, '获取文档失败');
        }
    });
};

var mongoose = require('mongoose'),
    ArticleModel = mongoose.model('Article'),
    _ = require('lodash');

exports.getOne = function(query, callback) {
    var fileds = '_id title content views user attachments tags createdTime';
    ArticleModel.findOne(query, fileds, {}).populate([{
        path: 'user',
        select: '_id nickname avatar'
    }]).exec(callback);
};

exports.list = function(options, callback) {
    options.sql = '_id title user attachments createdTime views tags isTop';
    ArticleModel.count(options.criteria, function(err, count) {
        ArticleModel.find(options.criteria, options.sql)
            .populate([{
                path: 'user',
                select: '_id nickname avatar'
            }])
            .sort(options.sort || {
                isTop: -1,
                createdTime: '-1'
            })
            .limit(options.perPage)
            .skip(options.perPage * options.page)
            .exec(function(err, articles) {
                if (!err) {

                    var data = {
                        articles: articles,
                        count: count
                    };
                    callback(null, data);
                } else {
                    callback(err);
                }
            });
    });
};

exports.listHot = function(callback) {
    var sql = '_id title views';
    ArticleModel.find(sql).limit(20)
        .sort({
            views: -1,
            createdTime: '-1'
        })
        .exec(function(err, articles) {
            if (!err) {
                var data = {
                    articles: articles
                };
                callback(null, data);
            } else {
                callback(err);
            }
        });
};

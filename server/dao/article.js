var mongoose = require('mongoose'),
	ArticleModel = mongoose.model('Article');

exports.getOne = function(query, callback) {
	var fileds = '_id title content user attachments tags createdTime';
	ArticleModel.findOne(query, fileds, {}).populate([{
		path: 'user',
		select: '_id nickname avatar'
	}]).exec(callback);
};

exports.list = function(options, callback) {
	options.sql = '_id title user createdTime tags';
	ArticleModel.count(options.criteria, function(err, count) {
		ArticleModel.find(options.criteria, options.sql)
			.populate([{
				path: 'user',
				select: '_id nickname avatar'
			}])
			.sort(options.sort || {
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
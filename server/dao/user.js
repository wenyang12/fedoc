var mongoose = require('mongoose'),
	UserModel = mongoose.model('User');

exports.getLoginUser = function(query, callback) {
	var fileds = '_id email hashed_pwd salt nickname avatar';
	UserModel.findOne(query, fileds, {}, callback);
};
exports.getOnePwd = function(query, callback) {
	var fileds = '_id hashed_pwd salt';
	UserModel.findOne(query, fileds, {}, callback);
};

exports.getOne = function(query, callback) {
	var fileds = '_id nickname email avatar';
	UserModel.findOne(query, fileds, {}).exec(callback);
};

exports.list = function(options, callback) {
	options.sql = '_id nickname email avatar createdTime';
	UserModel.count(options.criteria, function(err, count) {
		UserModel.find(options.criteria, options.sql)
			.sort(options.sort || {
				createdTime: '-1'
			})
			.limit(options.perPage)
			.skip(options.perPage * options.page)
			.exec(function(err, users) {
				if (!err) {
					var data = {
						users: users,
						count: count
					};
					callback(null, data);
				} else {
					callback(err);
				}
			});
	});
};
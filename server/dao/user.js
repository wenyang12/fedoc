var mongoose = require('mongoose'),
	UserModel = mongoose.model('User');

exports.getLoginUser = function(query, callback) {
	var fileds = '_id email hashed_pwd salt nickname avatar';
	UserModel.findOne(query, fileds, {}, callback);
};
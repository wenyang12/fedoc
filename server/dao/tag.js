var mongoose = require('mongoose'),
	TagModel = mongoose.model('Tag');

exports.getOne = function(query, callback) {
	var fileds = '_id name user createdTime';
	TagModel.findOne(query, fileds, {}).populate([{
		path: 'user',
		select: '_id nickname head'
	}]).exec(callback);
};
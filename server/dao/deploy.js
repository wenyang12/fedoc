var mongoose = require('mongoose'),
	DeployModel = mongoose.model('Deploy');


exports.list = function(options, callback) {
	options.sql = '_id name version developer runTime';
	UserModel.count(options.criteria, function(err, count) {
		UserModel.find(options.criteria, options.sql)
			.sort(options.sort || {
				runTime: -1
			})
			.limit(options.perPage)
			.skip(options.perPage * options.page)
			.exec(function(err, deploys) {
				if (!err) {
					var data = {
						deploys: deploys,
						count: count
					};
					callback(null, data);
				} else {
					callback(err);
				}
			});
	});
};
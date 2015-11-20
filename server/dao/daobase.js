var _ = require('lodash');

DaoBase = (function () {
	var instance = [];

	function constructor(Model) {
		//特权方法
		return {
			Model: Model,
			create: function (doc, callback) {
				Model.create(doc, function (error) {
					console.log(error);
					if (error) return callback(error);
					return callback(null, doc);
				});
			},
			createBySave: function (doc, callback) {
				var model;
				model = new Model(doc);
				return model.save(function (err, doc) {
					return callback(err, doc);
				});
			},
			save: function (model, callback) {
				model.save(function (error) {
					if (error) return callback(error);
					return callback(null, model);
				});
			},
			getById: function (id, callback) {
				Model.findOne({
					_id: id
				}, function (error, model) {
					if (error) return callback(error, null);
					return callback(null, model);
				});
			},
			countByQuery: function (query, callback) {
				Model.count(query, function (error, model) {
					if (error) return callback(error, null);
					return callback(null, model);
				});
			},
			getByQuery: function (query, fileds, opt, callback) {
				Model.find(query, fileds, opt, function (error, model) {
					if (error) return callback(error, null);
					return callback(null, model);
				});
			},
			getOneByQuery: function (query, fileds, opt, callback) {
				Model.findOne(query, fileds, opt, function (error, model) {
					if (error) return callback(error, null);
					return callback(null, model);
				});
			},
			getOneByQueryPopulate: function (query, fileds, opt, populates, callback) {
				var tmp = Model.findOne(query, fileds, opt);
				for (var i = 0; i < populates.length; i++) {
					tmp.populate(populates[i]);
				}
				tmp.exec(callback);

			},
			getAll: function (callback) {
				Model.find({}, function (error, model) {
					if (error) return callback(error, null);
					return callback(null, model);
				});
			},
			delete: function (query, callback) {
				Model.remove(query, function (error) {
					if (error) return callback(error);
					return callback(null);
				});
			},
			fakeDelete: function (query, callback) {
				Model.update(query, {
					deleted: 1
				}, '', function (error) {
					if (error) return callback(error);
					return callback(null);
				})
			},
			update: function (conditions, update, options, callback) {
				if (update._id) {
					delete update._id;
				}
				Model.update(conditions, update, options, function (error) {
					if (error) return callback(error);
					return callback(null);
				});
			},
			list: function (options, sort, callback) {
				var criteria = options.criteria || {},
					seq;
				if (options.sql) {
					seq = Model.find(criteria, options.sql);
				} else {
					seq = Model.find(criteria);
				}
				seq.sort(sort)
					.limit(options.perPage)
					.skip(options.perPage * options.page)
					.exec(callback);
			},
			listAll: function (options, sort, callback) {
				var criteria = options.criteria || {},
					sort = sort || {},
					seq;
				if (options.sql) {
					seq = Model.find(criteria, options.sql);
				} else {
					seq = Model.find(criteria);
				}
				seq.sort(sort)
					.exec(callback);
			},
			listPopulate: function (options, sort, populates, callback) {
				var criteria = options.criteria || {};
				var tmp = Model.find(criteria);

				for (var i = populates.length - 1; i >= 0; i--) {
					tmp = tmp.populate(populates[i]);
				};
				tmp.sort(sort)
					.limit(options.perPage)
					.skip(options.perPage * options.page)
					.exec(callback);
			},
			aggregate: function (query, callback) {
				Model.aggregate(query, function (error) {
					if (error) return callback(error);
					return callback(null);
				});
			}
		}
	}
	return {
		getInstance: function (Model) {
			if (_.indexOf(instance, Model) == -1) {
				instance.push(Model.collection.name)
			}
			return constructor(Model);
		}
	}
})();


module.exports = DaoBase;
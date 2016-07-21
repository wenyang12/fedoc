module.exports = function(myModule) {
	myModule.factory('TagService', ['Restangular', '$timeout',
		function(Restangular, $timeout) {
			var baseRoute = Restangular.all('tags');
			return {
				listAll: function(query) {
					return baseRoute.customGET('', query);
				},
				getOne: function(tagId) {
					return baseRoute.one(tagId)
						.customGET();
				},
				remove: function(tagId) {
					return baseRoute.one(tagId)
						.remove();
				},
				create: function(tag) {
					return baseRoute.customPOST(tag);
				},
				update: function(tagId, tag) {
					return baseRoute.one(tagId).customPUT(tag);
				}
			};
		}
	]);
};

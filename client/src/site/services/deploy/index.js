module.exports = function(myModule) {
	myModule.factory('DeployService', ['Restangular', '$timeout',
		function(Restangular, $timeout) {
			var baseRoute = Restangular.all('deploys');
			return {
				list: function(query) {
					return baseRoute.customGET('', query);
				},
				getOne: function(articleId) {
					return baseRoute.one(articleId)
						.customGET();
				},
				getConfig: function() {
					return baseRoute.customGET('config');
				},
				remove: function(articleId) {
					return baseRoute.one(articleId)
						.remove();
				},
				create: function(article) {
					return baseRoute.customPOST(article);
				},
				update: function(articleId, article) {
					return baseRoute.one(articleId).customPUT(article);
				}
			};
		}
	]);
};
module.exports = function(myModule) {
	myModule.factory('ArticleService', ['Restangular', '$timeout',
		function(Restangular, $timeout) {
			var baseRoute = Restangular.all('articles');
			return {
				list: function(query) {
					return baseRoute.customGET('', query);
				},
				getOne: function(articleId) {
					return baseRoute.one(articleId)
						.customGET();
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
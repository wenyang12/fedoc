module.exports = function(myModule) {
	myModule.factory('DeployService', ['Restangular', '$timeout',
		function(Restangular, $timeout) {
			var baseRoute = Restangular.all('deploys');
			return {
				list: function(query) {
					return baseRoute.customGET('', query);
				},
				getOne: function(deployId) {
					return baseRoute.one(deployId)
						.customGET();
				},
				getConfig: function() {
					return baseRoute.customGET('config');
				},
				run: function(deployId) {
					return baseRoute.one(deployId,'run').customPUT();
				},
				remove: function(deployId) {
					return baseRoute.one(deployId)
						.remove();
				},
				create: function(article) {
					return baseRoute.customPOST(article);
				},
				update: function(deployId, article) {
					return baseRoute.one(deployId).customPUT(article);
				}
			};
		}
	]);
};
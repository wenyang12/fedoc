module.exports = function(myModule) {
	myModule.factory('UserService', ['Restangular', '$timeout',
		function(Restangular, $timeout) {
			var baseRoute = Restangular.all('users');
			return {
				list: function(query) {
					return baseRoute.customGET('', query);
				},
				getOne: function(userId) {
					return baseRoute.one(userId)
						.customGET();
				},
				remove: function(userId) {
					return baseRoute.one(userId)
						.remove();
				},
				create: function(user) {
					return baseRoute.customPOST(user);
				},
				updateInfo: function(userId, user) {
					return baseRoute.one(userId, 'info').customPUT(user);
				},
				updatePwd: function(userId, user) {
					return baseRoute.one(userId, 'pwd').customPUT(user);
				}
			};
		}
	]);
};
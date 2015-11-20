//新的做法
	app.factory('UserService', ['Restangular', '$timeout',
		function (Restangular, $timeout) {
			var baseRoute = Restangular.all('users');

			return {
				list: function (articleId, query) {
					return Restangular.one('articles', articleId)
						.customGET('flyers', query);
				},
				getOne: function(articleId) {
					return Restangular.one('articles', articleId)
						.customGET();
				}
			};
		}
	]);
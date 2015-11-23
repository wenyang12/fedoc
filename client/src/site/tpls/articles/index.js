module.exports = function(app) {
	app.controller('ArticleListController', [
		'$scope',
		'$state',
		'ArticleService',
		function($scope, $state, ArticleService) {
			$scope.list = function(_query) {
				var query = _query||{};
				ArticleService.list(query).then(function(data) {
					$scope.articles = data.msg.articles;
					$scope.pagination = data.msg.pagination;
					$scope.count = data.msg.count;
				});
			};

			$scope.init = function(){
				$scope.list();
			};
		}
	]);
	app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {
		$stateProvider.state('articles', {
			url: '/articles',
			templateUrl: '/site/tpls/articles/index.html',
			pageTitle: '文档列表',
			controller: 'ArticleListController'
		});
	}]);
};
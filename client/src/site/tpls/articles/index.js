module.exports = function(app) {
	app.controller('ArticleListController', [
		'$scope',
		'$state',
		'$stateParams',
		'ArticleService',
		'constant',
		function($scope, $state, $stateParams, ArticleService, constant) {
			$scope.query = {
				keyword:$stateParams.keyword,
				page: $stateParams.page,
				tag: $stateParams.tag
			};
			$scope.list = function(_query) {
				var query = _.extend($scope.query, _query);
				ArticleService.list(query).then(function(data) {
					$scope.articles = data.msg.articles;
					$scope.pagination = data.msg.pagination;
					$scope.count = data.msg.count;
				});
			};

			$scope.init = function() {
				$scope.list();
			};
		}
	]);
	app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {
		$stateProvider.state('articles', {
			url: '/articles?page&tag&keyword',
			templateUrl: '/site/tpls/articles/index.html',
			pageTitle: '文档列表',
			controller: 'ArticleListController'
		});
	}]);
};
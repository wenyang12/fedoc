module.exports = function(app) {
	app.controller('ArticleListController', [
		'$scope',
		'$state',
		'$stateParams',
		'ArticleService',
		'constant',
		function($scope, $state, $stateParams, ArticleService, constant) {
			$scope.tags = constant.ARTICLES.tags;
			$scope.query = {
				keyword:$stateParams.keyword,
				page: $stateParams.page,
				tag: $stateParams.tag
			};
			$scope.list = function(query) {
				var query = _.extend($scope.query, query);
				ArticleService.list(query).then(function(data) {
					$scope.articles = data.msg.articles;
					$scope.pagination = data.msg.pagination;
					$scope.count = data.msg.count;
				});
			};

			$scope.init = function() {
				$scope.list();
			};

			$scope.searchKeyword = function() {
				$state.go('articles', $scope.query);
			};
			$scope.chooseTag = function(tag) {
				if ($scope.query.tag === tag) {
					$scope.query.tag = '';
				} else {
					$scope.query.tag = tag;
				}
				$state.go('articles', $scope.query);
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
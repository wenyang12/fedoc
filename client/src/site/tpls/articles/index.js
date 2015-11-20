module.exports = function(app) {
	app.controller('ArticleListController', [
		'$scope',
		'$state',
		function($scope, $state) {
			
		}
	]).config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {
		$stateProvider.state('site.articles', {
			url: '/articles',
			templateUrl: '/site/tpls/articles/index.html',
			pageTitle: '用户管理',
			controller: 'ArticleListController'
		});
	}]);
};
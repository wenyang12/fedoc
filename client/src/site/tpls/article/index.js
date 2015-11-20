module.exports = function(app) {
	app.controller('ArticleController', [
		'$scope',
		'$state',
		function($scope, $state) {
			
		}
	]).controller('EditArticleController', [
		'$scope',
		'$state',
		function($scope, $state) {
			
		}
	]).config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {
		$stateProvider.state('addArticle', {
				url: '/article/add',
				templateUrl: '/site/tpls/article/index.html',
				controller: 'AddArticleController',
				pageTitle: '新增文章'
			}).state('editArticle', {
				url: '/article/:articleId',
				templateUrl: '/site/tpls/article/index.html',
				controller: 'EditArticleController',
				pageTitle: '编辑文章'
			});
	}]);
};
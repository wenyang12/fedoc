module.exports = function(app) {

	app.controller('SiteController', ['$scope', '$rootScope', '$http', '$state',
		function($scope, $rootScope, $http, $state) {
			$scope.user = {
				email: 'zhangc@fxiaoke.com',
				pwd: '123456'
			};

		
			$state.go('articles');
		}
	]).config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {
		$stateProvider
			.state('site', {
				url: '/site',
				templateUrl: '/site/index.html',
				pageTitle: '主页',
				controller: 'SiteController'
			});
	}]);

	require('site/tpls/articles/index')(app);
	require('site/tpls/article/index')(app);
	require('site/tpls/tag/index')(app);
	require('site/tpls/profile/index')(app);
	require('site/tpls/signin/index')(app);

};
module.exports = function(app) {

	require('site/tpls/articles/index')(app);
	require('site/tpls/signin/index')(app);

	app.controller('SiteController', ['$scope', '$rootScope', '$http', '$state',
		function($scope, $rootScope, $http, $state) {
			$scope.user = {
				email: 'zhangc@fxiaoke.com',
				pwd: '123456'
			};
	
			$scope.isLogin = function() {
				$http({
					method: 'post',
					url: "/api/sign/isLogin"
				}).
				success(function(data, status, headers, config) {
					if (data.code === 200) {
						var user = data.msg.user;
						$rootScope.user = user;
						$rootScope.$broadcast('userChange', {
							user: user
						});
					}
				});
			};
			$scope.isLogin();
			$state.go('site.articles');
		}
	]).config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {
		$stateProvider
			.state('site', {
				url: '/site',
				templateUrl: '/site/index.html',
				pageTitle: '主页'
			});
	}]);

};
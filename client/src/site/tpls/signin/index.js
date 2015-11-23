module.exports = function(app) {
	app.controller('SigninController', ['$scope', '$rootScope', '$http', '$state', 'toasty',
		function($scope, $rootScope, $http, $state, toasty) {
			$scope.form = {
				email: 'zhangc@fxiaoke.com',
				pwd: '123456'
			};
			$scope.login = function() {
				$http({
					method: 'post',
					url: "/api/sign/login",
					data: {
						email: $scope.form.email || '',
						pwd: $scope.form.pwd || ''
					}
				}).
				success(function(data, status, headers, config) {
					if (data.code === 200) {
						var user = data.msg.user;
						$rootScope.user = user;
						toasty.success('登陆成功');
						$rootScope.$broadcast('userChange', {
							user: user
						});
						$state.go('articles');
					} else {
						toasty.error(data.msg);
					}
				});
			};
		}
	]);

	app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {
		$stateProvider
			.state('signin', {
				url: '/signin',
				templateUrl: '/site/tpls/signin/index.html',
				controller: 'SigninController',
				pageTitle: '登录'
			});
	}]);
};
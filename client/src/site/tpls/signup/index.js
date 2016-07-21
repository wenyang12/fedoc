module.exports = function(app) {
	app.controller('SignupController', ['$scope', '$rootScope', '$http', '$state', 'toasty',
		function($scope, $rootScope, $http, $state, toasty) {
			$scope.create = function() {
				$http({
					method: 'post',
					url: "/api/sign/reg",
					data: {
						email: $scope.form.email || '',
						pwd: $scope.form.pwd || ''
					}
				}).
				success(function(data, status, headers, config) {
					if (data.code === 200) {
						var user = data.msg.user;
						$rootScope.user = user;
						toasty.success('注册成功');
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
			.state('signup', {
				url: '/signup',
				templateUrl: '/site/tpls/signup/index.html',
				controller: 'SignupController',
				pageTitle: '登录'
			});
	}]);
};

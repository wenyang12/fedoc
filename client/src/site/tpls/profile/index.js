module.exports = function(app) {
	require('site/tpls/profile/pwd/index')(app);
	require('site/tpls/profile/info/index')(app);
	
	app.controller('ProfileController', ['$scope', '$rootScope', '$http', '$state', 'toasty',
		function($scope, $rootScope, $http, $state, toasty) {
			if ($state.is('profile')) $state.go('profile.info');
		}
	]);

	app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {
		$stateProvider.state('profile', {
				url: '/profile',
				templateUrl: '/site/tpls/profile/index.html',
				controller: 'ProfileController',
				pageTitle: '基本信息'
			})
			.state('profile.info', {
				url: '/info',
				templateUrl: '/site/tpls/profile/info/index.html',
				controller: 'ProfileInfoController',
				pageTitle: '基本信息'
			}).state('profile.pwd', {
				url: '/pwd',
				templateUrl: '/site/tpls/profile/pwd/index.html',
				controller: 'ProfilePwdController',
				pageTitle: '密码修改'
			});
	}]);
};
module.exports = function(app) {
	app.controller('UserListController', [
		'$scope',
		'$state',
		'$stateParams',
		'UserService',
		'constant',
		function($scope, $state, $stateParams, UserService, constant) {
			$scope.query = {
				page: $stateParams.page,
			};
			$scope.list = function(_query) {
				var query = _.extend($scope.query, _query);
				UserService.list(query).then(function(data) {
					$scope.users = data.msg.users;
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
		$stateProvider.state('users', {
			url: '/users?page',
			templateUrl: '/site/tpls/users/index.html',
			pageTitle: '文档列表',
			controller: 'UserListController'
		});
	}]);
};
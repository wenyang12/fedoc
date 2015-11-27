module.exports = function(app) {
	app.controller('UserListController', [
		'$scope',
		'$state',
		'$stateParams',
		'UserService',
		'constant',
		'toasty',
		function($scope, $state, $stateParams, UserService, constant,toasty) {
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

			$scope.del = function(user) {
				if (confirm('确认删除用户吗')) {
					UserService.remove(user._id).then(function(data) {
						if (data.code === 200) {
							toasty.success('删除用户');
							for (var i = 0, len = $scope.users.length; i < len; i++) {
								if ($scope.users[i]._id === user._id) {
									$scope.users.splice(i, 1);
									return;
								}
							}
						}
					});
				}
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
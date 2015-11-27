module.exports = function(app) {
	app.controller('UserController', [
		'$scope',
		'$state',
		'$stateParams',
		'UserService',
		'toasty',
		'isAdd',
		function($scope, $state, $stateParams, UserService, toasty, isAdd, constant) {
			$scope.form = {
				email: ''
			};
			$scope.create = function() {
				var form = $scope.form;
				UserService.create({
					email: form.email
				}).then(function(data) {
					if (data.code === 200) {
						toasty.success('创建成员成功');
						$state.go('users');
					} else {
						toasty.error(data.msg);
					}
				});
			};
		}
	]).config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {
		$stateProvider.state('addUser', {
			url: '/user/add',
			templateUrl: '/site/tpls/user/index.html',
			controller: 'UserController',
			pageTitle: '新增成员',
			resolve: {
				isAdd: [function() {
					return true;
				}]
			}
		});
	}]);
};
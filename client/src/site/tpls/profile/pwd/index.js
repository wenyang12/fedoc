module.exports = function(app) {
	app.controller('ProfilePwdController', ['$scope', '$rootScope', '$http', '$state', 'toasty','UserService',
		function($scope, $rootScope, $http, $state, toasty,UserService) {
			$scope.updatePwd = function() {
				UserService.updatePwd($rootScope.user._id,{
					pwd: $scope.form.pwd,
					npwd: $scope.form.npwd,
					cpwd:$scope.form.cpwd
				}).then(function(data) {
					if (data.code === 200) {
						toasty.success('修改密码成功');
						window.location.reload();
					} else {
						toasty.error(data.msg);
					}
				});
			};
		}
	]);
};
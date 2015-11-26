module.exports = function(app) {
	app.controller('ProfileInfoController', ['$scope', '$rootScope', '$http', '$state', 'toasty', 'UserService', '$upload',
		function($scope, $rootScope, $http, $state, toasty, UserService, $upload) {
			var user = $rootScope.user;
			$scope.form = {
				avatar: user.avatar,
				email: user.email,
				nickname: user.nickname
			};
			$scope.updateInfo = function() {
				UserService.updateInfo(user._id,{
					nickname: $scope.form.nickname,
					avatar: $scope.form.avatar
				}).then(function(data) {
					if (data.code === 200) {
						toasty.success('修改信息成功');
						window.location.reload();
					} else {
						toasty.error(data.msg);
					}
				});
			};
			$scope.uploadAvatar = function(files) {
				var file = files[0];
				$scope.uploading = true;
				$upload.upload({
						url: '/api/attachments/upload',
						file: file
					})
					.progress(function(evt) {

					})
					.success(function(data, status, headers, config) {
						if (data.code === 200) {
							$scope.form.avatar = data.msg.fileUrl;
						} else {

						}
						$scope.uploading = false;
					})
					.error(function() {

					});
			};
		}
	]);

};
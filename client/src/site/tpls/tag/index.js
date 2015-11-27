module.exports = function(app) {
	app.controller('TagController', [
		'$scope',
		'$state',
		'$stateParams',
		'TagService',
		'toasty',
		'isAdd',
		'constant',
		function($scope, $state, $stateParams, TagService, toasty, isAdd, constant) {
			var tagId = $stateParams._id;
			$scope.tag = {
				name: ''
			};
			$scope.create = function() {
				TagService.create($scope.tag).then(function(data) {
					if (data.code === 200) {
						toasty.success('创建分类成功');
						$state.go('articles');
					} else {
						toasty.error(data.msg);
					}
				});
			};
			$scope.init = function() {
				if (isAdd) {
					$scope.tag.isAdd = true;
				} else {
					TagService.getOne(tagId).then(function(data) {
						if (data.code === 200) {
							$scope.tag = data.msg;
						} else {
							toasty.error(data.msg);
						}
					});
				}
			};


			$scope.init();
			$scope.update = function() {
				TagService.update(tagId, {
					name: $scope.tag.name,
					sort: $scope.tag.sort
				}).then(function(data) {
					if (data.code === 200) {
						toasty.success('更新分类成功');
						$state.go('articles');
					} else {
						toasty.error(data.msg);
					}
				});
			};

		}
	]).config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {
		$stateProvider.state('addTag', {
			url: '/tag/add',
			templateUrl: '/site/tpls/tag/index.html',
			controller: 'TagController',
			pageTitle: '新增分类',
			resolve: {
				isAdd: [function() {
					return true;
				}]
			}
		}).state('viewTag', {
			url: '/tags/:_id',
			templateUrl: '/site/tpls/tag/index.html',
			controller: 'TagController',
			pageTitle: '查看分类',
			resolve: {
				isAdd: [function() {
					return false;
				}]
			}
		});
	}]);
};
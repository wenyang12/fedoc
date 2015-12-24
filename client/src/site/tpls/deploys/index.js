module.exports = function(app) {
	app.controller('DeployListController', [
		'$scope',
		'$state',
		'$stateParams',
		'DeployService',
		'constant',
		'toasty',
		'deployRead',
		function($scope, $state, $stateParams, DeployService, constant,toasty,deployRead) {
			$scope.query = {
				page: $stateParams.page,
			};
			$scope.list = function(_query) {
				var query = _.extend($scope.query, _query);
				DeployService.list(query).then(function(data) {
					$scope.deploys = data.msg.deploys;
					$scope.pagination = data.msg.pagination;
					$scope.count = data.msg.count;
				});
			};

			$scope.del = function(deploy) {
				if (confirm('确认删除发布吗')) {
					DeployService.remove(deploy._id).then(function(data) {
						if (data.code === 200) {
							toasty.success('删除发布');
							for (var i = 0, len = $scope.deploys.length; i < len; i++) {
								if ($scope.deploys[i]._id === deploy._id) {
									$scope.deploys.splice(i, 1);
									return;
								}
							}
						}
					});
				}
			};

			$scope.run = function(d){
				DeployService.run(d._id).then(function(data) {
					if (data.code === 200) {
						d.status = 20;
						toasty.success('执行发布成功');
					} else {
						toasty.error(data.msg);
					}
				});
			};
			$scope.read = function(d){
				deployRead.init({
					deploy:d
				});
			};
			$scope.init = function() {
				$scope.list();
			};
		}
	]);
	app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {
		$stateProvider.state('deploys', {
			url: '/deploys?page',
			templateUrl: '/site/tpls/deploys/index.html',
			pageTitle: '文档列表',
			controller: 'DeployListController'
		});
	}]);
};
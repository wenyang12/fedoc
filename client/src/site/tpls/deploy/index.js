module.exports = function(app) {
	app.controller('DeployController', [
		'$scope',
		'$state',
		'$stateParams',
		'DeployService',
		'toasty',
		'isAdd',
		'constant',
		function($scope, $state, $stateParams, DeployService, toasty, isAdd, constant) {
			var tagId = $stateParams._id;

			$scope.deploy = {
				reason:'修复了',
				range:'内测',
				name:'fs',
				version:'4.7',
				developer:'zhangc',
				runDate: new Date()
			};
			$scope.init = function(){
				DeployService.getConfig().then(function(data){
					var config = data.msg;
					var modules = [];
					for (var key in config) {
						modules.push(key);
					}
					$scope.modules = modules;

					$scope.$watch('deploy.name',function(newVal){
						if(newVal){
							$scope.versions = config[newVal];
						}
					});
				});
			};

			$scope.create = function() {
				DeployService.create($scope.deploy).then(function(data) {
					if (data.code === 200) {
						toasty.success('创建分类成功');
						$state.go('deploys');
					} else {
						toasty.error(data.msg);
					}
				});
			};

		


		}
	]).config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {
		$stateProvider.state('deployApply', {
			url: '/deploy/add',
			templateUrl: '/site/tpls/deploy/index.html',
			controller: 'DeployController',
			pageTitle: '申请部署代码',
			resolve: {
				isAdd: [function() {
					return true;
				}]
			}
		});
	}]);
};
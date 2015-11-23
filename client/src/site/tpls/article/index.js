module.exports = function(app) {
	app.controller('ArticleController', [
		'$scope',
		'$state',
		'$stateParams',
		'ArticleService',
		'toasty',
		'isAdd',
		function($scope, $state, $stateParams, ArticleService, toasty, isAdd) {
			var articleId = $stateParams._id;
			$scope.article = {};
			$scope.create = function() {
				ArticleService.create($scope.article).then(function(data) {
					if (data.code === 200) {
						toasty.success('创建文档成功');
						$state.go('articles');
					} else {
						toasty.error(data.msg);
					}
				});
			};
			$scope.init = function() {
				if (isAdd) {
					$scope.article.isAdd = true;
				} else {
					ArticleService.getOne(articleId).then(function(data) {
						if (data.code === 200) {
							$scope.article = data.msg;

						} else {
							toasty.error(data.msg);
						}
					});
				}
			};
			$scope.init();
			$scope.update = function() {
				ArticleService.update(articleId, {
					title: $scope.article.title,
					content: $scope.article.content
				}).then(function(data) {
					if (data.code === 200) {
						toasty.success('更新文档成功');
						$state.go('articles');
					} else {
						toasty.error(data.msg);
					}
				});
			};
		}
	]).config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {
		$stateProvider.state('addArticle', {
			url: '/article/add',
			templateUrl: '/site/tpls/article/index.html',
			controller: 'ArticleController',
			pageTitle: '新增文章',
			resolve: {
				isAdd: [function() {
					return true;
				}]
			}
		}).state('viewArticle', {
			url: '/articles/:_id',
			templateUrl: '/site/tpls/article/index.html',
			controller: 'ArticleController',
			pageTitle: '查看文章',
			resolve: {
				isAdd: [function() {
					return false;
				}]
			}
		});
	}]);
};
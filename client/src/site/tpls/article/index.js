module.exports = function(app) {
	app.controller('ArticleController', [
		'$scope',
		'$state',
		'$stateParams',
		'ArticleService',
		'toasty',
		'isAdd',
		'constant',
		function($scope, $state, $stateParams, ArticleService, toasty, isAdd, constant) {
			var articleId = $stateParams._id;
			$scope.tags = constant.ARTICLES.tags;
			var markdown = require('assets/libs/markdown-it/dist/markdown-it')();
			$scope.article = {
				tags: [],
				isPreview: false
			};
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
					content: $scope.article.content,
					tags: $scope.article.tags
				}).then(function(data) {
					if (data.code === 200) {
						toasty.success('更新文档成功');
						$state.go('articles');
					} else {
						toasty.error(data.msg);
					}
				});
			};
			$scope.togglePreviewStatus = function() {
				$scope.article.isPreview = !$scope.article.isPreview;
				if ($scope.article.isPreview) {
					var html = markdown.render($scope.article.content);
					document.querySelector('#content-preview').innerHTML = html;
				}
			};
			$scope.isCheckTag = function(tag) {
				return $scope.article.tags.indexOf(tag) > -1;
			};
			//选择字号
			$scope.chooseTag = function($event, tag) {
				var curTarget = $event.currentTarget;
				var index = $scope.article.tags.indexOf(tag);
				//如果被选中
				if (curTarget.checked) {
					if (index === -1) $scope.article.tags.push(tag);
				} else {
					if (index !== -1) $scope.article.tags.splice(index, 1);
				}
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
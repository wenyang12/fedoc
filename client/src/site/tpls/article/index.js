module.exports = function(app) {
	app.controller('ArticleController', [
		'$scope',
		'$state',
		'$stateParams',
		'ArticleService',
		'toasty',
		'isAdd',
		'constant',
		'TagService',
		function($scope, $state, $stateParams, ArticleService, toasty, isAdd, constant, TagService) {
			var articleId = $stateParams._id;
			// $scope.tags = constant.ARTICLES.tags;
			var markdown = require('assets/libs/markdown-it/markdown-it.min')();
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
				TagService.listAll().then(function(data) {
					if (data.code === 200) {
						var tags = data.msg.tags;
						$scope.tags = [];
						for (var i = 0, len = tags.length; i < len; i++) {
							$scope.tags.push(tags[i].name);
						}
					}
				});
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
				$scope.$watch('article.content', function(val) {
					if (val) {
						$scope.toPreviewContent(val);
					}
				});
			};

			$scope.del = function() {
				if (confirm('确认删除文档吗')) {
					ArticleService.remove($scope.article._id).then(function(data) {
						if (data.code === 200) {
							toasty.success('删除文档成功');
							$state.go('articles', {
								tag: ''
							});
						}
					});
				}
			};
			$scope.toPreviewContent = function(val) {
				var contentPreviewElem = document.querySelector('#content-preview');
				var html = markdown.render(val);
				if (!contentPreviewElem) return;
				contentPreviewElem.innerHTML = html;
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

			$scope.isCheckTag = function(tag) {
				return $scope.article.tags.indexOf(tag) > -1;
			};

			//选择分类
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
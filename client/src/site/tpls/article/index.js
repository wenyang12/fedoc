module.exports = function(app) {
	app.controller('ArticleController', [
		'$scope',
		'$state',
		'$stateParams',
		'ArticleService',
		'UserService',
		'toasty',
		'isAdd',
		'constant',
		'TagService',
		'$upload',
		'$rootScope',
		function($scope, $state, $stateParams, ArticleService, UserService, toasty, isAdd, constant, TagService, $upload, $rootScope) {
			var articleId = $stateParams._id;
			var articleEditor;
			$scope.article = {
				tags: [],
				isPreview: false
			};
			$scope.create = function() {
				$scope.article.content = articleEditor.value();
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
							if ($rootScope.user && $rootScope.user.isAdmin) {
								$scope.initAllUsers();
							}
						} else {
							toasty.error(data.msg);
						}
					});
				}
			};

			$scope.initAllUsers = function() {
				UserService.listAll().then(function(data) {
					if (data.code === 200) {
						$scope.users = data.msg.users;
					}
				});
			};

			$scope.initEditor = function() {
				articleEditor = new SimpleMDE({
					element: document.getElementById('editor')
				});

				articleEditor.value($scope.article.content);
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
			//上传附件
			$scope.uploadAttachment = function(files) {
				for (var i = 0, len = files.length; i < len; i++) {
					_uploadAttachment(files[i]);
				}
			};

			$scope.delAttachment = function(index) {
				$scope.article.attachments.splice(index, 1);
			};

			function _uploadAttachment(file) {
				$scope.uploading = true;
				$upload.upload({
						url: '/api/attachments/upload',
						file: file
					})
					.progress(function(evt) {

					})
					.success(function(data, status, headers, config) {
						if (data.code === 200) {
							$scope.article.attachments = $scope.article.attachments || [];
							$scope.article.attachments.push({
								fileUrl: data.msg.fileUrl,
								fileName: data.msg.fileName
							});
						} else {

						}
						$scope.uploading = false;
					})
					.error(function() {
						$scope.uploading = false;
					});
			}


			$scope.init();
			$scope.update = function() {
				ArticleService.update(articleId, {
					title: $scope.article.title,
					content: articleEditor.value(),
					tags: $scope.article.tags,
					user: $scope.article.user._id,
					attachments: $scope.article.attachments
				}).then(function(data) {
					if (data.code === 200) {
						toasty.success('更新文档成功');
						window.location.reload();
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
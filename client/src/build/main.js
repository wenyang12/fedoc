/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	//加载管理模块
	__webpack_require__(1)(angular);
	__webpack_require__(8)(angular);
	__webpack_require__(10)(angular);
	var app = angular.module('app', [
		'ui.router',
		'restangular',
		'ui.bootstrap',
		'siteModules',
		'siteServices',
		'siteFilters',
		'angular-toasty',
		'angularFileUpload'
	]);
	
	app.run(['$rootScope', '$state', '$stateParams',
		function($rootScope, $state, $stateParams) {
			$rootScope.$state = $state;
			$rootScope.$stateParams = $stateParams;
		}
	]).config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {
		$urlRouterProvider.otherwise('/site');
	}]);
	
	app.config(['toastyConfigProvider', function(toastyConfigProvider) {
		toastyConfigProvider.setConfig({
	
		});
	}]);
	
	// Restangular
	app.config(['RestangularProvider', function(RestangularProvider) {
		RestangularProvider.setBaseUrl('/api');
	}]);
	
	app.constant('constant', {
		ARTICLES: {
		}
	});
	
	__webpack_require__(14)(app);
	
	angular.bootstrap(document, ['app']);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(angular) {
		var siteModules = angular.module('siteModules', ['ngSanitize']);
		__webpack_require__(2)(siteModules);
		__webpack_require__(3)(siteModules);
		__webpack_require__(4)(siteModules);
		__webpack_require__(5)(siteModules);
		__webpack_require__(6)(siteModules);
		__webpack_require__(7)(siteModules);
	
	};


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(myModule) {
		myModule.directive('siteHeader', [
			function factory() {
				var directive = {
					restrict: 'E', // 指令的使用方式，包括标签，属性，类，注释
					replace: 'true',
					templateUrl: '/site/modules/header/index.html',
					link: function($scope) {
						$scope.adminMenus = [{
							title: '文档管理',
							subMenus: [{
								title: '文档列表',
								sref: 'articles'
							}, {
								title: '新增文档',
								sref: 'addArticle'
							}]
						}, {
							title: '分类管理',
							subMenus: [{
								title: '新增分类',
								sref: 'addTag'
							}]
						}, {
							title: '成员管理',
							subMenus: [{
								title: '新增成员',
								sref: 'addUser'
							}, {
								title: '成员列表',
								sref: 'users'
							}]
						}];
						$scope.userMenus = [{
							title: '文档管理',
							subMenus: [{
								title: '新增文档',
								sref: 'addArticle'
							}]
						}];
					},
					scope: false,
					controller: ['$scope', '$rootScope', '$stateParams', '$state', '$http', function($scope, $rootScope, $stateParams, $state, $http) {
	
						//监听 - 缩略图被点击
						$scope.$on('userChange', function(event, data) {
							if (data) {
								$scope.user = data.user;
							}
						});
						$scope.isLogin = function() {
							$http({
								method: 'post',
								url: "/api/sign/isLogin"
							}).
							success(function(data, status, headers, config) {
								if (data.code === 200) {
									var user = data.msg.user;
									$rootScope.user = user;
									$scope.user = user;
								}
							});
						};
						$scope.isLogin();
						$scope.searchBox = {
							keyword: ''
						};
						$scope.searchKeyword = function() {
							$state.go('articles', {
								tag: $stateParams.tag,
								page: $stateParams.page,
								keyword: $scope.searchBox.keyword
							});
						};
						$scope.signout = function($event) {
							window.location.replace('\/api\/sign\/out');
							$event.preventDefault();
							$event.stopPropagation();
							return false;
						};
					}]
				};
				return directive;
			}
		]);
	};

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(myModule) {
	    myModule.directive('fedocPagination', ['$location',
	        function factory($location) {
	            var directive = {
	                restrict: 'E', //指令的使用方式，包括标签，属性，类，注释
	                templateUrl: '/site/modules/pagination/index.html', //从指定的url地址加载模板
	                replace: true, // //是否用模板替换当前元素，若为false，则append在当前元素上
	                transclude: true, //是否将当前元素的内容转移到模板中
	                require: "ngModel",
	                scope: {
	                    ngModel: '=',
	                    turn: '&'
	                },
	                link: function($scope, $element, $attrs, $transclude, ngModel) {
	                    $scope.$watch('ngModel', function(value) {
	                        if (value) {
	                            $scope.pagination = value;
	                        }
	                    });
	
	                    if (!$attrs.turn) {
	                        //刷新页面
	                        $scope.search = function(page) {
	                            var query = $location.search();
	                            query.page = page;
	                            $location.path($location.path()).search(query);
	                        };
	                    } else {
	                        $scope.search = function(page) {
	                            $scope.turn({
	                                data: page
	                            });
	                        };
	                    }
	                }
	            };
	            return directive;
	        }
	    ]);
	};

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(myModule) {
	 var markdown = window.markdownit();
	  myModule.
	  directive('fedocMarkdown', ['$sanitize', function($sanitize) {
	    return {
	      restrict: 'AE',
	      link: function(scope, element, attrs) {
	        if (attrs.fedocMarkdown) {
	          scope.$watch(attrs.fedocMarkdown, function(newVal) {
	            var html = newVal ? $sanitize(markdown.render(newVal)) : '';
	            element.html(html);
	          });
	        } else {
	          var html = $sanitize(markdown.render(element.text()));
	          element.html(html);
	        }
	      }
	    };
	  }]);
	};

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(myModule) {
		//回车按钮
		myModule.directive('fedocEnter', function() {
			return {
				restrict: 'AC',
				link: function($scope, $element, $attr) {
					$element.bind("keydown", function($event) {
						if (event.which === 13) {
							$scope.$apply(function() {
								$scope.$eval($attr.fedocEnter);
							});
							$event.stopPropagation();
							return false;
						}
					});
				}
			};
		});
	};

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(myModule) {
	    myModule.directive('articleTags', [
	        function factory() {
	            var directive = {
	                restrict: 'E', // 指令的使用方式，包括标签，属性，类，注释
	                replace: 'true',
	                templateUrl: '/site/modules/article-tags/index.html',
	                scope: false,
	                controller: ['$scope', 'toasty', '$rootScope', 'TagService', '$stateParams', '$state', function($scope, toasty, $rootScope, TagService, $stateParams, $state) {
	                    TagService.listAll().then(function(data) {
	                        if (data.code === 200) {
	                            $scope.tags = data.msg.tags;
	                        }
	                    });
	                    $scope.tag = $stateParams.tag || '';
	
	                    $scope.choose = function($event, tag) {
	                        $scope.tag = tag;
	                        $state.go('articles', {
	                            tag: tag
	                        });
	                        $event.stopPropagation();
	                        return;
	                    };
	                    $scope.delTag = function($event, tag) {
	                        if (confirm('确认删除该分类吗')) {
	                            TagService.remove(tag._id).then(function(data) {
	                                if (data.code === 200) {
	                                    toasty.success('删除分类成功');
	                                    for (var i = 0, len = $scope.tags.length; i < len; i++) {
	                                        if ($scope.tags[i]._id === tag._id) {
	                                            $scope.tags.splice(i, 1);
	                                            if ($scope.tag === tag.name) {
	                                                $state.go('articles', {
	                                                    tag: ''
	                                                });
	                                            }
	                                            return;
	                                        }
	                                    }
	                                }
	                            });
	                        }
	                        $event.stopPropagation();
	                        return;
	                    };
	                }]
	            };
	            return directive;
	        }
	    ]);
	};

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(myModule) {
		myModule.directive('btnToTop', ['$window',
			function factory($window) {
				var directive = {
					restrict: 'E', // 指令的使用方式，包括标签，属性，类，注释
					replace: 'true',
					template: ' <div class="btn-to-top"></div>',
					scope: false,
					link: function($scope, $element, $attrs) {
						angular.element($window).bind("scroll", function(e) {
							var scrollTop = window.document.body.scrollTop;
							if (scrollTop > 40) {
								$element.addClass('active');
							} else {
								$element.removeClass('active');
							}
						});
						$element.on('click',function(){
							window.document.body.scrollTop = 0;
						});
					}
				};
				return directive;
			}
		]);
	};

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(angular) {
		var siteFilters = angular.module('siteFilters', []);
		__webpack_require__(9)(siteFilters);
	};


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(myModule) {
		myModule.filter('dayDisplay', ['$filter',
			function($filter) {
				var standardDateFilterFn = $filter('date');
				return function(data) {
					if (data == null || data == '') {
						return '';
					} else {
						return standardDateFilterFn(data, 'yyyy-MM-dd');
					}
				};
			}
		]);
	
		myModule.filter('dateAgo', ['$filter',
			function($filter) {
				var standardDateFilterFn = $filter('date');
				return function(data) {
					if (data == null || data == '') {
						return '';
					} else {
						var nowSt = new Date().getTime();
						var meSt = new Date(data).getTime();
						var timeDistance = (nowSt - meSt) / 1000; //差距多少秒
						if (timeDistance < 60) {
							return parseInt(timeDistance) + '秒前';
						} else if (timeDistance < 3600) {
							return parseInt(timeDistance / 60) + '分钟前';
						} else if (timeDistance < 3600 * 24) {
							return parseInt(timeDistance / (60 * 24)) + '小时前';
						} else if (timeDistance < 3600 * 24 * 30) {
							return parseInt(timeDistance / (60 * 24 * 30)) + '天前';
						} else {
							return parseInt(timeDistance / (60 * 24 * 30 * 365)) + '年前';
						}
					}
				};
			}
		]);
	
	};

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(angular) {
		var siteServices = angular.module('siteServices', ['restangular']);
		__webpack_require__(11)(siteServices);
		__webpack_require__(12)(siteServices);
		__webpack_require__(13)(siteServices);
	};


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(myModule) {
		myModule.factory('ArticleService', ['Restangular', '$timeout',
			function(Restangular, $timeout) {
				var baseRoute = Restangular.all('articles');
				return {
					list: function(query) {
						return baseRoute.customGET('', query);
					},
					getOne: function(articleId) {
						return baseRoute.one(articleId)
							.customGET();
					},
					remove: function(articleId) {
						return baseRoute.one(articleId)
							.remove();
					},
					create: function(article) {
						return baseRoute.customPOST(article);
					},
					update: function(articleId, article) {
						return baseRoute.one(articleId).customPUT(article);
					}
				};
			}
		]);
	};

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(myModule) {
		myModule.factory('UserService', ['Restangular', '$timeout',
			function(Restangular, $timeout) {
				var baseRoute = Restangular.all('users');
				return {
					list: function(query) {
						return baseRoute.customGET('', query);
					},
					listAll: function(query) {
						return baseRoute.customGET('all', query);
					},
					getOne: function(userId) {
						return baseRoute.one(userId)
							.customGET();
					},
					remove: function(userId) {
						return baseRoute.one(userId)
							.remove();
					},
					create: function(user) {
						return baseRoute.customPOST(user);
					},
					updateInfo: function(userId, user) {
						return baseRoute.one(userId, 'info').customPUT(user);
					},
					updatePwd: function(userId, user) {
						return baseRoute.one(userId, 'pwd').customPUT(user);
					}
				};
			}
		]);
	};

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(myModule) {
		myModule.factory('TagService', ['Restangular', '$timeout',
			function(Restangular, $timeout) {
				var baseRoute = Restangular.all('tags');
				return {
					listAll: function(query) {
						return baseRoute.customGET('', query);
					},
					getOne: function(tagId) {
						return baseRoute.one(tagId)
							.customGET();
					},
					remove: function(tagId) {
						return baseRoute.one(tagId)
							.remove();
					},
					create: function(tag) {
						return baseRoute.customPOST(tag);
					},
					update: function(tagId, tag) {
						return baseRoute.one(tagId).customPUT(tag);
					}
				};
			}
		]);
	};

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(app) {
	
		app.controller('SiteController', ['$scope', '$rootScope', '$http', '$state', '$window',
			function($scope, $rootScope, $http, $state, $window) {
				$scope.user = {
					email: 'zhangc@fxiaoke.com',
					pwd: '123456'
				};
				$state.go('articles');
			}
		]).config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {
			$stateProvider
				.state('site', {
					url: '/site',
					templateUrl: '/site/index.html',
					pageTitle: '主页',
					controller: 'SiteController'
				});
		}]);
	
		__webpack_require__(15)(app);
		__webpack_require__(16)(app);
		__webpack_require__(17)(app);
		__webpack_require__(18)(app);
		__webpack_require__(19)(app);
		__webpack_require__(20)(app);
		__webpack_require__(23)(app);
	
	};

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(app) {
		app.controller('ArticleListController', [
			'$scope',
			'$state',
			'$stateParams',
			'ArticleService',
			'constant',
			function($scope, $state, $stateParams, ArticleService, constant) {
				$scope.query = {
					keyword:$stateParams.keyword,
					page: $stateParams.page,
					tag: $stateParams.tag
				};
				$scope.list = function(_query) {
					var query = _.extend($scope.query, _query);
					ArticleService.list(query).then(function(data) {
						$scope.articles = data.msg.articles;
						$scope.pagination = data.msg.pagination;
						$scope.count = data.msg.count;
					});
				};
	
				$scope.init = function() {
					$scope.list();
				};
			}
		]);
		app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {
			$stateProvider.state('articles', {
				url: '/articles?page&tag&keyword',
				templateUrl: '/site/tpls/articles/index.html',
				pageTitle: '文档列表',
				controller: 'ArticleListController'
			});
		}]);
	};

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

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
				var markdown = __webpack_require__(24)();
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

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(app) {
		app.controller('UserListController', [
			'$scope',
			'$state',
			'$stateParams',
			'UserService',
			'constant',
			'toasty',
			function($scope, $state, $stateParams, UserService, constant,toasty) {
				$scope.query = {
					page: $stateParams.page,
				};
				$scope.list = function(_query) {
					var query = _.extend($scope.query, _query);
					UserService.list(query).then(function(data) {
						$scope.users = data.msg.users;
						$scope.pagination = data.msg.pagination;
						$scope.count = data.msg.count;
					});
				};
	
				$scope.del = function(user) {
					if (confirm('确认删除用户吗')) {
						UserService.remove(user._id).then(function(data) {
							if (data.code === 200) {
								toasty.success('删除用户');
								for (var i = 0, len = $scope.users.length; i < len; i++) {
									if ($scope.users[i]._id === user._id) {
										$scope.users.splice(i, 1);
										return;
									}
								}
							}
						});
					}
				};
				$scope.init = function() {
					$scope.list();
				};
			}
		]);
		app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {
			$stateProvider.state('users', {
				url: '/users?page',
				templateUrl: '/site/tpls/users/index.html',
				pageTitle: '文档列表',
				controller: 'UserListController'
			});
		}]);
	};

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

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

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

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

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(app) {
		__webpack_require__(21)(app);
		__webpack_require__(22)(app);
		
		app.controller('ProfileController', ['$scope', '$rootScope', '$http', '$state', 'toasty',
			function($scope, $rootScope, $http, $state, toasty) {
				if ($state.is('profile')) $state.go('profile.info');
			}
		]);
	
		app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {
			$stateProvider.state('profile', {
					url: '/profile',
					templateUrl: '/site/tpls/profile/index.html',
					controller: 'ProfileController',
					pageTitle: '基本信息'
				})
				.state('profile.info', {
					url: '/info',
					templateUrl: '/site/tpls/profile/info/index.html',
					controller: 'ProfileInfoController',
					pageTitle: '基本信息'
				}).state('profile.pwd', {
					url: '/pwd',
					templateUrl: '/site/tpls/profile/pwd/index.html',
					controller: 'ProfilePwdController',
					pageTitle: '密码修改'
				});
		}]);
	};

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

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

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

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

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(app) {
		app.controller('SigninController', ['$scope', '$rootScope', '$http', '$state', 'toasty',
			function($scope, $rootScope, $http, $state, toasty) {
				$scope.login = function() {
					$http({
						method: 'post',
						url: "/api/sign/login",
						data: {
							email: $scope.form.email || '',
							pwd: $scope.form.pwd || ''
						}
					}).
					success(function(data, status, headers, config) {
						if (data.code === 200) {
							var user = data.msg.user;
							$rootScope.user = user;
							toasty.success('登陆成功');
							$rootScope.$broadcast('userChange', {
								user: user
							});
							$state.go('articles');
						} else {
							toasty.error(data.msg);
						}
					});
				};
			}
		]);
	
		app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {
			$stateProvider
				.state('signin', {
					url: '/signin',
					templateUrl: '/site/tpls/signin/index.html',
					controller: 'SigninController',
					pageTitle: '登录'
				});
		}]);
	};

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	var require;var require;/* WEBPACK VAR INJECTION */(function(global) {/*! markdown-it 5.0.2 https://github.com//markdown-it/markdown-it @license MIT */
	!function(e){if(true)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var r;r="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,r.markdownit=e()}}(function(){var e;return function r(e,t,n){function s(i,a){if(!t[i]){if(!e[i]){var c="function"==typeof require&&require;if(!a&&c)return require(i,!0);if(o)return o(i,!0);var l=new Error("Cannot find module '"+i+"'");throw l.code="MODULE_NOT_FOUND",l}var u=t[i]={exports:{}};e[i][0].call(u.exports,function(r){var t=e[i][1][r];return s(t?t:r)},u,u.exports,r,e,t,n)}return t[i].exports}for(var o="function"==typeof require&&require,i=0;i<n.length;i++)s(n[i]);return s}({1:[function(e,r,t){"use strict";r.exports=e("entities/maps/entities.json")},{"entities/maps/entities.json":54}],2:[function(e,r,t){"use strict";r.exports=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","meta","nav","noframes","ol","optgroup","option","p","param","pre","section","source","title","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"]},{}],3:[function(e,r,t){"use strict";var n="[a-zA-Z_:][a-zA-Z0-9:._-]*",s="[^\"'=<>`\\x00-\\x20]+",o="'[^']*'",i='"[^"]*"',a="(?:"+s+"|"+o+"|"+i+")",c="(?:\\s+"+n+"(?:\\s*=\\s*"+a+")?)",l="<[A-Za-z][A-Za-z0-9\\-]*"+c+"*\\s*\\/?>",u="<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>",p="<!---->|<!--(?:-?[^>-])(?:-?[^-])*-->",h="<[?].*?[?]>",f="<![A-Z]+\\s+[^>]*>",d="<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",m=new RegExp("^(?:"+l+"|"+u+"|"+p+"|"+h+"|"+f+"|"+d+")"),g=new RegExp("^(?:"+l+"|"+u+")");r.exports.HTML_TAG_RE=m,r.exports.HTML_OPEN_CLOSE_TAG_RE=g},{}],4:[function(e,r,t){"use strict";r.exports=["coap","doi","javascript","aaa","aaas","about","acap","cap","cid","crid","data","dav","dict","dns","file","ftp","geo","go","gopher","h323","http","https","iax","icap","im","imap","info","ipp","iris","iris.beep","iris.xpc","iris.xpcs","iris.lwz","ldap","mailto","mid","msrp","msrps","mtqp","mupdate","news","nfs","ni","nih","nntp","opaquelocktoken","pop","pres","rtsp","service","session","shttp","sieve","sip","sips","sms","snmp","soap.beep","soap.beeps","tag","tel","telnet","tftp","thismessage","tn3270","tip","tv","urn","vemmi","ws","wss","xcon","xcon-userid","xmlrpc.beep","xmlrpc.beeps","xmpp","z39.50r","z39.50s","adiumxtra","afp","afs","aim","apt","attachment","aw","beshare","bitcoin","bolo","callto","chrome","chrome-extension","com-eventbrite-attendee","content","cvs","dlna-playsingle","dlna-playcontainer","dtn","dvb","ed2k","facetime","feed","finger","fish","gg","git","gizmoproject","gtalk","hcp","icon","ipn","irc","irc6","ircs","itms","jar","jms","keyparc","lastfm","ldaps","magnet","maps","market","message","mms","ms-help","msnim","mumble","mvn","notes","oid","palm","paparazzi","platform","proxy","psyc","query","res","resource","rmi","rsync","rtmp","secondlife","sftp","sgn","skype","smb","soldat","spotify","ssh","steam","svn","teamspeak","things","udp","unreal","ut2004","ventrilo","view-source","webcal","wtai","wyciwyg","xfire","xri","ymsgr"]},{}],5:[function(e,r,t){"use strict";function n(e){return Object.prototype.toString.call(e)}function s(e){return"[object String]"===n(e)}function o(e,r){return x.call(e,r)}function i(e){var r=Array.prototype.slice.call(arguments,1);return r.forEach(function(r){if(r){if("object"!=typeof r)throw new TypeError(r+"must be object");Object.keys(r).forEach(function(t){e[t]=r[t]})}}),e}function a(e,r,t){return[].concat(e.slice(0,r),t,e.slice(r+1))}function c(e){return e>=55296&&57343>=e?!1:e>=64976&&65007>=e?!1:65535===(65535&e)||65534===(65535&e)?!1:e>=0&&8>=e?!1:11===e?!1:e>=14&&31>=e?!1:e>=127&&159>=e?!1:e>1114111?!1:!0}function l(e){if(e>65535){e-=65536;var r=55296+(e>>10),t=56320+(1023&e);return String.fromCharCode(r,t)}return String.fromCharCode(e)}function u(e,r){var t=0;return o(q,r)?q[r]:35===r.charCodeAt(0)&&w.test(r)&&(t="x"===r[1].toLowerCase()?parseInt(r.slice(2),16):parseInt(r.slice(1),10),c(t))?l(t):e}function p(e){return e.indexOf("\\")<0?e:e.replace(y,"$1")}function h(e){return e.indexOf("\\")<0&&e.indexOf("&")<0?e:e.replace(A,function(e,r,t){return r?r:u(e,t)})}function f(e){return S[e]}function d(e){return D.test(e)?e.replace(E,f):e}function m(e){return e.replace(F,"\\$&")}function g(e){switch(e){case 9:case 32:return!0}return!1}function _(e){if(e>=8192&&8202>=e)return!0;switch(e){case 9:case 10:case 11:case 12:case 13:case 32:case 160:case 5760:case 8239:case 8287:case 12288:return!0}return!1}function k(e){return z.test(e)}function b(e){switch(e){case 33:case 34:case 35:case 36:case 37:case 38:case 39:case 40:case 41:case 42:case 43:case 44:case 45:case 46:case 47:case 58:case 59:case 60:case 61:case 62:case 63:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 123:case 124:case 125:case 126:return!0;default:return!1}}function v(e){return e.trim().replace(/\s+/g," ").toUpperCase()}var x=Object.prototype.hasOwnProperty,y=/\\([!"#$%&'()*+,\-.\/:;<=>?@[\\\]^_`{|}~])/g,C=/&([a-z#][a-z0-9]{1,31});/gi,A=new RegExp(y.source+"|"+C.source,"gi"),w=/^#((?:x[a-f0-9]{1,8}|[0-9]{1,8}))/i,q=e("./entities"),D=/[&<>"]/,E=/[&<>"]/g,S={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"},F=/[.?*+^$[\]\\(){}|-]/g,z=e("uc.micro/categories/P/regex");t.lib={},t.lib.mdurl=e("mdurl"),t.lib.ucmicro=e("uc.micro"),t.assign=i,t.isString=s,t.has=o,t.unescapeMd=p,t.unescapeAll=h,t.isValidEntityCode=c,t.fromCodePoint=l,t.escapeHtml=d,t.arrayReplaceAt=a,t.isSpace=g,t.isWhiteSpace=_,t.isMdAsciiPunct=b,t.isPunctChar=k,t.escapeRE=m,t.normalizeReference=v},{"./entities":1,mdurl:60,"uc.micro":66,"uc.micro/categories/P/regex":64}],6:[function(e,r,t){"use strict";t.parseLinkLabel=e("./parse_link_label"),t.parseLinkDestination=e("./parse_link_destination"),t.parseLinkTitle=e("./parse_link_title")},{"./parse_link_destination":7,"./parse_link_label":8,"./parse_link_title":9}],7:[function(e,r,t){"use strict";var n=e("../common/utils").unescapeAll;r.exports=function(e,r,t){var s,o,i=0,a=r,c={ok:!1,pos:0,lines:0,str:""};if(60===e.charCodeAt(r)){for(r++;t>r;){if(s=e.charCodeAt(r),10===s)return c;if(62===s)return c.pos=r+1,c.str=n(e.slice(a+1,r)),c.ok=!0,c;92===s&&t>r+1?r+=2:r++}return c}for(o=0;t>r&&(s=e.charCodeAt(r),32!==s)&&!(32>s||127===s);)if(92===s&&t>r+1)r+=2;else{if(40===s&&(o++,o>1))break;if(41===s&&(o--,0>o))break;r++}return a===r?c:(c.str=n(e.slice(a,r)),c.lines=i,c.pos=r,c.ok=!0,c)}},{"../common/utils":5}],8:[function(e,r,t){"use strict";r.exports=function(e,r,t){var n,s,o,i,a=-1,c=e.posMax,l=e.pos;for(e.pos=r+1,n=1;e.pos<c;){if(o=e.src.charCodeAt(e.pos),93===o&&(n--,0===n)){s=!0;break}if(i=e.pos,e.md.inline.skipToken(e),91===o)if(i===e.pos-1)n++;else if(t)return e.pos=l,-1}return s&&(a=e.pos),e.pos=l,a}},{}],9:[function(e,r,t){"use strict";var n=e("../common/utils").unescapeAll;r.exports=function(e,r,t){var s,o,i=0,a=r,c={ok:!1,pos:0,lines:0,str:""};if(r>=t)return c;if(o=e.charCodeAt(r),34!==o&&39!==o&&40!==o)return c;for(r++,40===o&&(o=41);t>r;){if(s=e.charCodeAt(r),s===o)return c.pos=r+1,c.lines=i,c.str=n(e.slice(a+1,r)),c.ok=!0,c;10===s?i++:92===s&&t>r+1&&(r++,10===e.charCodeAt(r)&&i++),r++}return c}},{"../common/utils":5}],10:[function(e,r,t){"use strict";function n(e){var r=e.trim().toLowerCase();return _.test(r)?k.test(r)?!0:!1:!0}function s(e){var r=d.parse(e,!0);if(r.hostname&&(!r.protocol||b.indexOf(r.protocol)>=0))try{r.hostname=m.toASCII(r.hostname)}catch(t){}return d.encode(d.format(r))}function o(e){var r=d.parse(e,!0);if(r.hostname&&(!r.protocol||b.indexOf(r.protocol)>=0))try{r.hostname=m.toUnicode(r.hostname)}catch(t){}return d.decode(d.format(r))}function i(e,r){return this instanceof i?(r||a.isString(e)||(r=e||{},e="default"),this.inline=new h,this.block=new p,this.core=new u,this.renderer=new l,this.linkify=new f,this.validateLink=n,this.normalizeLink=s,this.normalizeLinkText=o,this.utils=a,this.helpers=c,this.options={},this.configure(e),void(r&&this.set(r))):new i(e,r)}var a=e("./common/utils"),c=e("./helpers"),l=e("./renderer"),u=e("./parser_core"),p=e("./parser_block"),h=e("./parser_inline"),f=e("linkify-it"),d=e("mdurl"),m=e("punycode"),g={"default":e("./presets/default"),zero:e("./presets/zero"),commonmark:e("./presets/commonmark")},_=/^(vbscript|javascript|file|data):/,k=/^data:image\/(gif|png|jpeg|webp);/,b=["http:","https:","mailto:"];i.prototype.set=function(e){return a.assign(this.options,e),this},i.prototype.configure=function(e){var r,t=this;if(a.isString(e)&&(r=e,e=g[r],!e))throw new Error('Wrong `markdown-it` preset "'+r+'", check name');if(!e)throw new Error("Wrong `markdown-it` preset, can't be empty");return e.options&&t.set(e.options),e.components&&Object.keys(e.components).forEach(function(r){e.components[r].rules&&t[r].ruler.enableOnly(e.components[r].rules),e.components[r].rules2&&t[r].ruler2.enableOnly(e.components[r].rules2)}),this},i.prototype.enable=function(e,r){var t=[];Array.isArray(e)||(e=[e]),["core","block","inline"].forEach(function(r){t=t.concat(this[r].ruler.enable(e,!0))},this),t=t.concat(this.inline.ruler2.enable(e,!0));var n=e.filter(function(e){return t.indexOf(e)<0});if(n.length&&!r)throw new Error("MarkdownIt. Failed to enable unknown rule(s): "+n);return this},i.prototype.disable=function(e,r){var t=[];Array.isArray(e)||(e=[e]),["core","block","inline"].forEach(function(r){t=t.concat(this[r].ruler.disable(e,!0))},this),t=t.concat(this.inline.ruler2.disable(e,!0));var n=e.filter(function(e){return t.indexOf(e)<0});if(n.length&&!r)throw new Error("MarkdownIt. Failed to disable unknown rule(s): "+n);return this},i.prototype.use=function(e){var r=[this].concat(Array.prototype.slice.call(arguments,1));return e.apply(e,r),this},i.prototype.parse=function(e,r){var t=new this.core.State(e,this,r);return this.core.process(t),t.tokens},i.prototype.render=function(e,r){return r=r||{},this.renderer.render(this.parse(e,r),this.options,r)},i.prototype.parseInline=function(e,r){var t=new this.core.State(e,this,r);return t.inlineMode=!0,this.core.process(t),t.tokens},i.prototype.renderInline=function(e,r){return r=r||{},this.renderer.render(this.parseInline(e,r),this.options,r)},r.exports=i},{"./common/utils":5,"./helpers":6,"./parser_block":11,"./parser_core":12,"./parser_inline":13,"./presets/commonmark":14,"./presets/default":15,"./presets/zero":16,"./renderer":17,"linkify-it":55,mdurl:60,punycode:53}],11:[function(e,r,t){"use strict";function n(){this.ruler=new s;for(var e=0;e<o.length;e++)this.ruler.push(o[e][0],o[e][1],{alt:(o[e][2]||[]).slice()})}var s=e("./ruler"),o=[["table",e("./rules_block/table"),["paragraph","reference"]],["code",e("./rules_block/code")],["fence",e("./rules_block/fence"),["paragraph","reference","blockquote","list"]],["blockquote",e("./rules_block/blockquote"),["paragraph","reference","list"]],["hr",e("./rules_block/hr"),["paragraph","reference","blockquote","list"]],["list",e("./rules_block/list"),["paragraph","reference","blockquote"]],["reference",e("./rules_block/reference")],["heading",e("./rules_block/heading"),["paragraph","reference","blockquote"]],["lheading",e("./rules_block/lheading")],["html_block",e("./rules_block/html_block"),["paragraph","reference","blockquote"]],["paragraph",e("./rules_block/paragraph")]];n.prototype.tokenize=function(e,r,t){for(var n,s,o=this.ruler.getRules(""),i=o.length,a=r,c=!1,l=e.md.options.maxNesting;t>a&&(e.line=a=e.skipEmptyLines(a),!(a>=t))&&!(e.sCount[a]<e.blkIndent);){if(e.level>=l){e.line=t;break}for(s=0;i>s&&!(n=o[s](e,a,t,!1));s++);if(e.tight=!c,e.isEmpty(e.line-1)&&(c=!0),a=e.line,t>a&&e.isEmpty(a)){if(c=!0,a++,t>a&&"list"===e.parentType&&e.isEmpty(a))break;e.line=a}}},n.prototype.parse=function(e,r,t,n){var s;return e?(s=new this.State(e,r,t,n),void this.tokenize(s,s.line,s.lineMax)):[]},n.prototype.State=e("./rules_block/state_block"),r.exports=n},{"./ruler":18,"./rules_block/blockquote":19,"./rules_block/code":20,"./rules_block/fence":21,"./rules_block/heading":22,"./rules_block/hr":23,"./rules_block/html_block":24,"./rules_block/lheading":25,"./rules_block/list":26,"./rules_block/paragraph":27,"./rules_block/reference":28,"./rules_block/state_block":29,"./rules_block/table":30}],12:[function(e,r,t){"use strict";function n(){this.ruler=new s;for(var e=0;e<o.length;e++)this.ruler.push(o[e][0],o[e][1])}var s=e("./ruler"),o=[["normalize",e("./rules_core/normalize")],["block",e("./rules_core/block")],["inline",e("./rules_core/inline")],["linkify",e("./rules_core/linkify")],["replacements",e("./rules_core/replacements")],["smartquotes",e("./rules_core/smartquotes")]];n.prototype.process=function(e){var r,t,n;for(n=this.ruler.getRules(""),r=0,t=n.length;t>r;r++)n[r](e)},n.prototype.State=e("./rules_core/state_core"),r.exports=n},{"./ruler":18,"./rules_core/block":31,"./rules_core/inline":32,"./rules_core/linkify":33,"./rules_core/normalize":34,"./rules_core/replacements":35,"./rules_core/smartquotes":36,"./rules_core/state_core":37}],13:[function(e,r,t){"use strict";function n(){var e;for(this.ruler=new s,e=0;e<o.length;e++)this.ruler.push(o[e][0],o[e][1]);for(this.ruler2=new s,e=0;e<i.length;e++)this.ruler2.push(i[e][0],i[e][1])}var s=e("./ruler"),o=[["text",e("./rules_inline/text")],["newline",e("./rules_inline/newline")],["escape",e("./rules_inline/escape")],["backticks",e("./rules_inline/backticks")],["strikethrough",e("./rules_inline/strikethrough").tokenize],["emphasis",e("./rules_inline/emphasis").tokenize],["link",e("./rules_inline/link")],["image",e("./rules_inline/image")],["autolink",e("./rules_inline/autolink")],["html_inline",e("./rules_inline/html_inline")],["entity",e("./rules_inline/entity")]],i=[["balance_pairs",e("./rules_inline/balance_pairs")],["strikethrough",e("./rules_inline/strikethrough").postProcess],["emphasis",e("./rules_inline/emphasis").postProcess],["text_collapse",e("./rules_inline/text_collapse")]];n.prototype.skipToken=function(e){var r,t=e.pos,n=this.ruler.getRules(""),s=n.length,o=e.md.options.maxNesting,i=e.cache;if("undefined"!=typeof i[t])return void(e.pos=i[t]);if(e.level<o)for(r=0;s>r;r++)if(n[r](e,!0))return void(i[t]=e.pos);e.pos++,i[t]=e.pos},n.prototype.tokenize=function(e){for(var r,t,n=this.ruler.getRules(""),s=n.length,o=e.posMax,i=e.md.options.maxNesting;e.pos<o;){if(e.level<i)for(t=0;s>t&&!(r=n[t](e,!1));t++);if(r){if(e.pos>=o)break}else e.pending+=e.src[e.pos++]}e.pending&&e.pushPending()},n.prototype.parse=function(e,r,t,n){var s,o,i,a=new this.State(e,r,t,n);for(this.tokenize(a),o=this.ruler2.getRules(""),i=o.length,s=0;i>s;s++)o[s](a)},n.prototype.State=e("./rules_inline/state_inline"),r.exports=n},{"./ruler":18,"./rules_inline/autolink":38,"./rules_inline/backticks":39,"./rules_inline/balance_pairs":40,"./rules_inline/emphasis":41,"./rules_inline/entity":42,"./rules_inline/escape":43,"./rules_inline/html_inline":44,"./rules_inline/image":45,"./rules_inline/link":46,"./rules_inline/newline":47,"./rules_inline/state_inline":48,"./rules_inline/strikethrough":49,"./rules_inline/text":50,"./rules_inline/text_collapse":51}],14:[function(e,r,t){"use strict";r.exports={options:{html:!0,xhtmlOut:!0,breaks:!1,langPrefix:"language-",linkify:!1,typographer:!1,quotes:"\u201c\u201d\u2018\u2019",highlight:null,maxNesting:20},components:{core:{rules:["normalize","block","inline"]},block:{rules:["blockquote","code","fence","heading","hr","html_block","lheading","list","reference","paragraph"]},inline:{rules:["autolink","backticks","emphasis","entity","escape","html_inline","image","link","newline","text"],rules2:["balance_pairs","emphasis","text_collapse"]}}}},{}],15:[function(e,r,t){"use strict";r.exports={options:{html:!1,xhtmlOut:!1,breaks:!1,langPrefix:"language-",linkify:!1,typographer:!1,quotes:"\u201c\u201d\u2018\u2019",highlight:null,maxNesting:20},components:{core:{},block:{},inline:{}}}},{}],16:[function(e,r,t){"use strict";r.exports={options:{html:!1,xhtmlOut:!1,breaks:!1,langPrefix:"language-",linkify:!1,typographer:!1,quotes:"\u201c\u201d\u2018\u2019",highlight:null,maxNesting:20},components:{core:{rules:["normalize","block","inline"]},block:{rules:["paragraph"]},inline:{rules:["text"],rules2:["balance_pairs","text_collapse"]}}}},{}],17:[function(e,r,t){"use strict";function n(){this.rules=s({},a)}var s=e("./common/utils").assign,o=e("./common/utils").unescapeAll,i=e("./common/utils").escapeHtml,a={};a.code_inline=function(e,r){return"<code>"+i(e[r].content)+"</code>"},a.code_block=function(e,r){return"<pre><code>"+i(e[r].content)+"</code></pre>\n"},a.fence=function(e,r,t,n,s){var a,c=e[r],l=c.info?o(c.info).trim():"",u="";return l&&(u=l.split(/\s+/g)[0],c.attrPush(["class",t.langPrefix+u])),a=t.highlight?t.highlight(c.content,u)||i(c.content):i(c.content),"<pre><code"+s.renderAttrs(c)+">"+a+"</code></pre>\n"},a.image=function(e,r,t,n,s){var o=e[r];return o.attrs[o.attrIndex("alt")][1]=s.renderInlineAsText(o.children,t,n),s.renderToken(e,r,t)},a.hardbreak=function(e,r,t){return t.xhtmlOut?"<br />\n":"<br>\n"},a.softbreak=function(e,r,t){return t.breaks?t.xhtmlOut?"<br />\n":"<br>\n":"\n"},a.text=function(e,r){return i(e[r].content)},a.html_block=function(e,r){return e[r].content},a.html_inline=function(e,r){return e[r].content},n.prototype.renderAttrs=function(e){var r,t,n;if(!e.attrs)return"";for(n="",r=0,t=e.attrs.length;t>r;r++)n+=" "+i(e.attrs[r][0])+'="'+i(e.attrs[r][1])+'"';return n},n.prototype.renderToken=function(e,r,t){var n,s="",o=!1,i=e[r];return i.hidden?"":(i.block&&-1!==i.nesting&&r&&e[r-1].hidden&&(s+="\n"),s+=(-1===i.nesting?"</":"<")+i.tag,s+=this.renderAttrs(i),0===i.nesting&&t.xhtmlOut&&(s+=" /"),i.block&&(o=!0,1===i.nesting&&r+1<e.length&&(n=e[r+1],"inline"===n.type||n.hidden?o=!1:-1===n.nesting&&n.tag===i.tag&&(o=!1))),s+=o?">\n":">")},n.prototype.renderInline=function(e,r,t){for(var n,s="",o=this.rules,i=0,a=e.length;a>i;i++)n=e[i].type,s+="undefined"!=typeof o[n]?o[n](e,i,r,t,this):this.renderToken(e,i,r);return s},n.prototype.renderInlineAsText=function(e,r,t){for(var n="",s=this.rules,o=0,i=e.length;i>o;o++)"text"===e[o].type?n+=s.text(e,o,r,t,this):"image"===e[o].type&&(n+=this.renderInlineAsText(e[o].children,r,t));return n},n.prototype.render=function(e,r,t){var n,s,o,i="",a=this.rules;for(n=0,s=e.length;s>n;n++)o=e[n].type,i+="inline"===o?this.renderInline(e[n].children,r,t):"undefined"!=typeof a[o]?a[e[n].type](e,n,r,t,this):this.renderToken(e,n,r,t);return i},r.exports=n},{"./common/utils":5}],18:[function(e,r,t){"use strict";function n(){this.__rules__=[],this.__cache__=null}n.prototype.__find__=function(e){for(var r=0;r<this.__rules__.length;r++)if(this.__rules__[r].name===e)return r;return-1},n.prototype.__compile__=function(){var e=this,r=[""];e.__rules__.forEach(function(e){e.enabled&&e.alt.forEach(function(e){r.indexOf(e)<0&&r.push(e)})}),e.__cache__={},r.forEach(function(r){e.__cache__[r]=[],e.__rules__.forEach(function(t){t.enabled&&(r&&t.alt.indexOf(r)<0||e.__cache__[r].push(t.fn))})})},n.prototype.at=function(e,r,t){var n=this.__find__(e),s=t||{};if(-1===n)throw new Error("Parser rule not found: "+e);this.__rules__[n].fn=r,this.__rules__[n].alt=s.alt||[],this.__cache__=null},n.prototype.before=function(e,r,t,n){var s=this.__find__(e),o=n||{};if(-1===s)throw new Error("Parser rule not found: "+e);this.__rules__.splice(s,0,{name:r,enabled:!0,fn:t,alt:o.alt||[]}),this.__cache__=null},n.prototype.after=function(e,r,t,n){var s=this.__find__(e),o=n||{};if(-1===s)throw new Error("Parser rule not found: "+e);this.__rules__.splice(s+1,0,{name:r,enabled:!0,fn:t,alt:o.alt||[]}),this.__cache__=null},n.prototype.push=function(e,r,t){var n=t||{};this.__rules__.push({name:e,enabled:!0,fn:r,alt:n.alt||[]}),this.__cache__=null},n.prototype.enable=function(e,r){Array.isArray(e)||(e=[e]);var t=[];return e.forEach(function(e){var n=this.__find__(e);if(0>n){if(r)return;throw new Error("Rules manager: invalid rule name "+e)}this.__rules__[n].enabled=!0,t.push(e)},this),this.__cache__=null,t},n.prototype.enableOnly=function(e,r){Array.isArray(e)||(e=[e]),this.__rules__.forEach(function(e){e.enabled=!1}),this.enable(e,r)},n.prototype.disable=function(e,r){Array.isArray(e)||(e=[e]);var t=[];return e.forEach(function(e){var n=this.__find__(e);if(0>n){if(r)return;throw new Error("Rules manager: invalid rule name "+e)}this.__rules__[n].enabled=!1,t.push(e)},this),this.__cache__=null,t},n.prototype.getRules=function(e){return null===this.__cache__&&this.__compile__(),this.__cache__[e]||[]},r.exports=n},{}],19:[function(e,r,t){"use strict";var n=e("../common/utils").isSpace;r.exports=function(e,r,t,s){var o,i,a,c,l,u,p,h,f,d,m,g,_,k,b,v,x=e.bMarks[r]+e.tShift[r],y=e.eMarks[r];if(62!==e.src.charCodeAt(x++))return!1;if(s)return!0;for(32===e.src.charCodeAt(x)&&x++,u=e.blkIndent,e.blkIndent=0,f=d=e.sCount[r]+x-(e.bMarks[r]+e.tShift[r]),l=[e.bMarks[r]],e.bMarks[r]=x;y>x&&(m=e.src.charCodeAt(x),n(m));)9===m?d+=4-d%4:d++,x++;for(i=x>=y,c=[e.sCount[r]],e.sCount[r]=d-f,a=[e.tShift[r]],e.tShift[r]=x-e.bMarks[r],g=e.md.block.ruler.getRules("blockquote"),o=r+1;t>o&&!(e.sCount[o]<u)&&(x=e.bMarks[o]+e.tShift[o],y=e.eMarks[o],!(x>=y));o++)if(62!==e.src.charCodeAt(x++)){if(i)break;for(v=!1,k=0,b=g.length;b>k;k++)if(g[k](e,o,t,!0)){v=!0;break}if(v)break;l.push(e.bMarks[o]),a.push(e.tShift[o]),c.push(e.sCount[o]),e.sCount[o]=-1}else{for(32===e.src.charCodeAt(x)&&x++,f=d=e.sCount[o]+x-(e.bMarks[o]+e.tShift[o]),l.push(e.bMarks[o]),e.bMarks[o]=x;y>x&&(m=e.src.charCodeAt(x),n(m));)9===m?d+=4-d%4:d++,x++;i=x>=y,c.push(e.sCount[o]),e.sCount[o]=d-f,a.push(e.tShift[o]),e.tShift[o]=x-e.bMarks[o]}for(p=e.parentType,e.parentType="blockquote",_=e.push("blockquote_open","blockquote",1),_.markup=">",_.map=h=[r,0],e.md.block.tokenize(e,r,o),_=e.push("blockquote_close","blockquote",-1),_.markup=">",e.parentType=p,h[1]=e.line,k=0;k<a.length;k++)e.bMarks[k+r]=l[k],e.tShift[k+r]=a[k],e.sCount[k+r]=c[k];return e.blkIndent=u,!0}},{"../common/utils":5}],20:[function(e,r,t){"use strict";r.exports=function(e,r,t){var n,s,o;if(e.sCount[r]-e.blkIndent<4)return!1;for(s=n=r+1;t>n;)if(e.isEmpty(n))n++;else{if(!(e.sCount[n]-e.blkIndent>=4))break;n++,s=n}return e.line=n,o=e.push("code_block","code",0),o.content=e.getLines(r,s,4+e.blkIndent,!0),o.map=[r,e.line],!0}},{}],21:[function(e,r,t){"use strict";r.exports=function(e,r,t,n){var s,o,i,a,c,l,u,p=!1,h=e.bMarks[r]+e.tShift[r],f=e.eMarks[r];if(h+3>f)return!1;if(s=e.src.charCodeAt(h),126!==s&&96!==s)return!1;if(c=h,h=e.skipChars(h,s),o=h-c,3>o)return!1;if(u=e.src.slice(c,h),i=e.src.slice(h,f),i.indexOf("`")>=0)return!1;if(n)return!0;for(a=r;(a++,!(a>=t))&&(h=c=e.bMarks[a]+e.tShift[a],f=e.eMarks[a],!(f>h&&e.sCount[a]<e.blkIndent));)if(e.src.charCodeAt(h)===s&&!(e.sCount[a]-e.blkIndent>=4||(h=e.skipChars(h,s),o>h-c||(h=e.skipSpaces(h),f>h)))){p=!0;break}return o=e.sCount[r],e.line=a+(p?1:0),l=e.push("fence","code",0),l.info=i,l.content=e.getLines(r+1,a,o,!0),l.markup=u,l.map=[r,e.line],!0}},{}],22:[function(e,r,t){"use strict";var n=e("../common/utils").isSpace;r.exports=function(e,r,t,s){var o,i,a,c,l=e.bMarks[r]+e.tShift[r],u=e.eMarks[r];if(o=e.src.charCodeAt(l),35!==o||l>=u)return!1;for(i=1,o=e.src.charCodeAt(++l);35===o&&u>l&&6>=i;)i++,o=e.src.charCodeAt(++l);return i>6||u>l&&32!==o?!1:s?!0:(u=e.skipSpacesBack(u,l),a=e.skipCharsBack(u,35,l),a>l&&n(e.src.charCodeAt(a-1))&&(u=a),e.line=r+1,c=e.push("heading_open","h"+String(i),1),c.markup="########".slice(0,i),c.map=[r,e.line],c=e.push("inline","",0),c.content=e.src.slice(l,u).trim(),c.map=[r,e.line],c.children=[],c=e.push("heading_close","h"+String(i),-1),c.markup="########".slice(0,i),!0)}},{"../common/utils":5}],23:[function(e,r,t){"use strict";var n=e("../common/utils").isSpace;r.exports=function(e,r,t,s){var o,i,a,c,l=e.bMarks[r]+e.tShift[r],u=e.eMarks[r];if(o=e.src.charCodeAt(l++),42!==o&&45!==o&&95!==o)return!1;for(i=1;u>l;){if(a=e.src.charCodeAt(l++),a!==o&&!n(a))return!1;a===o&&i++}return 3>i?!1:s?!0:(e.line=r+1,c=e.push("hr","hr",0),c.map=[r,e.line],c.markup=Array(i+1).join(String.fromCharCode(o)),!0)}},{"../common/utils":5}],24:[function(e,r,t){"use strict";var n=e("../common/html_blocks"),s=e("../common/html_re").HTML_OPEN_CLOSE_TAG_RE,o=[[/^<(script|pre|style)(?=(\s|>|$))/i,/<\/(script|pre|style)>/i,!0],[/^<!--/,/-->/,!0],[/^<\?/,/\?>/,!0],[/^<![A-Z]/,/>/,!0],[/^<!\[CDATA\[/,/\]\]>/,!0],[new RegExp("^</?("+n.join("|")+")(?=(\\s|/?>|$))","i"),/^$/,!0],[new RegExp(s.source+"\\s*$"),/^$/,!1]];r.exports=function(e,r,t,n){var s,i,a,c,l=e.bMarks[r]+e.tShift[r],u=e.eMarks[r];if(!e.md.options.html)return!1;if(60!==e.src.charCodeAt(l))return!1;for(c=e.src.slice(l,u),s=0;s<o.length&&!o[s][0].test(c);s++);if(s===o.length)return!1;if(n)return o[s][2];if(i=r+1,!o[s][1].test(c))for(;t>i&&!(e.sCount[i]<e.blkIndent);i++)if(l=e.bMarks[i]+e.tShift[i],u=e.eMarks[i],c=e.src.slice(l,u),o[s][1].test(c)){0!==c.length&&i++;break}return e.line=i,a=e.push("html_block","",0),a.map=[r,i],a.content=e.getLines(r,i,e.blkIndent,!0),!0}},{"../common/html_blocks":2,"../common/html_re":3}],25:[function(e,r,t){"use strict";r.exports=function(e,r,t){var n,s,o,i,a,c=r+1;return c>=t?!1:e.sCount[c]<e.blkIndent?!1:e.sCount[c]-e.blkIndent>3?!1:(s=e.bMarks[c]+e.tShift[c],o=e.eMarks[c],s>=o?!1:(n=e.src.charCodeAt(s),45!==n&&61!==n?!1:(s=e.skipChars(s,n),s=e.skipSpaces(s),o>s?!1:(s=e.bMarks[r]+e.tShift[r],e.line=c+1,a=61===n?1:2,i=e.push("heading_open","h"+String(a),1),i.markup=String.fromCharCode(n),i.map=[r,e.line],i=e.push("inline","",0),i.content=e.src.slice(s,e.eMarks[r]).trim(),i.map=[r,e.line-1],i.children=[],i=e.push("heading_close","h"+String(a),-1),i.markup=String.fromCharCode(n),!0))))}},{}],26:[function(e,r,t){"use strict";function n(e,r){var t,n,s,o;return n=e.bMarks[r]+e.tShift[r],s=e.eMarks[r],t=e.src.charCodeAt(n++),42!==t&&45!==t&&43!==t?-1:s>n&&(o=e.src.charCodeAt(n),!i(o))?-1:n}function s(e,r){var t,n=e.bMarks[r]+e.tShift[r],s=n,o=e.eMarks[r];if(s+1>=o)return-1;if(t=e.src.charCodeAt(s++),48>t||t>57)return-1;for(;;){if(s>=o)return-1;t=e.src.charCodeAt(s++);{if(!(t>=48&&57>=t)){if(41===t||46===t)break;return-1}if(s-n>=10)return-1}}return o>s&&(t=e.src.charCodeAt(s),!i(t))?-1:s}function o(e,r){var t,n,s=e.level+2;for(t=r+2,n=e.tokens.length-2;n>t;t++)e.tokens[t].level===s&&"paragraph_open"===e.tokens[t].type&&(e.tokens[t+2].hidden=!0,e.tokens[t].hidden=!0,t+=2)}var i=e("../common/utils").isSpace;r.exports=function(e,r,t,a){var c,l,u,p,h,f,d,m,g,_,k,b,v,x,y,C,A,w,q,D,E,S,F,z,L,T,R,M,I=!0;if((k=s(e,r))>=0)w=!0;else{if(!((k=n(e,r))>=0))return!1;w=!1}if(A=e.src.charCodeAt(k-1),a)return!0;for(D=e.tokens.length,w?(_=e.bMarks[r]+e.tShift[r],C=Number(e.src.substr(_,k-_-1)),L=e.push("ordered_list_open","ol",1),1!==C&&(L.attrs=[["start",C]])):L=e.push("bullet_list_open","ul",1),L.map=S=[r,0],L.markup=String.fromCharCode(A),c=r,E=!1,z=e.md.block.ruler.getRules("list");t>c;){for(v=k,x=e.eMarks[c],l=u=e.sCount[c]+k-(e.bMarks[r]+e.tShift[r]);x>v&&(b=e.src.charCodeAt(v),i(b));)9===b?u+=4-u%4:u++,v++;if(q=v,y=q>=x?1:u-l,y>4&&(y=1),p=l+y,L=e.push("list_item_open","li",1),L.markup=String.fromCharCode(A),L.map=F=[r,0],f=e.blkIndent,m=e.tight,h=e.tShift[r],d=e.sCount[r],g=e.parentType,e.blkIndent=p,e.tight=!0,e.parentType="list",e.tShift[r]=q-e.bMarks[r],e.sCount[r]=u,e.md.block.tokenize(e,r,t,!0),(!e.tight||E)&&(I=!1),E=e.line-r>1&&e.isEmpty(e.line-1),e.blkIndent=f,e.tShift[r]=h,e.sCount[r]=d,e.tight=m,e.parentType=g,L=e.push("list_item_close","li",-1),L.markup=String.fromCharCode(A),c=r=e.line,F[1]=c,q=e.bMarks[r],c>=t)break;if(e.isEmpty(c))break;if(e.sCount[c]<e.blkIndent)break;for(M=!1,T=0,R=z.length;R>T;T++)if(z[T](e,c,t,!0)){M=!0;break}if(M)break;if(w){if(k=s(e,c),0>k)break}else if(k=n(e,c),0>k)break;if(A!==e.src.charCodeAt(k-1))break}return L=w?e.push("ordered_list_close","ol",-1):e.push("bullet_list_close","ul",-1),L.markup=String.fromCharCode(A),S[1]=c,e.line=c,I&&o(e,D),!0}},{"../common/utils":5}],27:[function(e,r,t){"use strict";r.exports=function(e,r){for(var t,n,s,o,i,a=r+1,c=e.md.block.ruler.getRules("paragraph"),l=e.lineMax;l>a&&!e.isEmpty(a);a++)if(!(e.sCount[a]-e.blkIndent>3||e.sCount[a]<0)){for(n=!1,s=0,o=c.length;o>s;s++)if(c[s](e,a,l,!0)){n=!0;break}if(n)break}return t=e.getLines(r,a,e.blkIndent,!1).trim(),e.line=a,i=e.push("paragraph_open","p",1),i.map=[r,e.line],i=e.push("inline","",0),i.content=t,i.map=[r,e.line],i.children=[],i=e.push("paragraph_close","p",-1),!0}},{}],28:[function(e,r,t){"use strict";var n=e("../helpers/parse_link_destination"),s=e("../helpers/parse_link_title"),o=e("../common/utils").normalizeReference,i=e("../common/utils").isSpace;r.exports=function(e,r,t,a){var c,l,u,p,h,f,d,m,g,_,k,b,v,x,y,C=0,A=e.bMarks[r]+e.tShift[r],w=e.eMarks[r],q=r+1;if(91!==e.src.charCodeAt(A))return!1;for(;++A<w;)if(93===e.src.charCodeAt(A)&&92!==e.src.charCodeAt(A-1)){if(A+1===w)return!1;if(58!==e.src.charCodeAt(A+1))return!1;break}for(p=e.lineMax,x=e.md.block.ruler.getRules("reference");p>q&&!e.isEmpty(q);q++)if(!(e.sCount[q]-e.blkIndent>3||e.sCount[q]<0)){for(v=!1,f=0,d=x.length;d>f;f++)if(x[f](e,q,p,!0)){v=!0;break}if(v)break}for(b=e.getLines(r,q,e.blkIndent,!1).trim(),w=b.length,A=1;w>A;A++){if(c=b.charCodeAt(A),91===c)return!1;if(93===c){g=A;break}10===c?C++:92===c&&(A++,w>A&&10===b.charCodeAt(A)&&C++)}if(0>g||58!==b.charCodeAt(g+1))return!1;for(A=g+2;w>A;A++)if(c=b.charCodeAt(A),10===c)C++;else if(!i(c))break;if(_=n(b,A,w),!_.ok)return!1;if(h=e.md.normalizeLink(_.str),!e.md.validateLink(h))return!1;for(A=_.pos,C+=_.lines,l=A,u=C,k=A;w>A;A++)if(c=b.charCodeAt(A),10===c)C++;else if(!i(c))break;for(_=s(b,A,w),w>A&&k!==A&&_.ok?(y=_.str,A=_.pos,C+=_.lines):(y="",A=l,C=u);w>A&&(c=b.charCodeAt(A),i(c));)A++;if(w>A&&10!==b.charCodeAt(A)&&y)for(y="",A=l,C=u;w>A&&(c=b.charCodeAt(A),i(c));)A++;return w>A&&10!==b.charCodeAt(A)?!1:(m=o(b.slice(1,g)))?a?!0:("undefined"==typeof e.env.references&&(e.env.references={}),"undefined"==typeof e.env.references[m]&&(e.env.references[m]={title:y,href:h}),e.line=r+C+1,!0):!1}},{"../common/utils":5,"../helpers/parse_link_destination":7,"../helpers/parse_link_title":9}],29:[function(e,r,t){"use strict";function n(e,r,t,n){var s,i,a,c,l,u,p,h;for(this.src=e,this.md=r,this.env=t,this.tokens=n,this.bMarks=[],this.eMarks=[],this.tShift=[],this.sCount=[],this.blkIndent=0,this.line=0,this.lineMax=0,this.tight=!1,this.parentType="root",this.ddIndent=-1,this.level=0,this.result="",i=this.src,h=!1,a=c=u=p=0,l=i.length;l>c;c++){if(s=i.charCodeAt(c),!h){if(o(s)){u++,9===s?p+=4-p%4:p++;continue}h=!0}(10===s||c===l-1)&&(10!==s&&c++,this.bMarks.push(a),this.eMarks.push(c),this.tShift.push(u),this.sCount.push(p),h=!1,u=0,p=0,a=c+1)}this.bMarks.push(i.length),this.eMarks.push(i.length),this.tShift.push(0),this.sCount.push(0),this.lineMax=this.bMarks.length-1}var s=e("../token"),o=e("../common/utils").isSpace;n.prototype.push=function(e,r,t){var n=new s(e,r,t);return n.block=!0,0>t&&this.level--,n.level=this.level,t>0&&this.level++,this.tokens.push(n),n},n.prototype.isEmpty=function(e){return this.bMarks[e]+this.tShift[e]>=this.eMarks[e]},n.prototype.skipEmptyLines=function(e){for(var r=this.lineMax;r>e&&!(this.bMarks[e]+this.tShift[e]<this.eMarks[e]);e++);return e},n.prototype.skipSpaces=function(e){for(var r,t=this.src.length;t>e&&(r=this.src.charCodeAt(e),o(r));e++);return e},n.prototype.skipSpacesBack=function(e,r){if(r>=e)return e;for(;e>r;)if(!o(this.src.charCodeAt(--e)))return e+1;return e},n.prototype.skipChars=function(e,r){for(var t=this.src.length;t>e&&this.src.charCodeAt(e)===r;e++);return e},n.prototype.skipCharsBack=function(e,r,t){if(t>=e)return e;for(;e>t;)if(r!==this.src.charCodeAt(--e))return e+1;return e},n.prototype.getLines=function(e,r,t,n){var s,i,a,c,l,u,p,h=e;if(e>=r)return"";for(u=new Array(r-e),s=0;r>h;h++,s++){for(i=0,p=c=this.bMarks[h],l=r>h+1||n?this.eMarks[h]+1:this.eMarks[h];l>c&&t>i;){if(a=this.src.charCodeAt(c),o(a))9===a?i+=4-i%4:i++;else{if(!(c-p<this.tShift[h]))break;i++}
	c++}u[s]=this.src.slice(c,l)}return u.join("")},n.prototype.Token=s,r.exports=n},{"../common/utils":5,"../token":52}],30:[function(e,r,t){"use strict";function n(e,r){var t=e.bMarks[r]+e.blkIndent,n=e.eMarks[r];return e.src.substr(t,n-t)}function s(e){var r,t=[],n=0,s=e.length,o=0,i=0,a=!1,c=0;for(r=e.charCodeAt(n);s>n;)96===r&&o%2===0?(a=!a,c=n):124!==r||o%2!==0||a?92===r?o++:o=0:(t.push(e.substring(i,n)),i=n+1),n++,n===s&&a&&(a=!1,n=c+1),r=e.charCodeAt(n);return t.push(e.substring(i)),t}r.exports=function(e,r,t,o){var i,a,c,l,u,p,h,f,d,m,g;if(r+2>t)return!1;if(u=r+1,e.sCount[u]<e.blkIndent)return!1;if(c=e.bMarks[u]+e.tShift[u],c>=e.eMarks[u])return!1;if(i=e.src.charCodeAt(c),124!==i&&45!==i&&58!==i)return!1;if(a=n(e,r+1),!/^[-:| ]+$/.test(a))return!1;if(p=a.split("|"),p.length<2)return!1;for(f=[],l=0;l<p.length;l++){if(d=p[l].trim(),!d){if(0===l||l===p.length-1)continue;return!1}if(!/^:?-+:?$/.test(d))return!1;58===d.charCodeAt(d.length-1)?f.push(58===d.charCodeAt(0)?"center":"right"):58===d.charCodeAt(0)?f.push("left"):f.push("")}if(a=n(e,r).trim(),-1===a.indexOf("|"))return!1;if(p=s(a.replace(/^\||\|$/g,"")),f.length!==p.length)return!1;if(o)return!0;for(h=e.push("table_open","table",1),h.map=m=[r,0],h=e.push("thead_open","thead",1),h.map=[r,r+1],h=e.push("tr_open","tr",1),h.map=[r,r+1],l=0;l<p.length;l++)h=e.push("th_open","th",1),h.map=[r,r+1],f[l]&&(h.attrs=[["style","text-align:"+f[l]]]),h=e.push("inline","",0),h.content=p[l].trim(),h.map=[r,r+1],h.children=[],h=e.push("th_close","th",-1);for(h=e.push("tr_close","tr",-1),h=e.push("thead_close","thead",-1),h=e.push("tbody_open","tbody",1),h.map=g=[r+2,0],u=r+2;t>u&&!(e.sCount[u]<e.blkIndent)&&(a=n(e,u).trim(),-1!==a.indexOf("|"));u++){for(p=s(a.replace(/^\||\|$/g,"")),p.length=f.length,h=e.push("tr_open","tr",1),l=0;l<p.length;l++)h=e.push("td_open","td",1),f[l]&&(h.attrs=[["style","text-align:"+f[l]]]),h=e.push("inline","",0),h.content=p[l]?p[l].trim():"",h.children=[],h=e.push("td_close","td",-1);h=e.push("tr_close","tr",-1)}return h=e.push("tbody_close","tbody",-1),h=e.push("table_close","table",-1),m[1]=g[1]=u,e.line=u,!0}},{}],31:[function(e,r,t){"use strict";r.exports=function(e){var r;e.inlineMode?(r=new e.Token("inline","",0),r.content=e.src,r.map=[0,1],r.children=[],e.tokens.push(r)):e.md.block.parse(e.src,e.md,e.env,e.tokens)}},{}],32:[function(e,r,t){"use strict";r.exports=function(e){var r,t,n,s=e.tokens;for(t=0,n=s.length;n>t;t++)r=s[t],"inline"===r.type&&e.md.inline.parse(r.content,e.md,e.env,r.children)}},{}],33:[function(e,r,t){"use strict";function n(e){return/^<a[>\s]/i.test(e)}function s(e){return/^<\/a\s*>/i.test(e)}var o=e("../common/utils").arrayReplaceAt;r.exports=function(e){var r,t,i,a,c,l,u,p,h,f,d,m,g,_,k,b,v,x=e.tokens;if(e.md.options.linkify)for(t=0,i=x.length;i>t;t++)if("inline"===x[t].type&&e.md.linkify.pretest(x[t].content))for(a=x[t].children,g=0,r=a.length-1;r>=0;r--)if(l=a[r],"link_close"!==l.type){if("html_inline"===l.type&&(n(l.content)&&g>0&&g--,s(l.content)&&g++),!(g>0)&&"text"===l.type&&e.md.linkify.test(l.content)){for(h=l.content,v=e.md.linkify.match(h),u=[],m=l.level,d=0,p=0;p<v.length;p++)_=v[p].url,k=e.md.normalizeLink(_),e.md.validateLink(k)&&(b=v[p].text,b=v[p].schema?"mailto:"!==v[p].schema||/^mailto:/i.test(b)?e.md.normalizeLinkText(b):e.md.normalizeLinkText("mailto:"+b).replace(/^mailto:/,""):e.md.normalizeLinkText("http://"+b).replace(/^http:\/\//,""),f=v[p].index,f>d&&(c=new e.Token("text","",0),c.content=h.slice(d,f),c.level=m,u.push(c)),c=new e.Token("link_open","a",1),c.attrs=[["href",k]],c.level=m++,c.markup="linkify",c.info="auto",u.push(c),c=new e.Token("text","",0),c.content=b,c.level=m,u.push(c),c=new e.Token("link_close","a",-1),c.level=--m,c.markup="linkify",c.info="auto",u.push(c),d=v[p].lastIndex);d<h.length&&(c=new e.Token("text","",0),c.content=h.slice(d),c.level=m,u.push(c)),x[t].children=a=o(a,r,u)}}else for(r--;a[r].level!==l.level&&"link_open"!==a[r].type;)r--}},{"../common/utils":5}],34:[function(e,r,t){"use strict";var n=/\r[\n\u0085]|[\u2424\u2028\u0085]/g,s=/\u0000/g;r.exports=function(e){var r;r=e.src.replace(n,"\n"),r=r.replace(s,"\ufffd"),e.src=r}},{}],35:[function(e,r,t){"use strict";function n(e,r){return l[r.toLowerCase()]}function s(e){var r,t;for(r=e.length-1;r>=0;r--)t=e[r],"text"===t.type&&(t.content=t.content.replace(c,n))}function o(e){var r,t;for(r=e.length-1;r>=0;r--)t=e[r],"text"===t.type&&i.test(t.content)&&(t.content=t.content.replace(/\+-/g,"\xb1").replace(/\.{2,}/g,"\u2026").replace(/([?!])\u2026/g,"$1..").replace(/([?!]){4,}/g,"$1$1$1").replace(/,{2,}/g,",").replace(/(^|[^-])---([^-]|$)/gm,"$1\u2014$2").replace(/(^|\s)--(\s|$)/gm,"$1\u2013$2").replace(/(^|[^-\s])--([^-\s]|$)/gm,"$1\u2013$2"))}var i=/\+-|\.\.|\?\?\?\?|!!!!|,,|--/,a=/\((c|tm|r|p)\)/i,c=/\((c|tm|r|p)\)/gi,l={c:"\xa9",r:"\xae",p:"\xa7",tm:"\u2122"};r.exports=function(e){var r;if(e.md.options.typographer)for(r=e.tokens.length-1;r>=0;r--)"inline"===e.tokens[r].type&&(a.test(e.tokens[r].content)&&s(e.tokens[r].children),i.test(e.tokens[r].content)&&o(e.tokens[r].children))}},{}],36:[function(e,r,t){"use strict";function n(e,r,t){return e.substr(0,r)+t+e.substr(r+1)}function s(e,r){var t,s,c,p,h,f,d,m,g,_,k,b,v,x,y,C,A,w,q,D,E;for(q=[],t=0;t<e.length;t++){for(s=e[t],d=e[t].level,A=q.length-1;A>=0&&!(q[A].level<=d);A--);if(q.length=A+1,"text"===s.type){c=s.content,h=0,f=c.length;e:for(;f>h&&(l.lastIndex=h,p=l.exec(c));)if(y=C=!0,h=p.index+1,w="'"===p[0],g=p.index-1>=0?c.charCodeAt(p.index-1):32,_=f>h?c.charCodeAt(h):32,k=a(g)||i(String.fromCharCode(g)),b=a(_)||i(String.fromCharCode(_)),v=o(g),x=o(_),x?y=!1:b&&(v||k||(y=!1)),v?C=!1:k&&(x||b||(C=!1)),34===_&&'"'===p[0]&&g>=48&&57>=g&&(C=y=!1),y&&C&&(y=!1,C=b),y||C){if(C)for(A=q.length-1;A>=0&&(m=q[A],!(q[A].level<d));A--)if(m.single===w&&q[A].level===d){m=q[A],w?(D=r.md.options.quotes[2],E=r.md.options.quotes[3]):(D=r.md.options.quotes[0],E=r.md.options.quotes[1]),s.content=n(s.content,p.index,E),e[m.token].content=n(e[m.token].content,m.pos,D),h+=E.length-1,m.token===t&&(h+=D.length-1),c=s.content,f=c.length,q.length=A;continue e}y?q.push({token:t,pos:p.index,single:w,level:d}):C&&w&&(s.content=n(s.content,p.index,u))}else w&&(s.content=n(s.content,p.index,u))}}}var o=e("../common/utils").isWhiteSpace,i=e("../common/utils").isPunctChar,a=e("../common/utils").isMdAsciiPunct,c=/['"]/,l=/['"]/g,u="\u2019";r.exports=function(e){var r;if(e.md.options.typographer)for(r=e.tokens.length-1;r>=0;r--)"inline"===e.tokens[r].type&&c.test(e.tokens[r].content)&&s(e.tokens[r].children,e)}},{"../common/utils":5}],37:[function(e,r,t){"use strict";function n(e,r,t){this.src=e,this.env=t,this.tokens=[],this.inlineMode=!1,this.md=r}var s=e("../token");n.prototype.Token=s,r.exports=n},{"../token":52}],38:[function(e,r,t){"use strict";var n=e("../common/url_schemas"),s=/^<([a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)>/,o=/^<([a-zA-Z.\-]{1,25}):([^<>\x00-\x20]*)>/;r.exports=function(e,r){var t,i,a,c,l,u,p=e.pos;return 60!==e.src.charCodeAt(p)?!1:(t=e.src.slice(p),t.indexOf(">")<0?!1:o.test(t)?(i=t.match(o),n.indexOf(i[1].toLowerCase())<0?!1:(c=i[0].slice(1,-1),l=e.md.normalizeLink(c),e.md.validateLink(l)?(r||(u=e.push("link_open","a",1),u.attrs=[["href",l]],u.markup="autolink",u.info="auto",u=e.push("text","",0),u.content=e.md.normalizeLinkText(c),u=e.push("link_close","a",-1),u.markup="autolink",u.info="auto"),e.pos+=i[0].length,!0):!1)):s.test(t)?(a=t.match(s),c=a[0].slice(1,-1),l=e.md.normalizeLink("mailto:"+c),e.md.validateLink(l)?(r||(u=e.push("link_open","a",1),u.attrs=[["href",l]],u.markup="autolink",u.info="auto",u=e.push("text","",0),u.content=e.md.normalizeLinkText(c),u=e.push("link_close","a",-1),u.markup="autolink",u.info="auto"),e.pos+=a[0].length,!0):!1):!1)}},{"../common/url_schemas":4}],39:[function(e,r,t){"use strict";r.exports=function(e,r){var t,n,s,o,i,a,c=e.pos,l=e.src.charCodeAt(c);if(96!==l)return!1;for(t=c,c++,n=e.posMax;n>c&&96===e.src.charCodeAt(c);)c++;for(s=e.src.slice(t,c),o=i=c;-1!==(o=e.src.indexOf("`",i));){for(i=o+1;n>i&&96===e.src.charCodeAt(i);)i++;if(i-o===s.length)return r||(a=e.push("code_inline","code",0),a.markup=s,a.content=e.src.slice(c,o).replace(/[ \n]+/g," ").trim()),e.pos=i,!0}return r||(e.pending+=s),e.pos+=s.length,!0}},{}],40:[function(e,r,t){"use strict";r.exports=function(e){var r,t,n,s,o=e.delimiters,i=e.delimiters.length;for(r=0;i>r;r++)if(n=o[r],n.close)for(t=r-n.jump-1;t>=0;){if(s=o[t],s.open&&s.marker===n.marker&&s.end<0&&s.level===n.level){n.jump=r-t,n.open=!1,s.end=r,s.jump=0;break}t-=s.jump+1}}},{}],41:[function(e,r,t){"use strict";r.exports.tokenize=function(e,r){var t,n,s,o=e.pos,i=e.src.charCodeAt(o);if(r)return!1;if(95!==i&&42!==i)return!1;for(n=e.scanDelims(e.pos,42===i),t=0;t<n.length;t++)s=e.push("text","",0),s.content=String.fromCharCode(i),e.delimiters.push({marker:i,jump:t,token:e.tokens.length-1,level:e.level,end:-1,open:n.can_open,close:n.can_close});return e.pos+=n.length,!0},r.exports.postProcess=function(e){var r,t,n,s,o,i,a=e.delimiters,c=e.delimiters.length;for(r=0;c>r;r++)t=a[r],(95===t.marker||42===t.marker)&&-1!==t.end&&(n=a[t.end],i=c>r+1&&a[r+1].end===t.end-1&&a[r+1].token===t.token+1&&a[t.end-1].token===n.token-1&&a[r+1].marker===t.marker,o=String.fromCharCode(t.marker),s=e.tokens[t.token],s.type=i?"strong_open":"em_open",s.tag=i?"strong":"em",s.nesting=1,s.markup=i?o+o:o,s.content="",s=e.tokens[n.token],s.type=i?"strong_close":"em_close",s.tag=i?"strong":"em",s.nesting=-1,s.markup=i?o+o:o,s.content="",i&&(e.tokens[a[r+1].token].content="",e.tokens[a[t.end-1].token].content="",r++))}},{}],42:[function(e,r,t){"use strict";var n=e("../common/entities"),s=e("../common/utils").has,o=e("../common/utils").isValidEntityCode,i=e("../common/utils").fromCodePoint,a=/^&#((?:x[a-f0-9]{1,8}|[0-9]{1,8}));/i,c=/^&([a-z][a-z0-9]{1,31});/i;r.exports=function(e,r){var t,l,u,p=e.pos,h=e.posMax;if(38!==e.src.charCodeAt(p))return!1;if(h>p+1)if(t=e.src.charCodeAt(p+1),35===t){if(u=e.src.slice(p).match(a))return r||(l="x"===u[1][0].toLowerCase()?parseInt(u[1].slice(1),16):parseInt(u[1],10),e.pending+=i(o(l)?l:65533)),e.pos+=u[0].length,!0}else if(u=e.src.slice(p).match(c),u&&s(n,u[1]))return r||(e.pending+=n[u[1]]),e.pos+=u[0].length,!0;return r||(e.pending+="&"),e.pos++,!0}},{"../common/entities":1,"../common/utils":5}],43:[function(e,r,t){"use strict";for(var n=e("../common/utils").isSpace,s=[],o=0;256>o;o++)s.push(0);"\\!\"#$%&'()*+,./:;<=>?@[]^_`{|}~-".split("").forEach(function(e){s[e.charCodeAt(0)]=1}),r.exports=function(e,r){var t,o=e.pos,i=e.posMax;if(92!==e.src.charCodeAt(o))return!1;if(o++,i>o){if(t=e.src.charCodeAt(o),256>t&&0!==s[t])return r||(e.pending+=e.src[o]),e.pos+=2,!0;if(10===t){for(r||e.push("hardbreak","br",0),o++;i>o&&(t=e.src.charCodeAt(o),n(t));)o++;return e.pos=o,!0}}return r||(e.pending+="\\"),e.pos++,!0}},{"../common/utils":5}],44:[function(e,r,t){"use strict";function n(e){var r=32|e;return r>=97&&122>=r}var s=e("../common/html_re").HTML_TAG_RE;r.exports=function(e,r){var t,o,i,a,c=e.pos;return e.md.options.html?(i=e.posMax,60!==e.src.charCodeAt(c)||c+2>=i?!1:(t=e.src.charCodeAt(c+1),(33===t||63===t||47===t||n(t))&&(o=e.src.slice(c).match(s))?(r||(a=e.push("html_inline","",0),a.content=e.src.slice(c,c+o[0].length)),e.pos+=o[0].length,!0):!1)):!1}},{"../common/html_re":3}],45:[function(e,r,t){"use strict";var n=e("../helpers/parse_link_label"),s=e("../helpers/parse_link_destination"),o=e("../helpers/parse_link_title"),i=e("../common/utils").normalizeReference,a=e("../common/utils").isSpace;r.exports=function(e,r){var t,c,l,u,p,h,f,d,m,g,_,k,b="",v=e.pos,x=e.posMax;if(33!==e.src.charCodeAt(e.pos))return!1;if(91!==e.src.charCodeAt(e.pos+1))return!1;if(p=e.pos+2,u=n(e,e.pos+1,!1),0>u)return!1;if(h=u+1,x>h&&40===e.src.charCodeAt(h)){for(h++;x>h&&(c=e.src.charCodeAt(h),a(c)||10===c);h++);if(h>=x)return!1;for(k=h,d=s(e.src,h,e.posMax),d.ok&&(b=e.md.normalizeLink(d.str),e.md.validateLink(b)?h=d.pos:b=""),k=h;x>h&&(c=e.src.charCodeAt(h),a(c)||10===c);h++);if(d=o(e.src,h,e.posMax),x>h&&k!==h&&d.ok)for(m=d.str,h=d.pos;x>h&&(c=e.src.charCodeAt(h),a(c)||10===c);h++);else m="";if(h>=x||41!==e.src.charCodeAt(h))return e.pos=v,!1;h++}else{if("undefined"==typeof e.env.references)return!1;for(;x>h&&(c=e.src.charCodeAt(h),a(c)||10===c);h++);if(x>h&&91===e.src.charCodeAt(h)?(k=h+1,h=n(e,h),h>=0?l=e.src.slice(k,h++):h=u+1):h=u+1,l||(l=e.src.slice(p,u)),f=e.env.references[i(l)],!f)return e.pos=v,!1;b=f.href,m=f.title}return r||(e.md.inline.parse(e.src.slice(p,u),e.md,e.env,_=[]),g=e.push("image","img",0),g.attrs=t=[["src",b],["alt",""]],g.children=_,m&&t.push(["title",m])),e.pos=h,e.posMax=x,!0}},{"../common/utils":5,"../helpers/parse_link_destination":7,"../helpers/parse_link_label":8,"../helpers/parse_link_title":9}],46:[function(e,r,t){"use strict";var n=e("../helpers/parse_link_label"),s=e("../helpers/parse_link_destination"),o=e("../helpers/parse_link_title"),i=e("../common/utils").normalizeReference,a=e("../common/utils").isSpace;r.exports=function(e,r){var t,c,l,u,p,h,f,d,m,g,_="",k=e.pos,b=e.posMax,v=e.pos;if(91!==e.src.charCodeAt(e.pos))return!1;if(p=e.pos+1,u=n(e,e.pos,!0),0>u)return!1;if(h=u+1,b>h&&40===e.src.charCodeAt(h)){for(h++;b>h&&(c=e.src.charCodeAt(h),a(c)||10===c);h++);if(h>=b)return!1;for(v=h,f=s(e.src,h,e.posMax),f.ok&&(_=e.md.normalizeLink(f.str),e.md.validateLink(_)?h=f.pos:_=""),v=h;b>h&&(c=e.src.charCodeAt(h),a(c)||10===c);h++);if(f=o(e.src,h,e.posMax),b>h&&v!==h&&f.ok)for(m=f.str,h=f.pos;b>h&&(c=e.src.charCodeAt(h),a(c)||10===c);h++);else m="";if(h>=b||41!==e.src.charCodeAt(h))return e.pos=k,!1;h++}else{if("undefined"==typeof e.env.references)return!1;for(;b>h&&(c=e.src.charCodeAt(h),a(c)||10===c);h++);if(b>h&&91===e.src.charCodeAt(h)?(v=h+1,h=n(e,h),h>=0?l=e.src.slice(v,h++):h=u+1):h=u+1,l||(l=e.src.slice(p,u)),d=e.env.references[i(l)],!d)return e.pos=k,!1;_=d.href,m=d.title}return r||(e.pos=p,e.posMax=u,g=e.push("link_open","a",1),g.attrs=t=[["href",_]],m&&t.push(["title",m]),e.md.inline.tokenize(e),g=e.push("link_close","a",-1)),e.pos=h,e.posMax=b,!0}},{"../common/utils":5,"../helpers/parse_link_destination":7,"../helpers/parse_link_label":8,"../helpers/parse_link_title":9}],47:[function(e,r,t){"use strict";r.exports=function(e,r){var t,n,s=e.pos;if(10!==e.src.charCodeAt(s))return!1;for(t=e.pending.length-1,n=e.posMax,r||(t>=0&&32===e.pending.charCodeAt(t)?t>=1&&32===e.pending.charCodeAt(t-1)?(e.pending=e.pending.replace(/ +$/,""),e.push("hardbreak","br",0)):(e.pending=e.pending.slice(0,-1),e.push("softbreak","br",0)):e.push("softbreak","br",0)),s++;n>s&&32===e.src.charCodeAt(s);)s++;return e.pos=s,!0}},{}],48:[function(e,r,t){"use strict";function n(e,r,t,n){this.src=e,this.env=t,this.md=r,this.tokens=n,this.pos=0,this.posMax=this.src.length,this.level=0,this.pending="",this.pendingLevel=0,this.cache={},this.delimiters=[]}var s=e("../token"),o=e("../common/utils").isWhiteSpace,i=e("../common/utils").isPunctChar,a=e("../common/utils").isMdAsciiPunct;n.prototype.pushPending=function(){var e=new s("text","",0);return e.content=this.pending,e.level=this.pendingLevel,this.tokens.push(e),this.pending="",e},n.prototype.push=function(e,r,t){this.pending&&this.pushPending();var n=new s(e,r,t);return 0>t&&this.level--,n.level=this.level,t>0&&this.level++,this.pendingLevel=this.level,this.tokens.push(n),n},n.prototype.scanDelims=function(e,r){var t,n,s,c,l,u,p,h,f,d=e,m=!0,g=!0,_=this.posMax,k=this.src.charCodeAt(e);for(t=e>0?this.src.charCodeAt(e-1):32;_>d&&this.src.charCodeAt(d)===k;)d++;return s=d-e,n=_>d?this.src.charCodeAt(d):32,p=a(t)||i(String.fromCharCode(t)),f=a(n)||i(String.fromCharCode(n)),u=o(t),h=o(n),h?m=!1:f&&(u||p||(m=!1)),u?g=!1:p&&(h||f||(g=!1)),r?(c=m,l=g):(c=m&&(!g||p),l=g&&(!m||f)),{can_open:c,can_close:l,length:s}},n.prototype.Token=s,r.exports=n},{"../common/utils":5,"../token":52}],49:[function(e,r,t){"use strict";r.exports.tokenize=function(e,r){var t,n,s,o,i,a=e.pos,c=e.src.charCodeAt(a);if(r)return!1;if(126!==c)return!1;if(n=e.scanDelims(e.pos,!0),o=n.length,i=String.fromCharCode(c),2>o)return!1;for(o%2&&(s=e.push("text","",0),s.content=i,o--),t=0;o>t;t+=2)s=e.push("text","",0),s.content=i+i,e.delimiters.push({marker:c,jump:t,token:e.tokens.length-1,level:e.level,end:-1,open:n.can_open,close:n.can_close});return e.pos+=n.length,!0},r.exports.postProcess=function(e){var r,t,n,s,o,i=[],a=e.delimiters,c=e.delimiters.length;for(r=0;c>r;r++)n=a[r],126===n.marker&&-1!==n.end&&(s=a[n.end],o=e.tokens[n.token],o.type="s_open",o.tag="s",o.nesting=1,o.markup="~~",o.content="",o=e.tokens[s.token],o.type="s_close",o.tag="s",o.nesting=-1,o.markup="~~",o.content="","text"===e.tokens[s.token-1].type&&"~"===e.tokens[s.token-1].content&&i.push(s.token-1));for(;i.length;){for(r=i.pop(),t=r+1;t<e.tokens.length&&"s_close"===e.tokens[t].type;)t++;t--,r!==t&&(o=e.tokens[t],e.tokens[t]=e.tokens[r],e.tokens[r]=o)}}},{}],50:[function(e,r,t){"use strict";function n(e){switch(e){case 10:case 33:case 35:case 36:case 37:case 38:case 42:case 43:case 45:case 58:case 60:case 61:case 62:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 123:case 125:case 126:return!0;default:return!1}}r.exports=function(e,r){for(var t=e.pos;t<e.posMax&&!n(e.src.charCodeAt(t));)t++;return t===e.pos?!1:(r||(e.pending+=e.src.slice(e.pos,t)),e.pos=t,!0)}},{}],51:[function(e,r,t){"use strict";r.exports=function(e){var r,t,n=0,s=e.tokens,o=e.tokens.length;for(r=t=0;o>r;r++)n+=s[r].nesting,s[r].level=n,"text"===s[r].type&&o>r+1&&"text"===s[r+1].type?s[r+1].content=s[r].content+s[r+1].content:(r!==t&&(s[t]=s[r]),t++);r!==t&&(s.length=t)}},{}],52:[function(e,r,t){"use strict";function n(e,r,t){this.type=e,this.tag=r,this.attrs=null,this.map=null,this.nesting=t,this.level=0,this.children=null,this.content="",this.markup="",this.info="",this.meta=null,this.block=!1,this.hidden=!1}n.prototype.attrIndex=function(e){var r,t,n;if(!this.attrs)return-1;for(r=this.attrs,t=0,n=r.length;n>t;t++)if(r[t][0]===e)return t;return-1},n.prototype.attrPush=function(e){this.attrs?this.attrs.push(e):this.attrs=[e]},r.exports=n},{}],53:[function(r,t,n){(function(r){!function(s){function o(e){throw RangeError(R[e])}function i(e,r){for(var t=e.length,n=[];t--;)n[t]=r(e[t]);return n}function a(e,r){var t=e.split("@"),n="";t.length>1&&(n=t[0]+"@",e=t[1]),e=e.replace(T,".");var s=e.split("."),o=i(s,r).join(".");return n+o}function c(e){for(var r,t,n=[],s=0,o=e.length;o>s;)r=e.charCodeAt(s++),r>=55296&&56319>=r&&o>s?(t=e.charCodeAt(s++),56320==(64512&t)?n.push(((1023&r)<<10)+(1023&t)+65536):(n.push(r),s--)):n.push(r);return n}function l(e){return i(e,function(e){var r="";return e>65535&&(e-=65536,r+=B(e>>>10&1023|55296),e=56320|1023&e),r+=B(e)}).join("")}function u(e){return 10>e-48?e-22:26>e-65?e-65:26>e-97?e-97:C}function p(e,r){return e+22+75*(26>e)-((0!=r)<<5)}function h(e,r,t){var n=0;for(e=t?I(e/D):e>>1,e+=I(e/r);e>M*w>>1;n+=C)e=I(e/M);return I(n+(M+1)*e/(e+q))}function f(e){var r,t,n,s,i,a,c,p,f,d,m=[],g=e.length,_=0,k=S,b=E;for(t=e.lastIndexOf(F),0>t&&(t=0),n=0;t>n;++n)e.charCodeAt(n)>=128&&o("not-basic"),m.push(e.charCodeAt(n));for(s=t>0?t+1:0;g>s;){for(i=_,a=1,c=C;s>=g&&o("invalid-input"),p=u(e.charCodeAt(s++)),(p>=C||p>I((y-_)/a))&&o("overflow"),_+=p*a,f=b>=c?A:c>=b+w?w:c-b,!(f>p);c+=C)d=C-f,a>I(y/d)&&o("overflow"),a*=d;r=m.length+1,b=h(_-i,r,0==i),I(_/r)>y-k&&o("overflow"),k+=I(_/r),_%=r,m.splice(_++,0,k)}return l(m)}function d(e){var r,t,n,s,i,a,l,u,f,d,m,g,_,k,b,v=[];for(e=c(e),g=e.length,r=S,t=0,i=E,a=0;g>a;++a)m=e[a],128>m&&v.push(B(m));for(n=s=v.length,s&&v.push(F);g>n;){for(l=y,a=0;g>a;++a)m=e[a],m>=r&&l>m&&(l=m);for(_=n+1,l-r>I((y-t)/_)&&o("overflow"),t+=(l-r)*_,r=l,a=0;g>a;++a)if(m=e[a],r>m&&++t>y&&o("overflow"),m==r){for(u=t,f=C;d=i>=f?A:f>=i+w?w:f-i,!(d>u);f+=C)b=u-d,k=C-d,v.push(B(p(d+b%k,0))),u=I(b/k);v.push(B(p(u,0))),i=h(t,_,n==s),t=0,++n}++t,++r}return v.join("")}function m(e){return a(e,function(e){return z.test(e)?f(e.slice(4).toLowerCase()):e})}function g(e){return a(e,function(e){return L.test(e)?"xn--"+d(e):e})}var _="object"==typeof n&&n&&!n.nodeType&&n,k="object"==typeof t&&t&&!t.nodeType&&t,b="object"==typeof r&&r;(b.global===b||b.window===b||b.self===b)&&(s=b);var v,x,y=2147483647,C=36,A=1,w=26,q=38,D=700,E=72,S=128,F="-",z=/^xn--/,L=/[^\x20-\x7E]/,T=/[\x2E\u3002\uFF0E\uFF61]/g,R={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},M=C-A,I=Math.floor,B=String.fromCharCode;if(v={version:"1.3.2",ucs2:{decode:c,encode:l},decode:f,encode:d,toASCII:g,toUnicode:m},"function"==typeof e&&"object"==typeof e.amd&&e.amd)e("punycode",function(){return v});else if(_&&k)if(t.exports==_)k.exports=v;else for(x in v)v.hasOwnProperty(x)&&(_[x]=v[x]);else s.punycode=v}(this)}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],54:[function(e,r,t){r.exports={Aacute:"\xc1",aacute:"\xe1",Abreve:"\u0102",abreve:"\u0103",ac:"\u223e",acd:"\u223f",acE:"\u223e\u0333",Acirc:"\xc2",acirc:"\xe2",acute:"\xb4",Acy:"\u0410",acy:"\u0430",AElig:"\xc6",aelig:"\xe6",af:"\u2061",Afr:"\ud835\udd04",afr:"\ud835\udd1e",Agrave:"\xc0",agrave:"\xe0",alefsym:"\u2135",aleph:"\u2135",Alpha:"\u0391",alpha:"\u03b1",Amacr:"\u0100",amacr:"\u0101",amalg:"\u2a3f",amp:"&",AMP:"&",andand:"\u2a55",And:"\u2a53",and:"\u2227",andd:"\u2a5c",andslope:"\u2a58",andv:"\u2a5a",ang:"\u2220",ange:"\u29a4",angle:"\u2220",angmsdaa:"\u29a8",angmsdab:"\u29a9",angmsdac:"\u29aa",angmsdad:"\u29ab",angmsdae:"\u29ac",angmsdaf:"\u29ad",angmsdag:"\u29ae",angmsdah:"\u29af",angmsd:"\u2221",angrt:"\u221f",angrtvb:"\u22be",angrtvbd:"\u299d",angsph:"\u2222",angst:"\xc5",angzarr:"\u237c",Aogon:"\u0104",aogon:"\u0105",Aopf:"\ud835\udd38",aopf:"\ud835\udd52",apacir:"\u2a6f",ap:"\u2248",apE:"\u2a70",ape:"\u224a",apid:"\u224b",apos:"'",ApplyFunction:"\u2061",approx:"\u2248",approxeq:"\u224a",Aring:"\xc5",aring:"\xe5",Ascr:"\ud835\udc9c",ascr:"\ud835\udcb6",Assign:"\u2254",ast:"*",asymp:"\u2248",asympeq:"\u224d",Atilde:"\xc3",atilde:"\xe3",Auml:"\xc4",auml:"\xe4",awconint:"\u2233",awint:"\u2a11",backcong:"\u224c",backepsilon:"\u03f6",backprime:"\u2035",backsim:"\u223d",backsimeq:"\u22cd",Backslash:"\u2216",Barv:"\u2ae7",barvee:"\u22bd",barwed:"\u2305",Barwed:"\u2306",barwedge:"\u2305",bbrk:"\u23b5",bbrktbrk:"\u23b6",bcong:"\u224c",Bcy:"\u0411",bcy:"\u0431",bdquo:"\u201e",becaus:"\u2235",because:"\u2235",Because:"\u2235",bemptyv:"\u29b0",bepsi:"\u03f6",bernou:"\u212c",Bernoullis:"\u212c",Beta:"\u0392",beta:"\u03b2",beth:"\u2136",between:"\u226c",Bfr:"\ud835\udd05",bfr:"\ud835\udd1f",bigcap:"\u22c2",bigcirc:"\u25ef",bigcup:"\u22c3",bigodot:"\u2a00",bigoplus:"\u2a01",bigotimes:"\u2a02",bigsqcup:"\u2a06",bigstar:"\u2605",bigtriangledown:"\u25bd",bigtriangleup:"\u25b3",biguplus:"\u2a04",bigvee:"\u22c1",bigwedge:"\u22c0",bkarow:"\u290d",blacklozenge:"\u29eb",blacksquare:"\u25aa",blacktriangle:"\u25b4",blacktriangledown:"\u25be",blacktriangleleft:"\u25c2",blacktriangleright:"\u25b8",blank:"\u2423",blk12:"\u2592",blk14:"\u2591",blk34:"\u2593",block:"\u2588",bne:"=\u20e5",bnequiv:"\u2261\u20e5",bNot:"\u2aed",bnot:"\u2310",Bopf:"\ud835\udd39",bopf:"\ud835\udd53",bot:"\u22a5",bottom:"\u22a5",bowtie:"\u22c8",boxbox:"\u29c9",boxdl:"\u2510",boxdL:"\u2555",boxDl:"\u2556",boxDL:"\u2557",boxdr:"\u250c",boxdR:"\u2552",boxDr:"\u2553",boxDR:"\u2554",boxh:"\u2500",boxH:"\u2550",boxhd:"\u252c",boxHd:"\u2564",boxhD:"\u2565",boxHD:"\u2566",boxhu:"\u2534",boxHu:"\u2567",boxhU:"\u2568",boxHU:"\u2569",boxminus:"\u229f",boxplus:"\u229e",boxtimes:"\u22a0",boxul:"\u2518",boxuL:"\u255b",boxUl:"\u255c",boxUL:"\u255d",boxur:"\u2514",boxuR:"\u2558",boxUr:"\u2559",boxUR:"\u255a",boxv:"\u2502",boxV:"\u2551",boxvh:"\u253c",boxvH:"\u256a",boxVh:"\u256b",boxVH:"\u256c",boxvl:"\u2524",boxvL:"\u2561",boxVl:"\u2562",boxVL:"\u2563",boxvr:"\u251c",boxvR:"\u255e",boxVr:"\u255f",boxVR:"\u2560",bprime:"\u2035",breve:"\u02d8",Breve:"\u02d8",brvbar:"\xa6",bscr:"\ud835\udcb7",Bscr:"\u212c",bsemi:"\u204f",bsim:"\u223d",bsime:"\u22cd",bsolb:"\u29c5",bsol:"\\",bsolhsub:"\u27c8",bull:"\u2022",bullet:"\u2022",bump:"\u224e",bumpE:"\u2aae",bumpe:"\u224f",Bumpeq:"\u224e",bumpeq:"\u224f",Cacute:"\u0106",cacute:"\u0107",capand:"\u2a44",capbrcup:"\u2a49",capcap:"\u2a4b",cap:"\u2229",Cap:"\u22d2",capcup:"\u2a47",capdot:"\u2a40",CapitalDifferentialD:"\u2145",caps:"\u2229\ufe00",caret:"\u2041",caron:"\u02c7",Cayleys:"\u212d",ccaps:"\u2a4d",Ccaron:"\u010c",ccaron:"\u010d",Ccedil:"\xc7",ccedil:"\xe7",Ccirc:"\u0108",ccirc:"\u0109",Cconint:"\u2230",ccups:"\u2a4c",ccupssm:"\u2a50",Cdot:"\u010a",cdot:"\u010b",cedil:"\xb8",Cedilla:"\xb8",cemptyv:"\u29b2",cent:"\xa2",centerdot:"\xb7",CenterDot:"\xb7",cfr:"\ud835\udd20",Cfr:"\u212d",CHcy:"\u0427",chcy:"\u0447",check:"\u2713",checkmark:"\u2713",Chi:"\u03a7",chi:"\u03c7",circ:"\u02c6",circeq:"\u2257",circlearrowleft:"\u21ba",circlearrowright:"\u21bb",circledast:"\u229b",circledcirc:"\u229a",circleddash:"\u229d",CircleDot:"\u2299",circledR:"\xae",circledS:"\u24c8",CircleMinus:"\u2296",CirclePlus:"\u2295",CircleTimes:"\u2297",cir:"\u25cb",cirE:"\u29c3",cire:"\u2257",cirfnint:"\u2a10",cirmid:"\u2aef",cirscir:"\u29c2",ClockwiseContourIntegral:"\u2232",CloseCurlyDoubleQuote:"\u201d",CloseCurlyQuote:"\u2019",clubs:"\u2663",clubsuit:"\u2663",colon:":",Colon:"\u2237",Colone:"\u2a74",colone:"\u2254",coloneq:"\u2254",comma:",",commat:"@",comp:"\u2201",compfn:"\u2218",complement:"\u2201",complexes:"\u2102",cong:"\u2245",congdot:"\u2a6d",Congruent:"\u2261",conint:"\u222e",Conint:"\u222f",ContourIntegral:"\u222e",copf:"\ud835\udd54",Copf:"\u2102",coprod:"\u2210",Coproduct:"\u2210",copy:"\xa9",COPY:"\xa9",copysr:"\u2117",CounterClockwiseContourIntegral:"\u2233",crarr:"\u21b5",cross:"\u2717",Cross:"\u2a2f",Cscr:"\ud835\udc9e",cscr:"\ud835\udcb8",csub:"\u2acf",csube:"\u2ad1",csup:"\u2ad0",csupe:"\u2ad2",ctdot:"\u22ef",cudarrl:"\u2938",cudarrr:"\u2935",cuepr:"\u22de",cuesc:"\u22df",cularr:"\u21b6",cularrp:"\u293d",cupbrcap:"\u2a48",cupcap:"\u2a46",CupCap:"\u224d",cup:"\u222a",Cup:"\u22d3",cupcup:"\u2a4a",cupdot:"\u228d",cupor:"\u2a45",cups:"\u222a\ufe00",curarr:"\u21b7",curarrm:"\u293c",curlyeqprec:"\u22de",curlyeqsucc:"\u22df",curlyvee:"\u22ce",curlywedge:"\u22cf",curren:"\xa4",curvearrowleft:"\u21b6",curvearrowright:"\u21b7",cuvee:"\u22ce",cuwed:"\u22cf",cwconint:"\u2232",cwint:"\u2231",cylcty:"\u232d",dagger:"\u2020",Dagger:"\u2021",daleth:"\u2138",darr:"\u2193",Darr:"\u21a1",dArr:"\u21d3",dash:"\u2010",Dashv:"\u2ae4",dashv:"\u22a3",dbkarow:"\u290f",dblac:"\u02dd",Dcaron:"\u010e",dcaron:"\u010f",Dcy:"\u0414",dcy:"\u0434",ddagger:"\u2021",ddarr:"\u21ca",DD:"\u2145",dd:"\u2146",DDotrahd:"\u2911",ddotseq:"\u2a77",deg:"\xb0",Del:"\u2207",Delta:"\u0394",delta:"\u03b4",demptyv:"\u29b1",dfisht:"\u297f",Dfr:"\ud835\udd07",dfr:"\ud835\udd21",dHar:"\u2965",dharl:"\u21c3",dharr:"\u21c2",DiacriticalAcute:"\xb4",DiacriticalDot:"\u02d9",DiacriticalDoubleAcute:"\u02dd",DiacriticalGrave:"`",DiacriticalTilde:"\u02dc",diam:"\u22c4",diamond:"\u22c4",Diamond:"\u22c4",diamondsuit:"\u2666",diams:"\u2666",die:"\xa8",DifferentialD:"\u2146",digamma:"\u03dd",disin:"\u22f2",div:"\xf7",divide:"\xf7",divideontimes:"\u22c7",divonx:"\u22c7",DJcy:"\u0402",djcy:"\u0452",dlcorn:"\u231e",dlcrop:"\u230d",dollar:"$",Dopf:"\ud835\udd3b",dopf:"\ud835\udd55",Dot:"\xa8",dot:"\u02d9",DotDot:"\u20dc",doteq:"\u2250",doteqdot:"\u2251",DotEqual:"\u2250",dotminus:"\u2238",dotplus:"\u2214",dotsquare:"\u22a1",doublebarwedge:"\u2306",DoubleContourIntegral:"\u222f",DoubleDot:"\xa8",DoubleDownArrow:"\u21d3",DoubleLeftArrow:"\u21d0",DoubleLeftRightArrow:"\u21d4",DoubleLeftTee:"\u2ae4",DoubleLongLeftArrow:"\u27f8",DoubleLongLeftRightArrow:"\u27fa",DoubleLongRightArrow:"\u27f9",DoubleRightArrow:"\u21d2",DoubleRightTee:"\u22a8",DoubleUpArrow:"\u21d1",DoubleUpDownArrow:"\u21d5",DoubleVerticalBar:"\u2225",DownArrowBar:"\u2913",downarrow:"\u2193",DownArrow:"\u2193",Downarrow:"\u21d3",DownArrowUpArrow:"\u21f5",DownBreve:"\u0311",downdownarrows:"\u21ca",downharpoonleft:"\u21c3",downharpoonright:"\u21c2",DownLeftRightVector:"\u2950",DownLeftTeeVector:"\u295e",DownLeftVectorBar:"\u2956",DownLeftVector:"\u21bd",DownRightTeeVector:"\u295f",DownRightVectorBar:"\u2957",DownRightVector:"\u21c1",DownTeeArrow:"\u21a7",DownTee:"\u22a4",drbkarow:"\u2910",drcorn:"\u231f",drcrop:"\u230c",Dscr:"\ud835\udc9f",dscr:"\ud835\udcb9",DScy:"\u0405",dscy:"\u0455",dsol:"\u29f6",Dstrok:"\u0110",dstrok:"\u0111",dtdot:"\u22f1",dtri:"\u25bf",dtrif:"\u25be",duarr:"\u21f5",duhar:"\u296f",dwangle:"\u29a6",DZcy:"\u040f",dzcy:"\u045f",dzigrarr:"\u27ff",Eacute:"\xc9",eacute:"\xe9",easter:"\u2a6e",Ecaron:"\u011a",ecaron:"\u011b",Ecirc:"\xca",ecirc:"\xea",ecir:"\u2256",ecolon:"\u2255",Ecy:"\u042d",ecy:"\u044d",eDDot:"\u2a77",Edot:"\u0116",edot:"\u0117",eDot:"\u2251",ee:"\u2147",efDot:"\u2252",Efr:"\ud835\udd08",efr:"\ud835\udd22",eg:"\u2a9a",Egrave:"\xc8",egrave:"\xe8",egs:"\u2a96",egsdot:"\u2a98",el:"\u2a99",Element:"\u2208",elinters:"\u23e7",ell:"\u2113",els:"\u2a95",elsdot:"\u2a97",Emacr:"\u0112",emacr:"\u0113",empty:"\u2205",emptyset:"\u2205",EmptySmallSquare:"\u25fb",emptyv:"\u2205",EmptyVerySmallSquare:"\u25ab",emsp13:"\u2004",emsp14:"\u2005",emsp:"\u2003",ENG:"\u014a",eng:"\u014b",ensp:"\u2002",Eogon:"\u0118",eogon:"\u0119",Eopf:"\ud835\udd3c",eopf:"\ud835\udd56",epar:"\u22d5",eparsl:"\u29e3",eplus:"\u2a71",epsi:"\u03b5",Epsilon:"\u0395",epsilon:"\u03b5",epsiv:"\u03f5",eqcirc:"\u2256",eqcolon:"\u2255",eqsim:"\u2242",eqslantgtr:"\u2a96",eqslantless:"\u2a95",Equal:"\u2a75",equals:"=",EqualTilde:"\u2242",equest:"\u225f",Equilibrium:"\u21cc",equiv:"\u2261",equivDD:"\u2a78",eqvparsl:"\u29e5",erarr:"\u2971",erDot:"\u2253",escr:"\u212f",Escr:"\u2130",esdot:"\u2250",Esim:"\u2a73",esim:"\u2242",Eta:"\u0397",eta:"\u03b7",ETH:"\xd0",eth:"\xf0",Euml:"\xcb",euml:"\xeb",euro:"\u20ac",excl:"!",exist:"\u2203",Exists:"\u2203",expectation:"\u2130",exponentiale:"\u2147",ExponentialE:"\u2147",fallingdotseq:"\u2252",Fcy:"\u0424",fcy:"\u0444",female:"\u2640",ffilig:"\ufb03",fflig:"\ufb00",ffllig:"\ufb04",Ffr:"\ud835\udd09",ffr:"\ud835\udd23",filig:"\ufb01",FilledSmallSquare:"\u25fc",FilledVerySmallSquare:"\u25aa",fjlig:"fj",flat:"\u266d",fllig:"\ufb02",fltns:"\u25b1",fnof:"\u0192",Fopf:"\ud835\udd3d",fopf:"\ud835\udd57",forall:"\u2200",ForAll:"\u2200",fork:"\u22d4",forkv:"\u2ad9",Fouriertrf:"\u2131",fpartint:"\u2a0d",frac12:"\xbd",frac13:"\u2153",frac14:"\xbc",frac15:"\u2155",frac16:"\u2159",frac18:"\u215b",frac23:"\u2154",frac25:"\u2156",frac34:"\xbe",frac35:"\u2157",frac38:"\u215c",frac45:"\u2158",frac56:"\u215a",frac58:"\u215d",frac78:"\u215e",frasl:"\u2044",frown:"\u2322",fscr:"\ud835\udcbb",Fscr:"\u2131",gacute:"\u01f5",Gamma:"\u0393",gamma:"\u03b3",Gammad:"\u03dc",gammad:"\u03dd",gap:"\u2a86",Gbreve:"\u011e",gbreve:"\u011f",Gcedil:"\u0122",Gcirc:"\u011c",gcirc:"\u011d",Gcy:"\u0413",gcy:"\u0433",Gdot:"\u0120",gdot:"\u0121",ge:"\u2265",gE:"\u2267",gEl:"\u2a8c",gel:"\u22db",geq:"\u2265",geqq:"\u2267",geqslant:"\u2a7e",gescc:"\u2aa9",ges:"\u2a7e",gesdot:"\u2a80",gesdoto:"\u2a82",gesdotol:"\u2a84",gesl:"\u22db\ufe00",gesles:"\u2a94",Gfr:"\ud835\udd0a",gfr:"\ud835\udd24",gg:"\u226b",Gg:"\u22d9",ggg:"\u22d9",gimel:"\u2137",GJcy:"\u0403",gjcy:"\u0453",gla:"\u2aa5",gl:"\u2277",glE:"\u2a92",glj:"\u2aa4",gnap:"\u2a8a",gnapprox:"\u2a8a",gne:"\u2a88",gnE:"\u2269",gneq:"\u2a88",gneqq:"\u2269",gnsim:"\u22e7",Gopf:"\ud835\udd3e",gopf:"\ud835\udd58",grave:"`",GreaterEqual:"\u2265",GreaterEqualLess:"\u22db",GreaterFullEqual:"\u2267",GreaterGreater:"\u2aa2",GreaterLess:"\u2277",GreaterSlantEqual:"\u2a7e",GreaterTilde:"\u2273",Gscr:"\ud835\udca2",gscr:"\u210a",gsim:"\u2273",gsime:"\u2a8e",gsiml:"\u2a90",gtcc:"\u2aa7",gtcir:"\u2a7a",gt:">",GT:">",Gt:"\u226b",gtdot:"\u22d7",gtlPar:"\u2995",gtquest:"\u2a7c",gtrapprox:"\u2a86",gtrarr:"\u2978",gtrdot:"\u22d7",gtreqless:"\u22db",gtreqqless:"\u2a8c",gtrless:"\u2277",gtrsim:"\u2273",gvertneqq:"\u2269\ufe00",gvnE:"\u2269\ufe00",Hacek:"\u02c7",
	hairsp:"\u200a",half:"\xbd",hamilt:"\u210b",HARDcy:"\u042a",hardcy:"\u044a",harrcir:"\u2948",harr:"\u2194",hArr:"\u21d4",harrw:"\u21ad",Hat:"^",hbar:"\u210f",Hcirc:"\u0124",hcirc:"\u0125",hearts:"\u2665",heartsuit:"\u2665",hellip:"\u2026",hercon:"\u22b9",hfr:"\ud835\udd25",Hfr:"\u210c",HilbertSpace:"\u210b",hksearow:"\u2925",hkswarow:"\u2926",hoarr:"\u21ff",homtht:"\u223b",hookleftarrow:"\u21a9",hookrightarrow:"\u21aa",hopf:"\ud835\udd59",Hopf:"\u210d",horbar:"\u2015",HorizontalLine:"\u2500",hscr:"\ud835\udcbd",Hscr:"\u210b",hslash:"\u210f",Hstrok:"\u0126",hstrok:"\u0127",HumpDownHump:"\u224e",HumpEqual:"\u224f",hybull:"\u2043",hyphen:"\u2010",Iacute:"\xcd",iacute:"\xed",ic:"\u2063",Icirc:"\xce",icirc:"\xee",Icy:"\u0418",icy:"\u0438",Idot:"\u0130",IEcy:"\u0415",iecy:"\u0435",iexcl:"\xa1",iff:"\u21d4",ifr:"\ud835\udd26",Ifr:"\u2111",Igrave:"\xcc",igrave:"\xec",ii:"\u2148",iiiint:"\u2a0c",iiint:"\u222d",iinfin:"\u29dc",iiota:"\u2129",IJlig:"\u0132",ijlig:"\u0133",Imacr:"\u012a",imacr:"\u012b",image:"\u2111",ImaginaryI:"\u2148",imagline:"\u2110",imagpart:"\u2111",imath:"\u0131",Im:"\u2111",imof:"\u22b7",imped:"\u01b5",Implies:"\u21d2",incare:"\u2105","in":"\u2208",infin:"\u221e",infintie:"\u29dd",inodot:"\u0131",intcal:"\u22ba","int":"\u222b",Int:"\u222c",integers:"\u2124",Integral:"\u222b",intercal:"\u22ba",Intersection:"\u22c2",intlarhk:"\u2a17",intprod:"\u2a3c",InvisibleComma:"\u2063",InvisibleTimes:"\u2062",IOcy:"\u0401",iocy:"\u0451",Iogon:"\u012e",iogon:"\u012f",Iopf:"\ud835\udd40",iopf:"\ud835\udd5a",Iota:"\u0399",iota:"\u03b9",iprod:"\u2a3c",iquest:"\xbf",iscr:"\ud835\udcbe",Iscr:"\u2110",isin:"\u2208",isindot:"\u22f5",isinE:"\u22f9",isins:"\u22f4",isinsv:"\u22f3",isinv:"\u2208",it:"\u2062",Itilde:"\u0128",itilde:"\u0129",Iukcy:"\u0406",iukcy:"\u0456",Iuml:"\xcf",iuml:"\xef",Jcirc:"\u0134",jcirc:"\u0135",Jcy:"\u0419",jcy:"\u0439",Jfr:"\ud835\udd0d",jfr:"\ud835\udd27",jmath:"\u0237",Jopf:"\ud835\udd41",jopf:"\ud835\udd5b",Jscr:"\ud835\udca5",jscr:"\ud835\udcbf",Jsercy:"\u0408",jsercy:"\u0458",Jukcy:"\u0404",jukcy:"\u0454",Kappa:"\u039a",kappa:"\u03ba",kappav:"\u03f0",Kcedil:"\u0136",kcedil:"\u0137",Kcy:"\u041a",kcy:"\u043a",Kfr:"\ud835\udd0e",kfr:"\ud835\udd28",kgreen:"\u0138",KHcy:"\u0425",khcy:"\u0445",KJcy:"\u040c",kjcy:"\u045c",Kopf:"\ud835\udd42",kopf:"\ud835\udd5c",Kscr:"\ud835\udca6",kscr:"\ud835\udcc0",lAarr:"\u21da",Lacute:"\u0139",lacute:"\u013a",laemptyv:"\u29b4",lagran:"\u2112",Lambda:"\u039b",lambda:"\u03bb",lang:"\u27e8",Lang:"\u27ea",langd:"\u2991",langle:"\u27e8",lap:"\u2a85",Laplacetrf:"\u2112",laquo:"\xab",larrb:"\u21e4",larrbfs:"\u291f",larr:"\u2190",Larr:"\u219e",lArr:"\u21d0",larrfs:"\u291d",larrhk:"\u21a9",larrlp:"\u21ab",larrpl:"\u2939",larrsim:"\u2973",larrtl:"\u21a2",latail:"\u2919",lAtail:"\u291b",lat:"\u2aab",late:"\u2aad",lates:"\u2aad\ufe00",lbarr:"\u290c",lBarr:"\u290e",lbbrk:"\u2772",lbrace:"{",lbrack:"[",lbrke:"\u298b",lbrksld:"\u298f",lbrkslu:"\u298d",Lcaron:"\u013d",lcaron:"\u013e",Lcedil:"\u013b",lcedil:"\u013c",lceil:"\u2308",lcub:"{",Lcy:"\u041b",lcy:"\u043b",ldca:"\u2936",ldquo:"\u201c",ldquor:"\u201e",ldrdhar:"\u2967",ldrushar:"\u294b",ldsh:"\u21b2",le:"\u2264",lE:"\u2266",LeftAngleBracket:"\u27e8",LeftArrowBar:"\u21e4",leftarrow:"\u2190",LeftArrow:"\u2190",Leftarrow:"\u21d0",LeftArrowRightArrow:"\u21c6",leftarrowtail:"\u21a2",LeftCeiling:"\u2308",LeftDoubleBracket:"\u27e6",LeftDownTeeVector:"\u2961",LeftDownVectorBar:"\u2959",LeftDownVector:"\u21c3",LeftFloor:"\u230a",leftharpoondown:"\u21bd",leftharpoonup:"\u21bc",leftleftarrows:"\u21c7",leftrightarrow:"\u2194",LeftRightArrow:"\u2194",Leftrightarrow:"\u21d4",leftrightarrows:"\u21c6",leftrightharpoons:"\u21cb",leftrightsquigarrow:"\u21ad",LeftRightVector:"\u294e",LeftTeeArrow:"\u21a4",LeftTee:"\u22a3",LeftTeeVector:"\u295a",leftthreetimes:"\u22cb",LeftTriangleBar:"\u29cf",LeftTriangle:"\u22b2",LeftTriangleEqual:"\u22b4",LeftUpDownVector:"\u2951",LeftUpTeeVector:"\u2960",LeftUpVectorBar:"\u2958",LeftUpVector:"\u21bf",LeftVectorBar:"\u2952",LeftVector:"\u21bc",lEg:"\u2a8b",leg:"\u22da",leq:"\u2264",leqq:"\u2266",leqslant:"\u2a7d",lescc:"\u2aa8",les:"\u2a7d",lesdot:"\u2a7f",lesdoto:"\u2a81",lesdotor:"\u2a83",lesg:"\u22da\ufe00",lesges:"\u2a93",lessapprox:"\u2a85",lessdot:"\u22d6",lesseqgtr:"\u22da",lesseqqgtr:"\u2a8b",LessEqualGreater:"\u22da",LessFullEqual:"\u2266",LessGreater:"\u2276",lessgtr:"\u2276",LessLess:"\u2aa1",lesssim:"\u2272",LessSlantEqual:"\u2a7d",LessTilde:"\u2272",lfisht:"\u297c",lfloor:"\u230a",Lfr:"\ud835\udd0f",lfr:"\ud835\udd29",lg:"\u2276",lgE:"\u2a91",lHar:"\u2962",lhard:"\u21bd",lharu:"\u21bc",lharul:"\u296a",lhblk:"\u2584",LJcy:"\u0409",ljcy:"\u0459",llarr:"\u21c7",ll:"\u226a",Ll:"\u22d8",llcorner:"\u231e",Lleftarrow:"\u21da",llhard:"\u296b",lltri:"\u25fa",Lmidot:"\u013f",lmidot:"\u0140",lmoustache:"\u23b0",lmoust:"\u23b0",lnap:"\u2a89",lnapprox:"\u2a89",lne:"\u2a87",lnE:"\u2268",lneq:"\u2a87",lneqq:"\u2268",lnsim:"\u22e6",loang:"\u27ec",loarr:"\u21fd",lobrk:"\u27e6",longleftarrow:"\u27f5",LongLeftArrow:"\u27f5",Longleftarrow:"\u27f8",longleftrightarrow:"\u27f7",LongLeftRightArrow:"\u27f7",Longleftrightarrow:"\u27fa",longmapsto:"\u27fc",longrightarrow:"\u27f6",LongRightArrow:"\u27f6",Longrightarrow:"\u27f9",looparrowleft:"\u21ab",looparrowright:"\u21ac",lopar:"\u2985",Lopf:"\ud835\udd43",lopf:"\ud835\udd5d",loplus:"\u2a2d",lotimes:"\u2a34",lowast:"\u2217",lowbar:"_",LowerLeftArrow:"\u2199",LowerRightArrow:"\u2198",loz:"\u25ca",lozenge:"\u25ca",lozf:"\u29eb",lpar:"(",lparlt:"\u2993",lrarr:"\u21c6",lrcorner:"\u231f",lrhar:"\u21cb",lrhard:"\u296d",lrm:"\u200e",lrtri:"\u22bf",lsaquo:"\u2039",lscr:"\ud835\udcc1",Lscr:"\u2112",lsh:"\u21b0",Lsh:"\u21b0",lsim:"\u2272",lsime:"\u2a8d",lsimg:"\u2a8f",lsqb:"[",lsquo:"\u2018",lsquor:"\u201a",Lstrok:"\u0141",lstrok:"\u0142",ltcc:"\u2aa6",ltcir:"\u2a79",lt:"<",LT:"<",Lt:"\u226a",ltdot:"\u22d6",lthree:"\u22cb",ltimes:"\u22c9",ltlarr:"\u2976",ltquest:"\u2a7b",ltri:"\u25c3",ltrie:"\u22b4",ltrif:"\u25c2",ltrPar:"\u2996",lurdshar:"\u294a",luruhar:"\u2966",lvertneqq:"\u2268\ufe00",lvnE:"\u2268\ufe00",macr:"\xaf",male:"\u2642",malt:"\u2720",maltese:"\u2720",Map:"\u2905",map:"\u21a6",mapsto:"\u21a6",mapstodown:"\u21a7",mapstoleft:"\u21a4",mapstoup:"\u21a5",marker:"\u25ae",mcomma:"\u2a29",Mcy:"\u041c",mcy:"\u043c",mdash:"\u2014",mDDot:"\u223a",measuredangle:"\u2221",MediumSpace:"\u205f",Mellintrf:"\u2133",Mfr:"\ud835\udd10",mfr:"\ud835\udd2a",mho:"\u2127",micro:"\xb5",midast:"*",midcir:"\u2af0",mid:"\u2223",middot:"\xb7",minusb:"\u229f",minus:"\u2212",minusd:"\u2238",minusdu:"\u2a2a",MinusPlus:"\u2213",mlcp:"\u2adb",mldr:"\u2026",mnplus:"\u2213",models:"\u22a7",Mopf:"\ud835\udd44",mopf:"\ud835\udd5e",mp:"\u2213",mscr:"\ud835\udcc2",Mscr:"\u2133",mstpos:"\u223e",Mu:"\u039c",mu:"\u03bc",multimap:"\u22b8",mumap:"\u22b8",nabla:"\u2207",Nacute:"\u0143",nacute:"\u0144",nang:"\u2220\u20d2",nap:"\u2249",napE:"\u2a70\u0338",napid:"\u224b\u0338",napos:"\u0149",napprox:"\u2249",natural:"\u266e",naturals:"\u2115",natur:"\u266e",nbsp:"\xa0",nbump:"\u224e\u0338",nbumpe:"\u224f\u0338",ncap:"\u2a43",Ncaron:"\u0147",ncaron:"\u0148",Ncedil:"\u0145",ncedil:"\u0146",ncong:"\u2247",ncongdot:"\u2a6d\u0338",ncup:"\u2a42",Ncy:"\u041d",ncy:"\u043d",ndash:"\u2013",nearhk:"\u2924",nearr:"\u2197",neArr:"\u21d7",nearrow:"\u2197",ne:"\u2260",nedot:"\u2250\u0338",NegativeMediumSpace:"\u200b",NegativeThickSpace:"\u200b",NegativeThinSpace:"\u200b",NegativeVeryThinSpace:"\u200b",nequiv:"\u2262",nesear:"\u2928",nesim:"\u2242\u0338",NestedGreaterGreater:"\u226b",NestedLessLess:"\u226a",NewLine:"\n",nexist:"\u2204",nexists:"\u2204",Nfr:"\ud835\udd11",nfr:"\ud835\udd2b",ngE:"\u2267\u0338",nge:"\u2271",ngeq:"\u2271",ngeqq:"\u2267\u0338",ngeqslant:"\u2a7e\u0338",nges:"\u2a7e\u0338",nGg:"\u22d9\u0338",ngsim:"\u2275",nGt:"\u226b\u20d2",ngt:"\u226f",ngtr:"\u226f",nGtv:"\u226b\u0338",nharr:"\u21ae",nhArr:"\u21ce",nhpar:"\u2af2",ni:"\u220b",nis:"\u22fc",nisd:"\u22fa",niv:"\u220b",NJcy:"\u040a",njcy:"\u045a",nlarr:"\u219a",nlArr:"\u21cd",nldr:"\u2025",nlE:"\u2266\u0338",nle:"\u2270",nleftarrow:"\u219a",nLeftarrow:"\u21cd",nleftrightarrow:"\u21ae",nLeftrightarrow:"\u21ce",nleq:"\u2270",nleqq:"\u2266\u0338",nleqslant:"\u2a7d\u0338",nles:"\u2a7d\u0338",nless:"\u226e",nLl:"\u22d8\u0338",nlsim:"\u2274",nLt:"\u226a\u20d2",nlt:"\u226e",nltri:"\u22ea",nltrie:"\u22ec",nLtv:"\u226a\u0338",nmid:"\u2224",NoBreak:"\u2060",NonBreakingSpace:"\xa0",nopf:"\ud835\udd5f",Nopf:"\u2115",Not:"\u2aec",not:"\xac",NotCongruent:"\u2262",NotCupCap:"\u226d",NotDoubleVerticalBar:"\u2226",NotElement:"\u2209",NotEqual:"\u2260",NotEqualTilde:"\u2242\u0338",NotExists:"\u2204",NotGreater:"\u226f",NotGreaterEqual:"\u2271",NotGreaterFullEqual:"\u2267\u0338",NotGreaterGreater:"\u226b\u0338",NotGreaterLess:"\u2279",NotGreaterSlantEqual:"\u2a7e\u0338",NotGreaterTilde:"\u2275",NotHumpDownHump:"\u224e\u0338",NotHumpEqual:"\u224f\u0338",notin:"\u2209",notindot:"\u22f5\u0338",notinE:"\u22f9\u0338",notinva:"\u2209",notinvb:"\u22f7",notinvc:"\u22f6",NotLeftTriangleBar:"\u29cf\u0338",NotLeftTriangle:"\u22ea",NotLeftTriangleEqual:"\u22ec",NotLess:"\u226e",NotLessEqual:"\u2270",NotLessGreater:"\u2278",NotLessLess:"\u226a\u0338",NotLessSlantEqual:"\u2a7d\u0338",NotLessTilde:"\u2274",NotNestedGreaterGreater:"\u2aa2\u0338",NotNestedLessLess:"\u2aa1\u0338",notni:"\u220c",notniva:"\u220c",notnivb:"\u22fe",notnivc:"\u22fd",NotPrecedes:"\u2280",NotPrecedesEqual:"\u2aaf\u0338",NotPrecedesSlantEqual:"\u22e0",NotReverseElement:"\u220c",NotRightTriangleBar:"\u29d0\u0338",NotRightTriangle:"\u22eb",NotRightTriangleEqual:"\u22ed",NotSquareSubset:"\u228f\u0338",NotSquareSubsetEqual:"\u22e2",NotSquareSuperset:"\u2290\u0338",NotSquareSupersetEqual:"\u22e3",NotSubset:"\u2282\u20d2",NotSubsetEqual:"\u2288",NotSucceeds:"\u2281",NotSucceedsEqual:"\u2ab0\u0338",NotSucceedsSlantEqual:"\u22e1",NotSucceedsTilde:"\u227f\u0338",NotSuperset:"\u2283\u20d2",NotSupersetEqual:"\u2289",NotTilde:"\u2241",NotTildeEqual:"\u2244",NotTildeFullEqual:"\u2247",NotTildeTilde:"\u2249",NotVerticalBar:"\u2224",nparallel:"\u2226",npar:"\u2226",nparsl:"\u2afd\u20e5",npart:"\u2202\u0338",npolint:"\u2a14",npr:"\u2280",nprcue:"\u22e0",nprec:"\u2280",npreceq:"\u2aaf\u0338",npre:"\u2aaf\u0338",nrarrc:"\u2933\u0338",nrarr:"\u219b",nrArr:"\u21cf",nrarrw:"\u219d\u0338",nrightarrow:"\u219b",nRightarrow:"\u21cf",nrtri:"\u22eb",nrtrie:"\u22ed",nsc:"\u2281",nsccue:"\u22e1",nsce:"\u2ab0\u0338",Nscr:"\ud835\udca9",nscr:"\ud835\udcc3",nshortmid:"\u2224",nshortparallel:"\u2226",nsim:"\u2241",nsime:"\u2244",nsimeq:"\u2244",nsmid:"\u2224",nspar:"\u2226",nsqsube:"\u22e2",nsqsupe:"\u22e3",nsub:"\u2284",nsubE:"\u2ac5\u0338",nsube:"\u2288",nsubset:"\u2282\u20d2",nsubseteq:"\u2288",nsubseteqq:"\u2ac5\u0338",nsucc:"\u2281",nsucceq:"\u2ab0\u0338",nsup:"\u2285",nsupE:"\u2ac6\u0338",nsupe:"\u2289",nsupset:"\u2283\u20d2",nsupseteq:"\u2289",nsupseteqq:"\u2ac6\u0338",ntgl:"\u2279",Ntilde:"\xd1",ntilde:"\xf1",ntlg:"\u2278",ntriangleleft:"\u22ea",ntrianglelefteq:"\u22ec",ntriangleright:"\u22eb",ntrianglerighteq:"\u22ed",Nu:"\u039d",nu:"\u03bd",num:"#",numero:"\u2116",numsp:"\u2007",nvap:"\u224d\u20d2",nvdash:"\u22ac",nvDash:"\u22ad",nVdash:"\u22ae",nVDash:"\u22af",nvge:"\u2265\u20d2",nvgt:">\u20d2",nvHarr:"\u2904",nvinfin:"\u29de",nvlArr:"\u2902",nvle:"\u2264\u20d2",nvlt:"<\u20d2",nvltrie:"\u22b4\u20d2",nvrArr:"\u2903",nvrtrie:"\u22b5\u20d2",nvsim:"\u223c\u20d2",nwarhk:"\u2923",nwarr:"\u2196",nwArr:"\u21d6",nwarrow:"\u2196",nwnear:"\u2927",Oacute:"\xd3",oacute:"\xf3",oast:"\u229b",Ocirc:"\xd4",ocirc:"\xf4",ocir:"\u229a",Ocy:"\u041e",ocy:"\u043e",odash:"\u229d",Odblac:"\u0150",odblac:"\u0151",odiv:"\u2a38",odot:"\u2299",odsold:"\u29bc",OElig:"\u0152",oelig:"\u0153",ofcir:"\u29bf",Ofr:"\ud835\udd12",ofr:"\ud835\udd2c",ogon:"\u02db",Ograve:"\xd2",ograve:"\xf2",ogt:"\u29c1",ohbar:"\u29b5",ohm:"\u03a9",oint:"\u222e",olarr:"\u21ba",olcir:"\u29be",olcross:"\u29bb",oline:"\u203e",olt:"\u29c0",Omacr:"\u014c",omacr:"\u014d",Omega:"\u03a9",omega:"\u03c9",Omicron:"\u039f",omicron:"\u03bf",omid:"\u29b6",ominus:"\u2296",Oopf:"\ud835\udd46",oopf:"\ud835\udd60",opar:"\u29b7",OpenCurlyDoubleQuote:"\u201c",OpenCurlyQuote:"\u2018",operp:"\u29b9",oplus:"\u2295",orarr:"\u21bb",Or:"\u2a54",or:"\u2228",ord:"\u2a5d",order:"\u2134",orderof:"\u2134",ordf:"\xaa",ordm:"\xba",origof:"\u22b6",oror:"\u2a56",orslope:"\u2a57",orv:"\u2a5b",oS:"\u24c8",Oscr:"\ud835\udcaa",oscr:"\u2134",Oslash:"\xd8",oslash:"\xf8",osol:"\u2298",Otilde:"\xd5",otilde:"\xf5",otimesas:"\u2a36",Otimes:"\u2a37",otimes:"\u2297",Ouml:"\xd6",ouml:"\xf6",ovbar:"\u233d",OverBar:"\u203e",OverBrace:"\u23de",OverBracket:"\u23b4",OverParenthesis:"\u23dc",para:"\xb6",parallel:"\u2225",par:"\u2225",parsim:"\u2af3",parsl:"\u2afd",part:"\u2202",PartialD:"\u2202",Pcy:"\u041f",pcy:"\u043f",percnt:"%",period:".",permil:"\u2030",perp:"\u22a5",pertenk:"\u2031",Pfr:"\ud835\udd13",pfr:"\ud835\udd2d",Phi:"\u03a6",phi:"\u03c6",phiv:"\u03d5",phmmat:"\u2133",phone:"\u260e",Pi:"\u03a0",pi:"\u03c0",pitchfork:"\u22d4",piv:"\u03d6",planck:"\u210f",planckh:"\u210e",plankv:"\u210f",plusacir:"\u2a23",plusb:"\u229e",pluscir:"\u2a22",plus:"+",plusdo:"\u2214",plusdu:"\u2a25",pluse:"\u2a72",PlusMinus:"\xb1",plusmn:"\xb1",plussim:"\u2a26",plustwo:"\u2a27",pm:"\xb1",Poincareplane:"\u210c",pointint:"\u2a15",popf:"\ud835\udd61",Popf:"\u2119",pound:"\xa3",prap:"\u2ab7",Pr:"\u2abb",pr:"\u227a",prcue:"\u227c",precapprox:"\u2ab7",prec:"\u227a",preccurlyeq:"\u227c",Precedes:"\u227a",PrecedesEqual:"\u2aaf",PrecedesSlantEqual:"\u227c",PrecedesTilde:"\u227e",preceq:"\u2aaf",precnapprox:"\u2ab9",precneqq:"\u2ab5",precnsim:"\u22e8",pre:"\u2aaf",prE:"\u2ab3",precsim:"\u227e",prime:"\u2032",Prime:"\u2033",primes:"\u2119",prnap:"\u2ab9",prnE:"\u2ab5",prnsim:"\u22e8",prod:"\u220f",Product:"\u220f",profalar:"\u232e",profline:"\u2312",profsurf:"\u2313",prop:"\u221d",Proportional:"\u221d",Proportion:"\u2237",propto:"\u221d",prsim:"\u227e",prurel:"\u22b0",Pscr:"\ud835\udcab",pscr:"\ud835\udcc5",Psi:"\u03a8",psi:"\u03c8",puncsp:"\u2008",Qfr:"\ud835\udd14",qfr:"\ud835\udd2e",qint:"\u2a0c",qopf:"\ud835\udd62",Qopf:"\u211a",qprime:"\u2057",Qscr:"\ud835\udcac",qscr:"\ud835\udcc6",quaternions:"\u210d",quatint:"\u2a16",quest:"?",questeq:"\u225f",quot:'"',QUOT:'"',rAarr:"\u21db",race:"\u223d\u0331",Racute:"\u0154",racute:"\u0155",radic:"\u221a",raemptyv:"\u29b3",rang:"\u27e9",Rang:"\u27eb",rangd:"\u2992",range:"\u29a5",rangle:"\u27e9",raquo:"\xbb",rarrap:"\u2975",rarrb:"\u21e5",rarrbfs:"\u2920",rarrc:"\u2933",rarr:"\u2192",Rarr:"\u21a0",rArr:"\u21d2",rarrfs:"\u291e",rarrhk:"\u21aa",rarrlp:"\u21ac",rarrpl:"\u2945",rarrsim:"\u2974",Rarrtl:"\u2916",rarrtl:"\u21a3",rarrw:"\u219d",ratail:"\u291a",rAtail:"\u291c",ratio:"\u2236",rationals:"\u211a",rbarr:"\u290d",rBarr:"\u290f",RBarr:"\u2910",rbbrk:"\u2773",rbrace:"}",rbrack:"]",rbrke:"\u298c",rbrksld:"\u298e",rbrkslu:"\u2990",Rcaron:"\u0158",rcaron:"\u0159",Rcedil:"\u0156",rcedil:"\u0157",rceil:"\u2309",rcub:"}",Rcy:"\u0420",rcy:"\u0440",rdca:"\u2937",rdldhar:"\u2969",rdquo:"\u201d",rdquor:"\u201d",rdsh:"\u21b3",real:"\u211c",realine:"\u211b",realpart:"\u211c",reals:"\u211d",Re:"\u211c",rect:"\u25ad",reg:"\xae",REG:"\xae",ReverseElement:"\u220b",ReverseEquilibrium:"\u21cb",ReverseUpEquilibrium:"\u296f",rfisht:"\u297d",rfloor:"\u230b",rfr:"\ud835\udd2f",Rfr:"\u211c",rHar:"\u2964",rhard:"\u21c1",rharu:"\u21c0",rharul:"\u296c",Rho:"\u03a1",rho:"\u03c1",rhov:"\u03f1",RightAngleBracket:"\u27e9",RightArrowBar:"\u21e5",rightarrow:"\u2192",RightArrow:"\u2192",Rightarrow:"\u21d2",RightArrowLeftArrow:"\u21c4",rightarrowtail:"\u21a3",RightCeiling:"\u2309",RightDoubleBracket:"\u27e7",RightDownTeeVector:"\u295d",RightDownVectorBar:"\u2955",RightDownVector:"\u21c2",RightFloor:"\u230b",rightharpoondown:"\u21c1",rightharpoonup:"\u21c0",rightleftarrows:"\u21c4",rightleftharpoons:"\u21cc",rightrightarrows:"\u21c9",rightsquigarrow:"\u219d",RightTeeArrow:"\u21a6",RightTee:"\u22a2",RightTeeVector:"\u295b",rightthreetimes:"\u22cc",RightTriangleBar:"\u29d0",RightTriangle:"\u22b3",RightTriangleEqual:"\u22b5",RightUpDownVector:"\u294f",RightUpTeeVector:"\u295c",RightUpVectorBar:"\u2954",RightUpVector:"\u21be",RightVectorBar:"\u2953",RightVector:"\u21c0",ring:"\u02da",risingdotseq:"\u2253",rlarr:"\u21c4",rlhar:"\u21cc",rlm:"\u200f",rmoustache:"\u23b1",rmoust:"\u23b1",rnmid:"\u2aee",roang:"\u27ed",roarr:"\u21fe",robrk:"\u27e7",ropar:"\u2986",ropf:"\ud835\udd63",Ropf:"\u211d",roplus:"\u2a2e",rotimes:"\u2a35",RoundImplies:"\u2970",rpar:")",rpargt:"\u2994",rppolint:"\u2a12",rrarr:"\u21c9",Rrightarrow:"\u21db",rsaquo:"\u203a",rscr:"\ud835\udcc7",Rscr:"\u211b",rsh:"\u21b1",Rsh:"\u21b1",rsqb:"]",rsquo:"\u2019",rsquor:"\u2019",rthree:"\u22cc",rtimes:"\u22ca",rtri:"\u25b9",rtrie:"\u22b5",rtrif:"\u25b8",rtriltri:"\u29ce",RuleDelayed:"\u29f4",ruluhar:"\u2968",rx:"\u211e",Sacute:"\u015a",sacute:"\u015b",sbquo:"\u201a",scap:"\u2ab8",Scaron:"\u0160",scaron:"\u0161",Sc:"\u2abc",sc:"\u227b",sccue:"\u227d",sce:"\u2ab0",scE:"\u2ab4",Scedil:"\u015e",scedil:"\u015f",Scirc:"\u015c",scirc:"\u015d",scnap:"\u2aba",scnE:"\u2ab6",scnsim:"\u22e9",scpolint:"\u2a13",scsim:"\u227f",Scy:"\u0421",scy:"\u0441",sdotb:"\u22a1",sdot:"\u22c5",sdote:"\u2a66",searhk:"\u2925",searr:"\u2198",seArr:"\u21d8",searrow:"\u2198",sect:"\xa7",semi:";",seswar:"\u2929",setminus:"\u2216",setmn:"\u2216",sext:"\u2736",Sfr:"\ud835\udd16",sfr:"\ud835\udd30",sfrown:"\u2322",sharp:"\u266f",SHCHcy:"\u0429",shchcy:"\u0449",SHcy:"\u0428",shcy:"\u0448",ShortDownArrow:"\u2193",ShortLeftArrow:"\u2190",shortmid:"\u2223",shortparallel:"\u2225",ShortRightArrow:"\u2192",ShortUpArrow:"\u2191",shy:"\xad",Sigma:"\u03a3",sigma:"\u03c3",sigmaf:"\u03c2",sigmav:"\u03c2",sim:"\u223c",simdot:"\u2a6a",sime:"\u2243",simeq:"\u2243",simg:"\u2a9e",simgE:"\u2aa0",siml:"\u2a9d",simlE:"\u2a9f",simne:"\u2246",simplus:"\u2a24",simrarr:"\u2972",slarr:"\u2190",SmallCircle:"\u2218",smallsetminus:"\u2216",smashp:"\u2a33",smeparsl:"\u29e4",smid:"\u2223",smile:"\u2323",smt:"\u2aaa",smte:"\u2aac",smtes:"\u2aac\ufe00",SOFTcy:"\u042c",softcy:"\u044c",solbar:"\u233f",solb:"\u29c4",sol:"/",Sopf:"\ud835\udd4a",sopf:"\ud835\udd64",spades:"\u2660",spadesuit:"\u2660",spar:"\u2225",sqcap:"\u2293",sqcaps:"\u2293\ufe00",sqcup:"\u2294",sqcups:"\u2294\ufe00",Sqrt:"\u221a",sqsub:"\u228f",sqsube:"\u2291",sqsubset:"\u228f",sqsubseteq:"\u2291",sqsup:"\u2290",sqsupe:"\u2292",sqsupset:"\u2290",sqsupseteq:"\u2292",square:"\u25a1",Square:"\u25a1",SquareIntersection:"\u2293",SquareSubset:"\u228f",SquareSubsetEqual:"\u2291",SquareSuperset:"\u2290",SquareSupersetEqual:"\u2292",SquareUnion:"\u2294",squarf:"\u25aa",squ:"\u25a1",squf:"\u25aa",srarr:"\u2192",Sscr:"\ud835\udcae",sscr:"\ud835\udcc8",ssetmn:"\u2216",ssmile:"\u2323",sstarf:"\u22c6",Star:"\u22c6",star:"\u2606",starf:"\u2605",straightepsilon:"\u03f5",straightphi:"\u03d5",strns:"\xaf",sub:"\u2282",Sub:"\u22d0",subdot:"\u2abd",subE:"\u2ac5",sube:"\u2286",subedot:"\u2ac3",submult:"\u2ac1",subnE:"\u2acb",subne:"\u228a",subplus:"\u2abf",subrarr:"\u2979",subset:"\u2282",Subset:"\u22d0",subseteq:"\u2286",subseteqq:"\u2ac5",SubsetEqual:"\u2286",subsetneq:"\u228a",subsetneqq:"\u2acb",subsim:"\u2ac7",subsub:"\u2ad5",subsup:"\u2ad3",succapprox:"\u2ab8",succ:"\u227b",succcurlyeq:"\u227d",Succeeds:"\u227b",SucceedsEqual:"\u2ab0",SucceedsSlantEqual:"\u227d",SucceedsTilde:"\u227f",succeq:"\u2ab0",succnapprox:"\u2aba",succneqq:"\u2ab6",succnsim:"\u22e9",succsim:"\u227f",SuchThat:"\u220b",sum:"\u2211",Sum:"\u2211",sung:"\u266a",sup1:"\xb9",sup2:"\xb2",sup3:"\xb3",sup:"\u2283",Sup:"\u22d1",supdot:"\u2abe",supdsub:"\u2ad8",supE:"\u2ac6",supe:"\u2287",supedot:"\u2ac4",Superset:"\u2283",SupersetEqual:"\u2287",suphsol:"\u27c9",suphsub:"\u2ad7",suplarr:"\u297b",supmult:"\u2ac2",supnE:"\u2acc",supne:"\u228b",supplus:"\u2ac0",supset:"\u2283",Supset:"\u22d1",supseteq:"\u2287",supseteqq:"\u2ac6",supsetneq:"\u228b",supsetneqq:"\u2acc",supsim:"\u2ac8",supsub:"\u2ad4",supsup:"\u2ad6",swarhk:"\u2926",swarr:"\u2199",swArr:"\u21d9",swarrow:"\u2199",swnwar:"\u292a",szlig:"\xdf",Tab:"	",target:"\u2316",Tau:"\u03a4",tau:"\u03c4",tbrk:"\u23b4",Tcaron:"\u0164",tcaron:"\u0165",Tcedil:"\u0162",tcedil:"\u0163",Tcy:"\u0422",tcy:"\u0442",tdot:"\u20db",telrec:"\u2315",Tfr:"\ud835\udd17",tfr:"\ud835\udd31",there4:"\u2234",therefore:"\u2234",Therefore:"\u2234",Theta:"\u0398",theta:"\u03b8",thetasym:"\u03d1",thetav:"\u03d1",thickapprox:"\u2248",thicksim:"\u223c",ThickSpace:"\u205f\u200a",ThinSpace:"\u2009",thinsp:"\u2009",thkap:"\u2248",thksim:"\u223c",THORN:"\xde",thorn:"\xfe",tilde:"\u02dc",Tilde:"\u223c",TildeEqual:"\u2243",TildeFullEqual:"\u2245",TildeTilde:"\u2248",timesbar:"\u2a31",timesb:"\u22a0",times:"\xd7",timesd:"\u2a30",tint:"\u222d",toea:"\u2928",topbot:"\u2336",topcir:"\u2af1",top:"\u22a4",Topf:"\ud835\udd4b",topf:"\ud835\udd65",topfork:"\u2ada",tosa:"\u2929",tprime:"\u2034",trade:"\u2122",TRADE:"\u2122",triangle:"\u25b5",triangledown:"\u25bf",triangleleft:"\u25c3",trianglelefteq:"\u22b4",triangleq:"\u225c",triangleright:"\u25b9",trianglerighteq:"\u22b5",tridot:"\u25ec",trie:"\u225c",triminus:"\u2a3a",TripleDot:"\u20db",triplus:"\u2a39",trisb:"\u29cd",tritime:"\u2a3b",trpezium:"\u23e2",Tscr:"\ud835\udcaf",tscr:"\ud835\udcc9",TScy:"\u0426",tscy:"\u0446",TSHcy:"\u040b",tshcy:"\u045b",Tstrok:"\u0166",tstrok:"\u0167",twixt:"\u226c",twoheadleftarrow:"\u219e",twoheadrightarrow:"\u21a0",Uacute:"\xda",uacute:"\xfa",uarr:"\u2191",Uarr:"\u219f",uArr:"\u21d1",Uarrocir:"\u2949",Ubrcy:"\u040e",ubrcy:"\u045e",Ubreve:"\u016c",ubreve:"\u016d",Ucirc:"\xdb",ucirc:"\xfb",Ucy:"\u0423",ucy:"\u0443",udarr:"\u21c5",Udblac:"\u0170",udblac:"\u0171",udhar:"\u296e",ufisht:"\u297e",Ufr:"\ud835\udd18",ufr:"\ud835\udd32",Ugrave:"\xd9",ugrave:"\xf9",uHar:"\u2963",uharl:"\u21bf",uharr:"\u21be",uhblk:"\u2580",ulcorn:"\u231c",ulcorner:"\u231c",ulcrop:"\u230f",ultri:"\u25f8",Umacr:"\u016a",umacr:"\u016b",uml:"\xa8",UnderBar:"_",UnderBrace:"\u23df",UnderBracket:"\u23b5",UnderParenthesis:"\u23dd",Union:"\u22c3",UnionPlus:"\u228e",Uogon:"\u0172",uogon:"\u0173",Uopf:"\ud835\udd4c",uopf:"\ud835\udd66",UpArrowBar:"\u2912",uparrow:"\u2191",UpArrow:"\u2191",Uparrow:"\u21d1",UpArrowDownArrow:"\u21c5",updownarrow:"\u2195",UpDownArrow:"\u2195",Updownarrow:"\u21d5",UpEquilibrium:"\u296e",upharpoonleft:"\u21bf",upharpoonright:"\u21be",uplus:"\u228e",UpperLeftArrow:"\u2196",UpperRightArrow:"\u2197",upsi:"\u03c5",Upsi:"\u03d2",upsih:"\u03d2",Upsilon:"\u03a5",upsilon:"\u03c5",UpTeeArrow:"\u21a5",UpTee:"\u22a5",upuparrows:"\u21c8",urcorn:"\u231d",urcorner:"\u231d",urcrop:"\u230e",Uring:"\u016e",uring:"\u016f",urtri:"\u25f9",Uscr:"\ud835\udcb0",uscr:"\ud835\udcca",utdot:"\u22f0",Utilde:"\u0168",utilde:"\u0169",utri:"\u25b5",utrif:"\u25b4",uuarr:"\u21c8",Uuml:"\xdc",uuml:"\xfc",uwangle:"\u29a7",vangrt:"\u299c",varepsilon:"\u03f5",varkappa:"\u03f0",varnothing:"\u2205",varphi:"\u03d5",varpi:"\u03d6",varpropto:"\u221d",varr:"\u2195",vArr:"\u21d5",varrho:"\u03f1",varsigma:"\u03c2",varsubsetneq:"\u228a\ufe00",varsubsetneqq:"\u2acb\ufe00",varsupsetneq:"\u228b\ufe00",varsupsetneqq:"\u2acc\ufe00",vartheta:"\u03d1",vartriangleleft:"\u22b2",vartriangleright:"\u22b3",vBar:"\u2ae8",Vbar:"\u2aeb",vBarv:"\u2ae9",Vcy:"\u0412",vcy:"\u0432",vdash:"\u22a2",vDash:"\u22a8",Vdash:"\u22a9",VDash:"\u22ab",Vdashl:"\u2ae6",veebar:"\u22bb",vee:"\u2228",Vee:"\u22c1",veeeq:"\u225a",vellip:"\u22ee",verbar:"|",Verbar:"\u2016",vert:"|",Vert:"\u2016",VerticalBar:"\u2223",VerticalLine:"|",VerticalSeparator:"\u2758",VerticalTilde:"\u2240",VeryThinSpace:"\u200a",Vfr:"\ud835\udd19",vfr:"\ud835\udd33",vltri:"\u22b2",vnsub:"\u2282\u20d2",vnsup:"\u2283\u20d2",Vopf:"\ud835\udd4d",vopf:"\ud835\udd67",vprop:"\u221d",vrtri:"\u22b3",Vscr:"\ud835\udcb1",vscr:"\ud835\udccb",vsubnE:"\u2acb\ufe00",vsubne:"\u228a\ufe00",vsupnE:"\u2acc\ufe00",vsupne:"\u228b\ufe00",Vvdash:"\u22aa",vzigzag:"\u299a",Wcirc:"\u0174",wcirc:"\u0175",wedbar:"\u2a5f",wedge:"\u2227",Wedge:"\u22c0",wedgeq:"\u2259",weierp:"\u2118",Wfr:"\ud835\udd1a",wfr:"\ud835\udd34",Wopf:"\ud835\udd4e",wopf:"\ud835\udd68",wp:"\u2118",wr:"\u2240",wreath:"\u2240",Wscr:"\ud835\udcb2",wscr:"\ud835\udccc",xcap:"\u22c2",xcirc:"\u25ef",xcup:"\u22c3",xdtri:"\u25bd",Xfr:"\ud835\udd1b",xfr:"\ud835\udd35",xharr:"\u27f7",xhArr:"\u27fa",Xi:"\u039e",xi:"\u03be",xlarr:"\u27f5",xlArr:"\u27f8",xmap:"\u27fc",xnis:"\u22fb",xodot:"\u2a00",Xopf:"\ud835\udd4f",xopf:"\ud835\udd69",xoplus:"\u2a01",xotime:"\u2a02",xrarr:"\u27f6",xrArr:"\u27f9",Xscr:"\ud835\udcb3",xscr:"\ud835\udccd",xsqcup:"\u2a06",xuplus:"\u2a04",xutri:"\u25b3",xvee:"\u22c1",xwedge:"\u22c0",Yacute:"\xdd",yacute:"\xfd",YAcy:"\u042f",yacy:"\u044f",Ycirc:"\u0176",ycirc:"\u0177",Ycy:"\u042b",ycy:"\u044b",yen:"\xa5",Yfr:"\ud835\udd1c",yfr:"\ud835\udd36",YIcy:"\u0407",yicy:"\u0457",Yopf:"\ud835\udd50",yopf:"\ud835\udd6a",Yscr:"\ud835\udcb4",yscr:"\ud835\udcce",YUcy:"\u042e",yucy:"\u044e",yuml:"\xff",Yuml:"\u0178",Zacute:"\u0179",zacute:"\u017a",Zcaron:"\u017d",zcaron:"\u017e",Zcy:"\u0417",zcy:"\u0437",Zdot:"\u017b",zdot:"\u017c",zeetrf:"\u2128",ZeroWidthSpace:"\u200b",Zeta:"\u0396",zeta:"\u03b6",zfr:"\ud835\udd37",Zfr:"\u2128",ZHcy:"\u0416",zhcy:"\u0436",zigrarr:"\u21dd",zopf:"\ud835\udd6b",Zopf:"\u2124",Zscr:"\ud835\udcb5",zscr:"\ud835\udccf",zwj:"\u200d",zwnj:"\u200c"}},{}],55:[function(e,r,t){"use strict";function n(e){var r=Array.prototype.slice.call(arguments,1);return r.forEach(function(r){r&&Object.keys(r).forEach(function(t){e[t]=r[t]})}),e}function s(e){return Object.prototype.toString.call(e)}function o(e){return"[object String]"===s(e)}function i(e){return"[object Object]"===s(e)}function a(e){return"[object RegExp]"===s(e)}function c(e){return"[object Function]"===s(e)}function l(e){return e.replace(/[.?*+^$[\]\\(){}|-]/g,"\\$&")}function u(e){return Object.keys(e||{}).reduce(function(e,r){return e||k.hasOwnProperty(r)},!1)}function p(e){e.__index__=-1,e.__text_cache__=""}function h(e){return function(r,t){var n=r.slice(t);return e.test(n)?n.match(e)[0].length:0}}function f(){return function(e,r){r.normalize(e)}}function d(r){function t(e){return e.replace("%TLDS%",u.src_tlds)}function s(e,r){throw new Error('(LinkifyIt) Invalid schema "'+e+'": '+r)}var u=r.re=n({},e("./lib/re")),d=r.__tlds__.slice();r.__tlds_replaced__||d.push(v),d.push(u.src_xn),u.src_tlds=d.join("|"),u.email_fuzzy=RegExp(t(u.tpl_email_fuzzy),"i"),u.link_fuzzy=RegExp(t(u.tpl_link_fuzzy),"i"),u.link_no_ip_fuzzy=RegExp(t(u.tpl_link_no_ip_fuzzy),"i"),u.host_fuzzy_test=RegExp(t(u.tpl_host_fuzzy_test),"i");var m=[];r.__compiled__={},Object.keys(r.__schemas__).forEach(function(e){var t=r.__schemas__[e];if(null!==t){var n={validate:null,link:null};return r.__compiled__[e]=n,i(t)?(a(t.validate)?n.validate=h(t.validate):c(t.validate)?n.validate=t.validate:s(e,t),void(c(t.normalize)?n.normalize=t.normalize:t.normalize?s(e,t):n.normalize=f())):o(t)?void m.push(e):void s(e,t)}}),m.forEach(function(e){r.__compiled__[r.__schemas__[e]]&&(r.__compiled__[e].validate=r.__compiled__[r.__schemas__[e]].validate,r.__compiled__[e].normalize=r.__compiled__[r.__schemas__[e]].normalize)}),r.__compiled__[""]={validate:null,normalize:f()};var g=Object.keys(r.__compiled__).filter(function(e){return e.length>0&&r.__compiled__[e]}).map(l).join("|");r.re.schema_test=RegExp("(^|(?!_)(?:>|"+u.src_ZPCc+"))("+g+")","i"),r.re.schema_search=RegExp("(^|(?!_)(?:>|"+u.src_ZPCc+"))("+g+")","ig"),r.re.pretest=RegExp("("+r.re.schema_test.source+")|("+r.re.host_fuzzy_test.source+")|@","i"),p(r)}function m(e,r){var t=e.__index__,n=e.__last_index__,s=e.__text_cache__.slice(t,n);this.schema=e.__schema__.toLowerCase(),this.index=t+r,this.lastIndex=n+r,this.raw=s,this.text=s,this.url=s}function g(e,r){var t=new m(e,r);return e.__compiled__[t.schema].normalize(t,e),t}function _(e,r){return this instanceof _?(r||u(e)&&(r=e,e={}),this.__opts__=n({},k,r),this.__index__=-1,this.__last_index__=-1,this.__schema__="",this.__text_cache__="",this.__schemas__=n({},b,e),this.__compiled__={},this.__tlds__=x,this.__tlds_replaced__=!1,this.re={},void d(this)):new _(e,r)}var k={fuzzyLink:!0,fuzzyEmail:!0,fuzzyIP:!1},b={"http:":{validate:function(e,r,t){var n=e.slice(r);return t.re.http||(t.re.http=new RegExp("^\\/\\/"+t.re.src_auth+t.re.src_host_port_strict+t.re.src_path,"i")),t.re.http.test(n)?n.match(t.re.http)[0].length:0}},"https:":"http:","ftp:":"http:","//":{validate:function(e,r,t){var n=e.slice(r);return t.re.no_http||(t.re.no_http=new RegExp("^"+t.re.src_auth+t.re.src_host_port_strict+t.re.src_path,"i")),t.re.no_http.test(n)?r>=3&&":"===e[r-3]?0:n.match(t.re.no_http)[0].length:0}},"mailto:":{validate:function(e,r,t){var n=e.slice(r);return t.re.mailto||(t.re.mailto=new RegExp("^"+t.re.src_email_name+"@"+t.re.src_host_strict,"i")),t.re.mailto.test(n)?n.match(t.re.mailto)[0].length:0}}},v="a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]",x="biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|\u0440\u0444".split("|");_.prototype.add=function(e,r){return this.__schemas__[e]=r,d(this),this},_.prototype.set=function(e){return this.__opts__=n(this.__opts__,e),this},_.prototype.test=function(e){if(this.__text_cache__=e,this.__index__=-1,!e.length)return!1;var r,t,n,s,o,i,a,c,l;if(this.re.schema_test.test(e))for(a=this.re.schema_search,a.lastIndex=0;null!==(r=a.exec(e));)if(s=this.testSchemaAt(e,r[2],a.lastIndex)){this.__schema__=r[2],this.__index__=r.index+r[1].length,this.__last_index__=r.index+r[0].length+s;break}return this.__opts__.fuzzyLink&&this.__compiled__["http:"]&&(c=e.search(this.re.host_fuzzy_test),c>=0&&(this.__index__<0||c<this.__index__)&&null!==(t=e.match(this.__opts__.fuzzyIP?this.re.link_fuzzy:this.re.link_no_ip_fuzzy))&&(o=t.index+t[1].length,(this.__index__<0||o<this.__index__)&&(this.__schema__="",this.__index__=o,this.__last_index__=t.index+t[0].length))),this.__opts__.fuzzyEmail&&this.__compiled__["mailto:"]&&(l=e.indexOf("@"),l>=0&&null!==(n=e.match(this.re.email_fuzzy))&&(o=n.index+n[1].length,i=n.index+n[0].length,(this.__index__<0||o<this.__index__||o===this.__index__&&i>this.__last_index__)&&(this.__schema__="mailto:",this.__index__=o,this.__last_index__=i))),this.__index__>=0},_.prototype.pretest=function(e){return this.re.pretest.test(e)},_.prototype.testSchemaAt=function(e,r,t){return this.__compiled__[r.toLowerCase()]?this.__compiled__[r.toLowerCase()].validate(e,t,this):0},_.prototype.match=function(e){var r=0,t=[];this.__index__>=0&&this.__text_cache__===e&&(t.push(g(this,r)),r=this.__last_index__);for(var n=r?e.slice(r):e;this.test(n);)t.push(g(this,r)),n=n.slice(this.__last_index__),r+=this.__last_index__;return t.length?t:null},_.prototype.tlds=function(e,r){return e=Array.isArray(e)?e:[e],r?(this.__tlds__=this.__tlds__.concat(e).sort().filter(function(e,r,t){return e!==t[r-1]}).reverse(),d(this),this):(this.__tlds__=e.slice(),this.__tlds_replaced__=!0,d(this),this)},_.prototype.normalize=function(e){e.schema||(e.url="http://"+e.url),"mailto:"!==e.schema||/^mailto:/i.test(e.url)||(e.url="mailto:"+e.url)},r.exports=_},{"./lib/re":56}],56:[function(e,r,t){"use strict";var n=t.src_Any=e("uc.micro/properties/Any/regex").source,s=t.src_Cc=e("uc.micro/categories/Cc/regex").source,o=t.src_Z=e("uc.micro/categories/Z/regex").source,i=t.src_P=e("uc.micro/categories/P/regex").source,a=t.src_ZPCc=[o,i,s].join("|"),c=t.src_ZCc=[o,s].join("|"),l="(?:(?!"+a+")"+n+")",u="(?:(?![0-9]|"+a+")"+n+")",p=t.src_ip4="(?:(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)";t.src_auth="(?:(?:(?!"+c+").)+@)?";var h=t.src_port="(?::(?:6(?:[0-4]\\d{3}|5(?:[0-4]\\d{2}|5(?:[0-2]\\d|3[0-5])))|[1-5]?\\d{1,4}))?",f=t.src_host_terminator="(?=$|"+a+")(?!-|_|:\\d|\\.-|\\.(?!$|"+a+"))",d=t.src_path="(?:[/?#](?:(?!"+c+"|[()[\\]{}.,\"'?!\\-]).|\\[(?:(?!"+c+"|\\]).)*\\]|\\((?:(?!"+c+"|[)]).)*\\)|\\{(?:(?!"+c+'|[}]).)*\\}|\\"(?:(?!'+c+'|["]).)+\\"|\\\'(?:(?!'+c+"|[']).)+\\'|\\'(?="+l+").|\\.{2,3}[a-zA-Z0-9%/]|\\.(?!"+c+"|[.]).|\\-(?!--(?:[^-]|$))(?:-*)|\\,(?!"+c+").|\\!(?!"+c+"|[!]).|\\?(?!"+c+"|[?]).)+|\\/)?",m=t.src_email_name='[\\-;:&=\\+\\$,\\"\\.a-zA-Z0-9_]+',g=t.src_xn="xn--[a-z0-9\\-]{1,59}",_=t.src_domain_root="(?:"+g+"|"+u+"{1,63})",k=t.src_domain="(?:"+g+"|(?:"+l+")|(?:"+l+"(?:-(?!-)|"+l+"){0,61}"+l+"))",b=t.src_host="(?:"+p+"|(?:(?:(?:"+k+")\\.)*"+_+"))",v=t.tpl_host_fuzzy="(?:"+p+"|(?:(?:(?:"+k+")\\.)+(?:%TLDS%)))",x=t.tpl_host_no_ip_fuzzy="(?:(?:(?:"+k+")\\.)+(?:%TLDS%))";
	t.src_host_strict=b+f;var y=t.tpl_host_fuzzy_strict=v+f;t.src_host_port_strict=b+h+f;var C=t.tpl_host_port_fuzzy_strict=v+h+f,A=t.tpl_host_port_no_ip_fuzzy_strict=x+h+f;t.tpl_host_fuzzy_test="localhost|\\.\\d{1,3}\\.|(?:\\.(?:%TLDS%)(?:"+a+"|$))",t.tpl_email_fuzzy="(^|>|"+c+")("+m+"@"+y+")",t.tpl_link_fuzzy="(^|(?![.:/\\-_@])(?:[$+<=>^`|]|"+a+"))((?![$+<=>^`|])"+C+d+")",t.tpl_link_no_ip_fuzzy="(^|(?![.:/\\-_@])(?:[$+<=>^`|]|"+a+"))((?![$+<=>^`|])"+A+d+")"},{"uc.micro/categories/Cc/regex":62,"uc.micro/categories/P/regex":64,"uc.micro/categories/Z/regex":65,"uc.micro/properties/Any/regex":67}],57:[function(e,r,t){"use strict";function n(e){var r,t,n=o[e];if(n)return n;for(n=o[e]=[],r=0;128>r;r++)t=String.fromCharCode(r),n.push(t);for(r=0;r<e.length;r++)t=e.charCodeAt(r),n[t]="%"+("0"+t.toString(16).toUpperCase()).slice(-2);return n}function s(e,r){var t;return"string"!=typeof r&&(r=s.defaultChars),t=n(r),e.replace(/(%[a-f0-9]{2})+/gi,function(e){var r,n,s,o,i,a,c,l="";for(r=0,n=e.length;n>r;r+=3)s=parseInt(e.slice(r+1,r+3),16),128>s?l+=t[s]:192===(224&s)&&n>r+3&&(o=parseInt(e.slice(r+4,r+6),16),128===(192&o))?(c=s<<6&1984|63&o,l+=128>c?"\ufffd\ufffd":String.fromCharCode(c),r+=3):224===(240&s)&&n>r+6&&(o=parseInt(e.slice(r+4,r+6),16),i=parseInt(e.slice(r+7,r+9),16),128===(192&o)&&128===(192&i))?(c=s<<12&61440|o<<6&4032|63&i,l+=2048>c||c>=55296&&57343>=c?"\ufffd\ufffd\ufffd":String.fromCharCode(c),r+=6):240===(248&s)&&n>r+9&&(o=parseInt(e.slice(r+4,r+6),16),i=parseInt(e.slice(r+7,r+9),16),a=parseInt(e.slice(r+10,r+12),16),128===(192&o)&&128===(192&i)&&128===(192&a))?(c=s<<18&1835008|o<<12&258048|i<<6&4032|63&a,65536>c||c>1114111?l+="\ufffd\ufffd\ufffd\ufffd":(c-=65536,l+=String.fromCharCode(55296+(c>>10),56320+(1023&c))),r+=9):l+="\ufffd";return l})}var o={};s.defaultChars=";/?:@&=+$,#",s.componentChars="",r.exports=s},{}],58:[function(e,r,t){"use strict";function n(e){var r,t,n=o[e];if(n)return n;for(n=o[e]=[],r=0;128>r;r++)t=String.fromCharCode(r),/^[0-9a-z]$/i.test(t)?n.push(t):n.push("%"+("0"+r.toString(16).toUpperCase()).slice(-2));for(r=0;r<e.length;r++)n[e.charCodeAt(r)]=e[r];return n}function s(e,r,t){var o,i,a,c,l,u="";for("string"!=typeof r&&(t=r,r=s.defaultChars),"undefined"==typeof t&&(t=!0),l=n(r),o=0,i=e.length;i>o;o++)if(a=e.charCodeAt(o),t&&37===a&&i>o+2&&/^[0-9a-f]{2}$/i.test(e.slice(o+1,o+3)))u+=e.slice(o,o+3),o+=2;else if(128>a)u+=l[a];else if(a>=55296&&57343>=a){if(a>=55296&&56319>=a&&i>o+1&&(c=e.charCodeAt(o+1),c>=56320&&57343>=c)){u+=encodeURIComponent(e[o]+e[o+1]),o++;continue}u+="%EF%BF%BD"}else u+=encodeURIComponent(e[o]);return u}var o={};s.defaultChars=";/?:@&=+$,-_.!~*'()#",s.componentChars="-_.!~*'()",r.exports=s},{}],59:[function(e,r,t){"use strict";r.exports=function(e){var r="";return r+=e.protocol||"",r+=e.slashes?"//":"",r+=e.auth?e.auth+"@":"",r+=e.hostname&&-1!==e.hostname.indexOf(":")?"["+e.hostname+"]":e.hostname||"",r+=e.port?":"+e.port:"",r+=e.pathname||"",r+=e.search||"",r+=e.hash||""}},{}],60:[function(e,r,t){"use strict";r.exports.encode=e("./encode"),r.exports.decode=e("./decode"),r.exports.format=e("./format"),r.exports.parse=e("./parse")},{"./decode":57,"./encode":58,"./format":59,"./parse":61}],61:[function(e,r,t){"use strict";function n(){this.protocol=null,this.slashes=null,this.auth=null,this.port=null,this.hostname=null,this.hash=null,this.search=null,this.pathname=null}function s(e,r){if(e&&e instanceof n)return e;var t=new n;return t.parse(e,r),t}var o=/^([a-z0-9.+-]+:)/i,i=/:[0-9]*$/,a=/^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,c=["<",">",'"',"`"," ","\r","\n","	"],l=["{","}","|","\\","^","`"].concat(c),u=["'"].concat(l),p=["%","/","?",";","#"].concat(u),h=["/","?","#"],f=255,d=/^[+a-z0-9A-Z_-]{0,63}$/,m=/^([+a-z0-9A-Z_-]{0,63})(.*)$/,g={javascript:!0,"javascript:":!0},_={http:!0,https:!0,ftp:!0,gopher:!0,file:!0,"http:":!0,"https:":!0,"ftp:":!0,"gopher:":!0,"file:":!0};n.prototype.parse=function(e,r){var t,n,s,i,c,l=e;if(l=l.trim(),!r&&1===e.split("#").length){var u=a.exec(l);if(u)return this.pathname=u[1],u[2]&&(this.search=u[2]),this}var k=o.exec(l);if(k&&(k=k[0],s=k.toLowerCase(),this.protocol=k,l=l.substr(k.length)),(r||k||l.match(/^\/\/[^@\/]+@[^@\/]+/))&&(c="//"===l.substr(0,2),!c||k&&g[k]||(l=l.substr(2),this.slashes=!0)),!g[k]&&(c||k&&!_[k])){var b=-1;for(t=0;t<h.length;t++)i=l.indexOf(h[t]),-1!==i&&(-1===b||b>i)&&(b=i);var v,x;for(x=-1===b?l.lastIndexOf("@"):l.lastIndexOf("@",b),-1!==x&&(v=l.slice(0,x),l=l.slice(x+1),this.auth=v),b=-1,t=0;t<p.length;t++)i=l.indexOf(p[t]),-1!==i&&(-1===b||b>i)&&(b=i);-1===b&&(b=l.length),":"===l[b-1]&&b--;var y=l.slice(0,b);l=l.slice(b),this.parseHost(y),this.hostname=this.hostname||"";var C="["===this.hostname[0]&&"]"===this.hostname[this.hostname.length-1];if(!C){var A=this.hostname.split(/\./);for(t=0,n=A.length;n>t;t++){var w=A[t];if(w&&!w.match(d)){for(var q="",D=0,E=w.length;E>D;D++)q+=w.charCodeAt(D)>127?"x":w[D];if(!q.match(d)){var S=A.slice(0,t),F=A.slice(t+1),z=w.match(m);z&&(S.push(z[1]),F.unshift(z[2])),F.length&&(l=F.join(".")+l),this.hostname=S.join(".");break}}}}this.hostname.length>f&&(this.hostname=""),C&&(this.hostname=this.hostname.substr(1,this.hostname.length-2))}var L=l.indexOf("#");-1!==L&&(this.hash=l.substr(L),l=l.slice(0,L));var T=l.indexOf("?");return-1!==T&&(this.search=l.substr(T),l=l.slice(0,T)),l&&(this.pathname=l),_[s]&&this.hostname&&!this.pathname&&(this.pathname=""),this},n.prototype.parseHost=function(e){var r=i.exec(e);r&&(r=r[0],":"!==r&&(this.port=r.substr(1)),e=e.substr(0,e.length-r.length)),e&&(this.hostname=e)},r.exports=s},{}],62:[function(e,r,t){r.exports=/[\0-\x1F\x7F-\x9F]/},{}],63:[function(e,r,t){r.exports=/[\xAD\u0600-\u0605\u061C\u06DD\u070F\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]|\uD804\uDCBD|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F]/},{}],64:[function(e,r,t){r.exports=/[!-#%-\*,-\/:;\?@\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u0AF0\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E42\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDE38-\uDE3D]|\uD805[\uDCC6\uDDC1-\uDDC9\uDE41-\uDE43]|\uD809[\uDC70-\uDC74]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD82F\uDC9F/},{}],65:[function(e,r,t){r.exports=/[ \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/},{}],66:[function(e,r,t){r.exports.Any=e("./properties/Any/regex"),r.exports.Cc=e("./categories/Cc/regex"),r.exports.Cf=e("./categories/Cf/regex"),r.exports.P=e("./categories/P/regex"),r.exports.Z=e("./categories/Z/regex")},{"./categories/Cc/regex":62,"./categories/Cf/regex":63,"./categories/P/regex":64,"./categories/Z/regex":65,"./properties/Any/regex":67}],67:[function(e,r,t){r.exports=/[\0-\uD7FF\uDC00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF]/},{}],68:[function(e,r,t){"use strict";r.exports=e("./lib/")},{"./lib/":10}]},{},[68])(68)});
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }
/******/ ])
//# sourceMappingURL=main.js.map
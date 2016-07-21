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
	__webpack_require__(10)(angular);
	__webpack_require__(12)(angular);
	var app = angular.module('app', [
		'ui.router',
		'restangular',
		'ui.bootstrap',
		'siteModules',
		'siteServices',
		'siteFilters',
		'cgBusy',
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
	window.duoshuoQuery = {short_name:"fedoc"};
	__webpack_require__(19)(app);
	
	angular.bootstrap(document, ['app']);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(angular) {
		var siteModules = angular.module('siteModules', ['ngSanitize']);
		__webpack_require__(2)(siteModules);
		__webpack_require__(3)(siteModules);
		__webpack_require__(4)(siteModules);
		__webpack_require__(6)(siteModules);
		__webpack_require__(7)(siteModules);
		__webpack_require__(8)(siteModules);
		__webpack_require__(9)(siteModules);
	
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
	
	    var md = __webpack_require__(5)({
	        html: true,
	        linkify: true,
	        typographer: true
	    });
	    var addLinkTarget = function(code) {
	        var pattern = /a href=/g;
	        return code.replace(pattern, "a target='_blank' href=");
	    };
	    myModule.
	    directive('fedocMarkdown', ['$sanitize', function($sanitize) {
	        return {
	            restrict: 'AE',
	            link: function(scope, element, attrs) {
	                if (attrs.fedocMarkdown) {
	                    scope.$watch(attrs.fedocMarkdown, function(newVal) {
	                        var html = newVal ? $sanitize(md.render(newVal)) : '';
	                        html = addLinkTarget(html);
	                        element.html(html);
	                    });
	                } else {
	                    var html = $sanitize(md.render(element.text()));
	                    html = addLinkTarget(html);
	                    element.html(html);
	                }
	            }
	        };
	    }]);
	
	};


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = markdownit;

/***/ },
/* 6 */
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
/* 7 */
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
	                        var opts = {
	                            tag: tag
	                        };
	                        if (tag !== $stateParams.tag) {
	                            opts.page = 1;
	                        }
	                        $state.go('articles', opts);
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
/* 8 */
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
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(myModule) {
		myModule.directive('deployRecord', [
			function factory() {
				var directive = {
					restrict: 'E', // 指令的使用方式，包括标签，属性，类，注释
					replace: 'true',
					templateUrl: '/site/modules/deploy-record/index.html',
					require: "ngModel",
	                scope: {
	                    ngModel: '='
	                },
					link: function($scope) {
						console.log($scope.ngModel)
					}
				};
				return directive;
			}
		]);
	};

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(angular) {
		var siteFilters = angular.module('siteFilters', []);
		__webpack_require__(11)(siteFilters);
	};


/***/ },
/* 11 */
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
		myModule.filter('dateDisplay', ['$filter',
			function($filter) {
				var standardDateFilterFn = $filter('date');
				return function(data) {
					if (data == null || data == '') {
						return '';
					} else {
						return standardDateFilterFn(data, 'yyyy-MM-dd HH:mm');
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
						var timeDistance = parseInt((nowSt - meSt) / 1000); //差距多少秒
						if (timeDistance < 60) { //小于60秒
							return parseInt(timeDistance) + '秒前';
						} else if (timeDistance < 3600) { //小于60分钟
							return parseInt(timeDistance / 60) + '分钟前';
						} else if (timeDistance < 3600 * 24) { //小于24小时
							return parseInt(timeDistance / 3600) + '小时前';
						} else if (timeDistance < 3600 * 24 * 30) { //小于30天
							return parseInt(timeDistance / (3600 * 24)) + '天前';
						} else if (timeDistance < 3600 * 24 * 30 * 365) {
							return parseInt(timeDistance / (3600 * 24 * 30)) + '月前';
						} else {
							return parseInt(timeDistance / (3600 * 24 * 30 * 12)) + '年前';
						}
					}
				};
			}
		]);
	
	};

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(angular) {
		var siteServices = angular.module('siteServices', ['restangular']);
		__webpack_require__(13)(siteServices);
		__webpack_require__(14)(siteServices);
		__webpack_require__(15)(siteServices);
		__webpack_require__(16)(siteServices);
		__webpack_require__(17)(siteServices);
		__webpack_require__(18)(siteServices);
	
	};


/***/ },
/* 13 */
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
/* 14 */
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
/* 15 */
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
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(myModule) {
		myModule.factory('DeployService', ['Restangular', '$timeout',
			function(Restangular, $timeout) {
				var baseRoute = Restangular.all('deploys');
				return {
					list: function(query) {
						return baseRoute.customGET('', query);
					},
					getOne: function(deployId) {
						return baseRoute.one(deployId)
							.customGET();
					},
					getConfig: function() {
						return baseRoute.customGET('config');
					},
					run: function(deployId) {
						return baseRoute.one(deployId,'run').customPUT();
					},
					remove: function(deployId) {
						return baseRoute.one(deployId)
							.remove();
					},
					create: function(article) {
						return baseRoute.customPOST(article);
					},
					update: function(deployId, article) {
						return baseRoute.one(deployId).customPUT(article);
					}
				};
			}
		]);
	};

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(myModule) {
		myModule.factory('$modalService', ['$modal', '$modalStack', function($modal, $modalStack) {
			var defaultOptions = {
				backdrop: true,
				keyboard: true,
				windowClass: ''
			};
			return {
				show: function(options) {
					var realOpt = _.cloneDeep(defaultOptions);
					angular.extend(realOpt, options || {});
					return $modal.open(realOpt).result;
				},
				dismissAll: function() {
					$modalStack.dismissAll();
				}
			};
		}]);
	};

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	 module.exports = function(myModule) {
	  myModule.service('deployRead', ['$modalService', '$q',
	        function factory($modalService, $q) {
	            this.init = function(options) {
	               var deploy = options.deploy;
	                var delay = $q.defer();
	                $modalService.show({
	                    templateUrl: '/site/services/deploy-read/index.html',
	                    width: 600,
	                    height: 345,
	                    controller: ['$scope', '$modalInstance', 
	                        function($scope, $modalInstance) {
	                            $scope.deploy = deploy;
	                            $scope.close = function() {
	                                $modalInstance.close();
	                            };
	                          
	                        }
	                    ]
	                });
	                return delay.promise;
	            };
	        }
	    ]);
	};

/***/ },
/* 19 */
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
	
		__webpack_require__(20)(app);
		__webpack_require__(21)(app);
		__webpack_require__(22)(app);
		__webpack_require__(23)(app);
		__webpack_require__(24)(app);
		__webpack_require__(25)(app);
		__webpack_require__(28)(app);
		__webpack_require__(31)(app);
		__webpack_require__(29)(app);
		__webpack_require__(30)(app);
	
	};


/***/ },
/* 20 */
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
/* 21 */
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
				var articleEditor;
				var editorUploadCallback;
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
								$scope.initReplys();
							} else {
								toasty.error(data.msg);
							}
						});
					}
				};
				$scope.initReplys = function(){
		            var el = document.createElement('div'),
		                $ds = $('#duoshuo-box'),
		                article =  $scope.article;
		            el.setAttribute('data-thread-key',article._id);
		            el.setAttribute('data-url', 'http://fe.firstshare.cn/#/articles/'+article._id);
		            el.setAttribute('data-title', article.title);
		            DUOSHUO.EmbedThread(el);
		            $ds.append(el);
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
						element: document.getElementById('editor'),
						toolbar: ["bold", "italic", "heading", "|", "quote", "unordered-list", "ordered-list", "|", "link", {
							name: "image",
							action: function(editor) {
								$('.btn-simplemde-upload').click();
	
								editorUploadCallback = function(data) {
									editor.value(editor.value() + '![图片](' + data.src + ')');
								};
							},
							className: "fa fa-image"
						}, "|", "preview", "side-by-side", "fullscreen", "guide"]
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
				$scope.uploadSimplemdeAttachment = function(files) {
					if(!files||files.length===0){
						return;
					}
					var file = files[0];
					$rootScope.waitPromise = $upload.upload({
							url: '/api/attachments/upload',
							file: file
						})
						.progress(function(evt) {
	
						})
						.success(function(data, status, headers, config) {
							if (data.code === 200) {
								editorUploadCallback({
									src: data.msg.fileUrl
								});
								editorUploadCallback = null;
							} else {
	
							}
						})
						.error(function() {});
				};
	
				$scope.delAttachment = function(index) {
					$scope.article.attachments.splice(index, 1);
				};
	
				function _uploadAttachment(file) {
					$scope.uploading = true;
					$rootScope.waitPromise = $upload.upload({
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
/* 22 */
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
/* 23 */
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
/* 24 */
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
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(app) {
		__webpack_require__(26)(app);
		__webpack_require__(27)(app);
		
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
/* 26 */
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
/* 27 */
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
/* 28 */
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
/* 29 */
/***/ function(module, exports, __webpack_require__) {

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
				var now = new Date();
				now.setHours(22);
				now.setMinutes(0);
				$scope.deploy = {
					reason:'修复了',
					range:'内测',
					name:'fs',
					version:'4.7',
					developer:'zhangc',
					runTime:now 
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

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

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

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(app) {
		app.controller('SignupController', ['$scope', '$rootScope', '$http', '$state', 'toasty',
			function($scope, $rootScope, $http, $state, toasty) {
				$scope.create = function() {
					$http({
						method: 'post',
						url: "/api/sign/reg",
						data: {
							email: $scope.form.email || '',
							pwd: $scope.form.pwd || ''
						}
					}).
					success(function(data, status, headers, config) {
						if (data.code === 200) {
							var user = data.msg.user;
							$rootScope.user = user;
							toasty.success('注册成功');
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
				.state('signup', {
					url: '/signup',
					templateUrl: '/site/tpls/signup/index.html',
					controller: 'SignupController',
					pageTitle: '登录'
				});
		}]);
	};


/***/ }
/******/ ])
//# sourceMappingURL=main.js.map
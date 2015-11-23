module.exports = function(myModule) {
	myModule.directive('siteHeader', [
		function factory() {
			var directive = {
				restrict: 'E', // 指令的使用方式，包括标签，属性，类，注释
				replace: 'true',
				templateUrl: '/site/modules/header/index.html',
				link: function($scope) {
					$scope.menus = [{
						title: '文章管理',
						subMenus: [{
							title: '列表',
							sref: 'articles'
						},{
							title: '新增文档',
							sref: 'addArticle'
						}]
					}];
				},
				scope: false,
				controller: ['$scope', '$rootScope', function($scope, $rootScope) {
					$scope.user = null;
					//监听 - 缩略图被点击
					$scope.$on('userChange', function(event, data) {
						if (data) {
							$scope.user = data.user;
						}
					});

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
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
					}];
				},
				scope: false,
				controller: ['$scope', '$rootScope', '$stateParams', '$state', function($scope, $rootScope, $stateParams, $state) {
					$scope.user = null;
					//监听 - 缩略图被点击
					$scope.$on('userChange', function(event, data) {
						if (data) {
							$scope.user = data.user;
						}
					});
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
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
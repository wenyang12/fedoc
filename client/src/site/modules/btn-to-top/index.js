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
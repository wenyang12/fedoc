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
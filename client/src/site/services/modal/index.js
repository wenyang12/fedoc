module.exports = function(myModule) {
	myModule.factory('$modalService', ['$modal', '$modalStack', function($modal, $modalStack) {
		var defaultOptions = {
			backdrop: true,
			keyboard: true,
			windowClass: 'fedoc-modal'
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

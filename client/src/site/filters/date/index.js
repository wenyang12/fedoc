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
};


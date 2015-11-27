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
					} else if (timeDistance < 360 * 24 * 30) {
						return parseInt(timeDistance / (60 * 24 * 30)) + '天前';
					} else {
						return parseInt(timeDistance / (60 * 24 * 30 * 365)) + '年前';
					}
				}
			};
		}
	]);

};
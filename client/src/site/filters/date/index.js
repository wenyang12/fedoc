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
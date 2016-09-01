module.exports = function(angular) {
	let siteFilters = angular.module('siteFilters', []);
	require('site/filters/date/index')(siteFilters);
};

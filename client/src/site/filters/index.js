module.exports = function(angular) {
	var siteFilters = angular.module('siteFilters', []);
	require('site/filters/date/index')(siteFilters);
};

module.exports = function(angular) {
	var siteServices = angular.module('siteServices', ['restangular']);
	require('site/services/article/index')(siteServices);
};
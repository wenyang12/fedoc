module.exports = function(angular) {
	var siteServices = angular.module('siteServices', ['restangular']);
	require('site/services/article/index')(siteServices);
	require('site/services/user/index')(siteServices);
	require('site/services/tag/index')(siteServices);
	require('site/services/deploy/index')(siteServices);

};

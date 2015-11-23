module.exports = function(angular) {
	var siteModules = angular.module('siteModules', []);
	require('site/modules/header/index')(siteModules);
	require('site/modules/pagination/index')(siteModules);
};

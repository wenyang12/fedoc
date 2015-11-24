module.exports = function(angular) {
	var siteModules = angular.module('siteModules', ['ngSanitize']);
	require('site/modules/header/index')(siteModules);
	require('site/modules/pagination/index')(siteModules);
	require('site/modules/markdown/index')(siteModules);

};
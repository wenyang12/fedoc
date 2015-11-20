module.exports = function(angular) {
	var siteModules = angular.module('siteModules', []);
	require('site/modules/header/index')(siteModules);
};

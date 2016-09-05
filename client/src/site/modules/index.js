module.exports = function(angular) {
	var siteModules = angular.module('siteModules', ['ngSanitize']);
	require('site/modules/header/index')(siteModules);
	require('site/modules/pagination/index')(siteModules);
	require('site/modules/markdown/index')(siteModules);
	require('site/modules/enter/index')(siteModules);
	require('site/modules/article-tags/index')(siteModules);
	require('site/modules/btn-to-top/index')(siteModules);
	require('site/modules/hot-articles/index')(siteModules);
	require('site/modules/user-icon/index')(siteModules);


};

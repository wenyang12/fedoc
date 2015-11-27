//加载管理模块
require('site/modules/index')(angular);
require('site/filters/index')(angular);
require('site/services/index')(angular);
var app = angular.module('app', [
	'ui.router',
	'restangular',
	'ui.bootstrap',
	'siteModules',
	'siteServices',
	'siteFilters',
	'angular-toasty',
	'angularFileUpload'
]);

app.run(['$rootScope', '$state', '$stateParams',
	function($rootScope, $state, $stateParams) {
		$rootScope.$state = $state;
		$rootScope.$stateParams = $stateParams;
	}
]).config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {
	$urlRouterProvider.otherwise('/site');
}]);

app.config(['toastyConfigProvider', function(toastyConfigProvider) {
	toastyConfigProvider.setConfig({

	});
}]);

// Restangular
app.config(['RestangularProvider', function(RestangularProvider) {
	RestangularProvider.setBaseUrl('/api');
}]);

app.constant('constant', {
	ARTICLES: {
	}
});

require('site/index')(app);

angular.bootstrap(document, ['app']);
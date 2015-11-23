require('assets/libs/angular/angular.min');
require('assets/libs/lodash/lodash');
require('assets/libs/angular-ui-router/release/angular-ui-router.min');
require('assets/libs/restangular/dist/restangular');
require('assets/vendor/angular-ui-bootstrap/angular-ui-bootstrap.min');
require('assets/libs/angular-toasty/dist/angular-toasty.min');

//加载管理模块
require('site/modules/index')(angular);

require('site/services/index')(angular);
var app = angular.module('app', [
	'ui.router',
	'restangular',
	'ui.bootstrap',
	'siteModules',
	'siteServices',
	'angular-toasty'
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

require('site/index')(app);

angular.bootstrap(document, ['app']);
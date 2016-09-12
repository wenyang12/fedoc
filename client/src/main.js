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
    'cgBusy',
    'angular-toasty',
    'angularFileUpload',
    'angular-loading-bar'
]);

app.run(['$rootScope', '$state', '$stateParams',
    function($rootScope, $state, $stateParams) {
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;
    }
]).config(['$stateProvider', '$urlRouterProvider', '$locationProvider', '$httpProvider', function($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {
    $urlRouterProvider.otherwise('/site');


}]);



app.config(['$httpProvider', function($httpProvider) {
    // reponse拦截器，判断session过期等场景
    var interceptor = ['$q', '$rootScope', 'cfpLoadingBar', function($q, $rootScope, cfpLoadingBar) {
        return {
            response: function(resp) {
                cfpLoadingBar.complete();
                return resp;
            },
            request: function(config) {
                cfpLoadingBar.start();
                return config;
            }
        };
    }];
    $httpProvider.interceptors.push(interceptor);
}]);

app.config(['cfpLoadingBarProvider', function(cfpLoadingBarProvider) {
    cfpLoadingBarProvider.includeSpinner = false;
}])

// Restangular
app.config(['RestangularProvider', function(RestangularProvider) {
    RestangularProvider.setBaseUrl('/api');
}]);



app.constant('constant', {
    ARTICLES: {}
});
window.duoshuoQuery = {
    short_name: "fedoc"
};
require('site/index')(app);

angular.bootstrap(document, ['app']);

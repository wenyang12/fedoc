module.exports = function(app) {
    app.controller('SitesController', [
        '$scope',
        function($scope) {
            $scope.sites = [{
                href: 'http://spark.firstshare.cn/',
                name: '纷享前端组件spark'
            }, {
                href: 'http://git.firstshare.cn/',
                name: '基于gitlab代码仓库'
            }, {
                href: 'http://registry-npm.firstshare.cn',
                name: '纷享私有npm'
            }, {
                href: 'http://fe.firstshare.cn',
                name: '纷享文档'
            }];
        }
    ]).config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {
        $stateProvider.state('sites', {
            url: '/sites',
            templateUrl: '/site/tpls/sites/index.html',
            pageTitle: '前端站点',
            controller: 'SitesController'
        });
    }]);
};

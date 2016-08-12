module.exports = function(app) {
    app.controller('SitesController', [
        '$scope',
        function($scope) {
            $scope.sites = [{
                href: 'http://spark.firstshare.cn/',
                name: '前端组件spark',
                hot: true
            }, {
                href: 'http://registry-npm.firstshare.cn',
                name: '私有npm',
                hot: true
            }, {
                href: 'http://fe.firstshare.cn',
                name: '文档平台'
            }, {
                href: 'http://git.firstshare.cn/',
                name: '基于gitlab代码仓库'
            }, {
                href: 'http://172.31.101.23:9080/',
                name: 'sde,fte,fte2等环境前端部署'
            }, {
                href: 'http://open.fsfte2.com/open/jsapi/doc/',
                name: 'jsapi文档'
            }, {
                href: 'http://vwsr100014:8080/',
                name: '安卓打包地址'
            }, {
                href: 'http://172.29.0.169:8080/',
                name: 'IOS打包地址'
            }, {
                href: 'http://172.31.101.16:12000/signin.html',
                name: '微营销h5模板制作'
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

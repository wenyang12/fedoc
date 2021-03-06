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
                name: '文档平台',
                hot: true
            }, {
                href: 'http://172.31.105.108:8888/?appid=FSAID_5f5e533/',
                name: 'jsapi实时体验地址',
                hot: true
            }, {
                href: 'http://rap.firstshare.cn/org/index.do',
                name: '接口mock工具 - RAP',
                hot: true
            }, {
                href: 'http://open.fxiaoke.com/open/uikit/',
                name: 'uikit',
                hot: true
            }, {
                href: 'http://www.fspte.com/crmdoc/index.html#',
                name: 'CRM前端文档'
            }, {
                href: 'http://git.firstshare.cn/',
                name: '基于gitlab代码仓库'
            }, {
                href: 'http://open.fsfte2.com/open/jsapi/doc/',
                name: 'jsapi文档'
            }, {
                href: 'http://oss.firstshare.cn/fisheye/',
                name: 'codereview - fisheye'
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

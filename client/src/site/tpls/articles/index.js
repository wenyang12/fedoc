module.exports = function(app) {
    app.controller('ArticleListController', [
        '$scope',
        '$state',
        '$stateParams',
        'ArticleService',
        'constant',
        'toasty',
        function($scope, $state, $stateParams, ArticleService, constant, toasty) {
            $scope.query = {
                keyword: $stateParams.keyword,
                page: $stateParams.page,
                tag: $stateParams.tag
            };
            $scope.list = function(_query) {
                var query = _.extend($scope.query, _query);
                ArticleService.list(query).then(function(data) {
                    $scope.articles = data.msg.articles;
                    $scope.pagination = data.msg.pagination;
                    $scope.count = data.msg.count;
                });
            };

            $scope.init = function() {
                $scope.list();
            };

            $scope.toTop = function(article, flag) {
                ArticleService.toTop(article._id, flag).then(function(data) {
                    if (data.code === 200) {
                        toasty.success('操作成');
                        article.isTop = flag;
                    } else {
                        toasty.error(data.msg);
                    }
                });
            };
        }
    ]);
    app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {
        $stateProvider.state('articles', {
            url: '/articles?page&tag&keyword',
            templateUrl: '/site/tpls/articles/index.html',
            pageTitle: '文档列表',
            controller: 'ArticleListController'
        });
    }]);
};

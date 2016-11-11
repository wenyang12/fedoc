module.exports = function(app) {
    app.controller('ArticleListController', [
        '$scope',
        '$state',
        '$stateParams',
        'ArticleService',
        'constant',
        'toasty',
        function($scope, $state, $stateParams, ArticleService, constant, toasty) {

            $scope.list = function(_query) {
                var query = _.extend($scope.query, _query);
                $scope._loading = true;
                ArticleService.list(query).then(function(data) {
                    $scope._loading = false;
                    $scope.articles = data.msg.articles;
                    $scope.pagination = data.msg.pagination;
                    $scope.count = data.msg.count;
                });
            };

            $scope.init = function() {
                $scope.query = {
                    keyword: $stateParams.keyword,
                    page: $stateParams.page,
                    tag: $stateParams.tag
                };
                $scope.list();
            };
            $scope.initUser = function() {
                $scope.query = {
                    keyword: $stateParams.keyword,
                    page: $stateParams.page,
                    userId: $stateParams.userId
                };
                $scope.list();
            };

            $scope.del = function(article) {
                if (confirm('确认删除文档吗')) {
                    ArticleService.remove(article._id).then(function(data) {
                        if (data.code === 200) {
                            toasty.success('删除文档成功');
                            for (var i = 0, len = $scope.tags.length; i < len; i++) {
                                if ($scope.articles[i]._id === article._id) {
                                    $scope.articles.splice(i, 1);
                                    return;
                                }
                            }
                        }
                    });
                }
            };

            $scope.toTop = function(article, flag) {
                ArticleService.toTop(article._id, flag).then(function(data) {
                    if (data.code === 200) {
                        toasty.success('操作成功');
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
        }).state('viewUserArticles', {
            url: '/users/:userId/articles?page',
            templateUrl: '/site/tpls/articles/user.html',
            controller: 'ArticleListController',
            pageTitle: '文章'
        });;
    }]);
};

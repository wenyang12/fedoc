module.exports = function(myModule) {
    myModule.directive('hotArticles', [
        function factory() {
            var directive = {
                restrict: 'E', // 指令的使用方式，包括标签，属性，类，注释
                replace: 'true',
                templateUrl: '/site/modules/hot-articles/index.html',
                scope: true,
                controller: ['$scope', 'toasty', '$rootScope', 'ArticleService', '$stateParams', '$state', function($scope, toasty, $rootScope, ArticleService, $stateParams, $state) {
                    if (window.hotArticles) {
                        $scope.articles = window.hotArticles;
                    } else {
                        ArticleService.listHot().then(function(data) {
                            if (data.code === 200) {
                                window.hotArticles = data.msg.articles;
                                $scope.articles = data.msg.articles;
                            }
                        });
                    }
                }]
            };
            return directive;
        }
    ]);
};

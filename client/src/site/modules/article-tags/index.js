module.exports = function(myModule) {
    myModule.directive('articleTags', [
        function factory() {
            var directive = {
                restrict: 'E', // 指令的使用方式，包括标签，属性，类，注释
                replace: 'true',
                templateUrl: '/site/modules/article-tags/index.html',
                scope: false,
                controller: ['$scope', '$rootScope', 'TagService', '$stateParams', '$state', function($scope, $rootScope, TagService, $stateParams, $state) {
                    TagService.listAll().then(function(data) {
                        if (data.code === 200) {
                            $scope.tags = data.msg.tags;
                        }
                    });
                    $scope.tag = $stateParams.tag || '';

                    $scope.choose = function(tag) {
                        $scope.tag = tag;
                        $state.go('articles', {
                            tag: tag
                        });
                    };
                }]
            };
            return directive;
        }
    ]);
};
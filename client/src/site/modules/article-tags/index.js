module.exports = function(myModule) {
    myModule.directive('articleTags', [
        function factory() {
            var directive = {
                restrict: 'E', // 指令的使用方式，包括标签，属性，类，注释
                replace: 'true',
                templateUrl: '/site/modules/article-tags/index.html',
                scope: false,
                controller: ['$scope', 'toasty', '$rootScope', 'TagService', '$stateParams', '$state', function($scope, toasty, $rootScope, TagService, $stateParams, $state) {

                    TagService.listAll().then(function(data) {
                        if (data.code === 200) {
                            window.tags = data.msg.tags;
                            $scope.tags = data.msg.tags;
                        }
                    });

                    $scope.tag = $stateParams.tag || '';

                    $scope.choose = function($event, tag) {
                        $scope.tag = tag;
                        var opts = {
                            tag: tag
                        };
                        if (tag !== $stateParams.tag) {
                            opts.page = 1;
                        }
                        $state.go('articles', opts);
                        $event.stopPropagation();
                        return;
                    };

                    $scope.goWrite = function() {
                        if ($rootScope.user) {
                            $state.go('addArticle');
                        } else {
                            $state.go('signin');
                        }
                    };
                    $scope.delTag = function($event, tag) {
                        if (confirm('确认删除该分类吗')) {
                            TagService.remove(tag._id).then(function(data) {
                                if (data.code === 200) {
                                    toasty.success('删除分类成功');
                                    for (var i = 0, len = $scope.tags.length; i < len; i++) {
                                        if ($scope.tags[i]._id === tag._id) {
                                            $scope.tags.splice(i, 1);
                                            if ($scope.tag === tag.name) {
                                                $state.go('articles', {
                                                    tag: ''
                                                });
                                            }
                                            return;
                                        }
                                    }
                                }
                            });
                        }
                        $event.stopPropagation();
                        return;
                    };
                }]
            };
            return directive;
        }
    ]);
};

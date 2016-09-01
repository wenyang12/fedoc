module.exports = function(myModule) {
    myModule.directive('siteHeader', [
        function factory() {
            var directive = {
                restrict: 'E', // 指令的使用方式，包括标签，属性，类，注释
                replace: 'true',
                templateUrl: '/site/modules/header/index.html',
                link: function($scope) {
                    $scope.userMenus = [{
                        title: '管理',
                        subMenus: [{
                            title: '新增分类',
                            sref: 'addTag'
                        },{
                            title: '新增成员',
                            sref: 'addUser'
                        }, {
                            title: '成员列表',
                            sref: 'users'
                        }]
                    }];
                },
                scope: false,
                controller: ['$scope', '$rootScope', '$stateParams', '$state', '$http', '$loginModal', '$regModal', function($scope, $rootScope, $stateParams, $state, $http, $loginModal, $regModal) {

                    //监听 - 缩略图被点击
                    $scope.$on('userChange', function(event, data) {
                        if (data) {
                            $scope.user = data.user;
                        }
                    });
                    $scope.isLogin = function() {
                        $http({
                            method: 'post',
                            url: "/api/sign/isLogin"
                        }).
                        success(function(data, status, headers, config) {
                            if (data.code === 200) {
                                var user = data.msg.user;
                                $rootScope.user = user;
                                $scope.user = user;
                            }
                        });
                    };
                    $scope.isLogin();
                    $scope.searchBox = {
                        keyword: '',
                        active: false
                    };
                    $scope.searchKeyword = function() {
                        $state.go('articles', {
                            tag: $stateParams.tag,
                            page: $stateParams.page,
                            keyword: $scope.searchBox.keyword
                        });
                    };
                    $scope.signin = function() {
                        $loginModal.init();
                    };
                    $scope.reg = function() {
                        $regModal.init();
                    };
                    $scope.enableSearchBox = function() {
                        $scope.searchBox.active = true;
                        $('.j-search-box__input').focus();
                    };
                    $scope.disableSearchBox = function() {
                        $scope.searchBox.active = false;
                        $scope.searchBox.keyword = '';
                    };
                    $scope.signout = function($event) {
                        window.location.replace('\/api\/sign\/out');
                        $event.preventDefault();
                        $event.stopPropagation();
                        return false;
                    };
                }]
            };
            return directive;
        }
    ]);
};

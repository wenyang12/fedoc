module.exports = function(myModule) {
    myModule.service('$loginModal', ['$modalService', '$q',
        function factory($modalService, $q) {
            this.init = function(options) {
                options = options || {};
                var onLoginedCallback = options.onLogined;
                $modalService.show({
                    templateUrl: '/site/services/login-modal/index.html',
                    width: 600,
                    height: 600,
                    controller: ['$scope', '$rootScope', '$http', '$state', 'toasty', '$modalInstance',
                        function($scope, $rootScope, $http, $state, toasty, $modalInstance) {
                            $scope.close = function() {
                                $modalInstance.close();
                                if (onLoginedCallback) {
                                    onLoginedCallback();
                                }
                            };
                            $scope.login = function() {
                                $http({
                                    method: 'post',
                                    url: "/api/sign/login",
                                    data: {
                                        email: $scope.form.email || '',
                                        pwd: $scope.form.pwd || ''
                                    }
                                }).
                                success(function(data, status, headers, config) {
                                    if (data.code === 200) {
                                        var user = data.msg.user;
                                        $rootScope.user = user;
                                        toasty.success('登陆成功');
                                        $rootScope.$broadcast('userChange', {
                                            user: user
                                        });
                                        $scope.close();
                                    } else {
                                        toasty.error(data.msg);
                                    }
                                });
                            };
                        }
                    ]
                });
            };
        }
    ]);
};

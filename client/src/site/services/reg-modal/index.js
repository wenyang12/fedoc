module.exports = function(myModule) {
    myModule.service('$regModal', ['$modalService', '$q',
        function factory($modalService, $q) {
            this.init = function(options) {
                var delay = $q.defer();
                $modalService.show({
                    templateUrl: '/site/services/reg-modal/index.html',
                    width: 600,
                    height: 600,
                    controller: ['$scope', '$rootScope', '$http', '$state', 'toasty', '$modalInstance',
                        function($scope, $rootScope, $http, $state, toasty, $modalInstance) {
                            $scope.close = function() {
                                $modalInstance.close();
                            };
                            $scope.create = function() {
                                $http({
                                    method: 'post',
                                    url: "/api/sign/reg",
                                    data: {
                                        email: $scope.form.email || '',
                                        pwd: $scope.form.pwd || ''
                                    }
                                }).
                                success(function(data, status, headers, config) {
                                    if (data.code === 200) {
                                        var user = data.msg.user;
                                        $rootScope.user = user;
                                        toasty.success('注册成功');
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
                return delay.promise;
            };
        }
    ]);
};

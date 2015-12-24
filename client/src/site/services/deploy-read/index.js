 module.exports = function(myModule) {
  myModule.service('deployRead', ['$modalService', '$q',
        function factory($modalService, $q) {
            this.init = function(options) {
               var deploy = options.deploy;
                var delay = $q.defer();
                $modalService.show({
                    templateUrl: '/site/services/deploy-read/index.html',
                    width: 600,
                    height: 345,
                    controller: ['$scope', '$modalInstance', 
                        function($scope, $modalInstance) {
                            $scope.deploy = deploy;
                            $scope.close = function() {
                                $modalInstance.close();
                            };
                          
                        }
                    ]
                });
                return delay.promise;
            };
        }
    ]);
};
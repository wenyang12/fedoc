module.exports = function(myModule) {
    myModule.directive('userIcon', [
        function factory() {
            var directive = {
                restrict: 'E', // 指令的使用方式，包括标签，属性，类，注释
                replace: true, // //是否用模板替换当前元素，若为false，则append在当前元素上
                transclude: true, //是否将当前元素的内容转移到模板中
                scope: {
                    name: "@name"
                },
                templateUrl: '/site/modules/user-icon/index.html'
            };
            return directive;
        }
    ]);
};

module.exports = function(myModule) {

    var md = require('md')({
        html: true,
        linkify: true,
        typographer: true
    });
    var addLinkTarget = function(code) {
        var pattern = /a href=/g;
        return code.replace(pattern, "a target='_blank' href=");
    };
    myModule.
    directive('fedocMarkdown', ['$sanitize', function($sanitize) {
        return {
            restrict: 'AE',
            link: function(scope, element, attrs) {
                if (attrs.fedocMarkdown) {
                    scope.$watch(attrs.fedocMarkdown, function(newVal) {
                        var html = newVal ? $sanitize(md.render(newVal)) : '';
                        html = addLinkTarget(html);
                        element.html(html);
                    });
                } else {
                    var html = $sanitize(md.render(element.text()));
                    html = addLinkTarget(html);
                    element.html(html);
                }
            }
        };
    }]);

};

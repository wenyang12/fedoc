module.exports = function(myModule) {
  var markdown = require('assets/libs/markdown-it/dist/markdown-it')();
  myModule.
  directive('fedocMarkdown', ['$sanitize', function($sanitize) {
    return {
      restrict: 'AE',
      link: function(scope, element, attrs) {
        if (attrs.fedocMarkdown) {
          scope.$watch(attrs.fedocMarkdown, function(newVal) {
            var html = newVal ? $sanitize(markdown.render(newVal)) : '';
            element.html(html);
          });
        } else {
          var html = $sanitize(markdown.render(element.text()));
          element.html(html);
        }
      }
    };
  }]);
};
module.exports = function(myModule) {

 var markdown = window.markdownit();
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
 

  // myModule.
  // directive('fedocMarkdown', ['$sanitize', function($sanitize) {
  //   return {
  //     restrict: 'AE',
  //     link: function(scope, element, attrs) {
  //       if (attrs.fedocMarkdown) {
  //         scope.$watch(attrs.fedocMarkdown, function(newVal) {

  //           var  simplemde = new SimpleMDE({
  //             element:ele
  //           });
  //           var html = newVal ? $sanitize(simplemde.options.previewRender(newVal)) : '';
  //           element.html(html);
  //         });
  //       } else {
  //         var html = $sanitize(markdown.render(element.text()));
  //         element.html(html);
  //       }
  //     }
  //   };
  // }]);

};
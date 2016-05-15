angular.module('compileExample', [], function($compileProvider) {
    $compileProvider.directive('compile', function($compile) {
      return function(scope, element, attrs) {
        scope.$watch(
          function(scope) {
            return scope.$eval(attrs.compile);
          },
          function(value) {
            element.html(value);

            // compile the new DOM and link it to the current
            // scope.
            // NOTE: we only compile .childNodes so that
            // we don't get into infinite loop compiling ourselves
            $compile(element.contents())(scope);
          }
        );
      };
    });
  })
  .controller('GreeterController', ['$scope', function($scope) {
    $scope.name = 'Angular';
    $scope.html = 'Hello {{name}}';
    $scope.desc = 'Angular is awesome!!!';
  }]);
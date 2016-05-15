
var mod = angular.module('app', []);

mod.directive('veeraDetails', function () {
  return {
    restrict: 'E',
    scope: {},
    transclude: true,
    template: `
      <div class="summary" ng-click="open = !open">
        {{ open ? '&blacktriangledown;' : '&blacktriangleright;' }} Details
      </div>
      <div class="content" ng-show="open" ng-transclude></div>
    `
  };
});

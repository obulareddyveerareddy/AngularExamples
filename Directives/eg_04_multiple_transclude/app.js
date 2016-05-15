
var mod = angular.module('app', []);

mod.directive('veeraDetails', function () {
  return {
    restrict: 'E',
    scope: {},
    transclude: {
      'summarySlot': '?p',
    },
    templateUrl: "details.html"
  };
});

angular.module('app',['toaster', 'ui.router']);

angular.module('app').config(['$stateProvider', '$urlRouterProvider',function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('home'); 
  $stateProvider
    .state('home', {
      url: "/home",
      templateUrl: "partials/home.html"
    })
}]);

angular.module('app').controller('ScoreController',function($scope){
  $scope.setScore = 40;
});

angular.module('app').directive('score',function(){

  return{
    restrict: 'EA',
    scope: {},
    templateUrl:"./partials/score_tpl.html",
    link:function(scope, element, attributes){
      scope.setScore = attributes.setscore;
      scope.isThumbUp = true;
      scope.thumbUp = function(){
        scope.setScore = Number(scope.setScore) + 1;
        scope.isThumbUp = true;
      }
      scope.thumbDown = function(){
        scope.setScore = Number(scope.setScore) - 1;
        scope.isThumbUp = false;
      }
    }
  }

})
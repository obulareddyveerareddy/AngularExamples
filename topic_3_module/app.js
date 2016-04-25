angular.module('myApp',['ui.router']);
angular.module('myApp').config(['$stateProvider', '$urlRouterProvider',function($stateProvider, $urlRouterProvider){
	$stateProvider
    .state('home', {
      url: "/home",
      templateUrl: "./partials/home.html",
    })
    .state('about', {
      url: "/about-us",
      templateUrl: "./partials/about.html",
    })
}])
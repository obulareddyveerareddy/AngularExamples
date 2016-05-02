
angular.module('students',['toaster', 'ui.router']);

angular.module('students').config(['$stateProvider', '$urlRouterProvider',function($stateProvider, $urlRouterProvider){
	$urlRouterProvider.otherwise('home'); 
	$stateProvider
    .state('home', {
      url: "/home",
      templateUrl: "partials/home.html"
    })
}]);

angular.module('students').directive('helloTag',function(){

	return{
		restrict: 'EA',
		template:"<h2>Hello World !!!</h2>"
	}

})



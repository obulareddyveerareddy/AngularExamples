
var myApp = angular.module('app',['ui.router', 'ngStorage']);
myApp.constant('constantGreeting', 'Hello');
myApp.provider('Greeting', function() {
  this.setName = function(name) {
      this.name = name;
  };
  this.setConstant = function(constant) {
      this.constant = constant;
  };
  this.$get = function() {
    var self = this;
    return {
        getGreeting: function() {
            return self.constant + self.name + "!";
        }
    };
  };
});

myApp.config(['$stateProvider', '$urlRouterProvider', 'GreetingProvider', 'constantGreeting', '$rootScopeProvider', function($stateProvider, $urlRouterProvider, GreetingProvider, constantGreeting, $rootScopeProvider){
	constantGreeting = "I changed to Veera";
	GreetingProvider.setConstant(constantGreeting);
  	GreetingProvider.setName(' Provider, Myself Veera');
  	console.log(GreetingProvider.$get().getGreeting());

	$urlRouterProvider.otherwise('/');
	$stateProvider.state('/',{
		url:'/',
		templateUrl:'partials/login.html',
		controller:'LoginController'
	})
}]);

myApp.run(['$rootScope', 'Greeting', 'constantGreeting', function($rootScope, Greeting, constantGreeting){
	//GreetingProvider.setName(' Runner ');
	//Greeting.setConstant("constantGreeting");
  	//Greeting.setName(' Provider, Myself Veera');
	constantGreeting = "I changed at controller!!!";
	console.log(constantGreeting);
	console.log('Controller :::::::> '+Greeting.getGreeting());
}])

myApp.controller('LoginController', function($scope, $localStorage, LoginFact){

	$scope.onSubmitBtnClick = function(event){
		console.log($scope.userName+' <:---:> '+$scope.password);
		LoginFact.validateLogDetails($scope.userName, $scope.password).then(function(data){
			console.log(":::::::::::: LoginFact.validateLogDetails@Promise ::::::::::::::::");
			console.log(data);
			$localStorage.user = data;
		});
	}
})
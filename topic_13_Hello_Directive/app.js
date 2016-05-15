
angular.module('app',['toaster', 'ui.router']);

angular.module('app').config(['$stateProvider', '$urlRouterProvider',function($stateProvider, $urlRouterProvider){
	$urlRouterProvider.otherwise('home'); 
	$stateProvider
    .state('home', {
      url: "/home",
      templateUrl: "partials/home.html"
    })
    .state('register', {
      url: "/register",
      templateUrl: "partials/register.html"
    })
}]);


angular.module('app').controller('HelloNameCtrl',['$scope',function($scope){
	console.log('::::::::::: Welcome to HelloNameCtrl :::::::::::::');
	$scope.name = 'veera normalization';
	$scope.onSubmitClick = function(){
		console.log(':::: This is Submit button click @ controller :::::::::::::');
	}
}])

angular.module('app').directive('helloName',[function(){

	return {
    	restrict: 'EA',
    	link:function(scope, element, attributes){
			console.log(scope);
			console.log(element);

			$('#name').change(function(){
				var value = $('#name').val();
				element.text(value);	
			});
		}
	}

}]);

angular.module('app').directive('appNgClick',[function(){

	return {
    	restrict: 'A',
    	link:function(scope, element, attributes){
    		console.log(':::::::::::: appNgClick ::::::::::::::');
			console.log(scope);
			console.log(element);
			element.bind('click', function(){
				console.log(":::::::: Captured Click Event At directive :::::::::");
				scope.$apply('onSubmitClick()');
			});
		}
	}

}]);



angular.module('app').directive('displayName',[function(){

	return {
    	restrict: 'EACM',
    	template: 'Hello Veera'
	}

}]);
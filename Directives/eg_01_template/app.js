
angular.module('app',['toaster', 'ui.router']);

angular.module('app').config(['$stateProvider', '$urlRouterProvider',function($stateProvider, $urlRouterProvider){
	$urlRouterProvider.otherwise('home'); 
	$stateProvider
    .state('home', {
      url: "/home",
      templateUrl: "partials/home.html"
    })
}]);

angular.module('app').controller('StudentController',['$scope',function($scope){
	$scope.name = 'veera from StudentController';
	$scope.equalInc = 40;
	$scope.oneWayBind = 30;

	$scope.onIncOneWayBind = function(){
		console.log("---------------------- I am at @ ctrl::onDec() ----------------------");
		$scope.oneWayBind = $scope.oneWayBind + 1;
	}

	$scope.onInc = function(){
		console.log("---------------------- I am at @ ctrl::onInc() ----------------------");
		$scope.equalInc = $scope.equalInc + 1;
	}

	$scope.onDec = function(){
		console.log("---------------------- I am at @ ctrl::onDec() ----------------------");
		$scope.equalInc = $scope.equalInc - 1;
	}
}]);

angular.module('app').directive('displayName',[function(){
	return {
		scope:{
			inc:"@localInc",
			equalInc:"=inc",
			oneWayBind:"<",
			onInc:"&",
			onDec:"&"
		},
    	templateUrl: './partials/increment.html'
	}

}]);
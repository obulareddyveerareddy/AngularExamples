angular.module('myApp',[]);
angular.module('myApp').controller("EventController",['$scope', function($scope){
	$scope.count = 0;
	$scope.$on('MyEvent', function() {
		$scope.count++;
	});
}])
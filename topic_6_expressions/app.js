angular.module('myApp',[]);
angular.module('myApp').controller('Topic5Controller',['$scope',function($scope){
	console.log(':::::::::: Welcome to Topic5Controller ::::::::::');
	$scope.fullNameOne = "I am one time update";
	$scope.onConcatBtnClick = function(){
		$scope.fullNameOne = $scope.fname+$scope.lname;
		$scope.fullNameTwo = $scope.fname+$scope.lname;
		console.log('$scope.fullNameOne ::: '+$scope.fullNameOne);
		console.log('$scope.fullNameTwo ::: '+$scope.fullNameTwo);
	}

	$scope.onClearBtnClick = function(){
		$scope.fname = undefined;
		$scope.lname = undefined;
		$scope.fullNameOne = undefined;
		$scope.fullNameTwo = undefined;

	}
}])
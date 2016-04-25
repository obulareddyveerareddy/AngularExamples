angular.module('myApp',[]);
angular.module('myApp').controller('Topic5Controller',['$scope',function($scope){
	console.log(':::::::::: Welcome to Topic5Controller ::::::::::');
	$scope.onConcatBtnClick = function(){
		$scope.fullNameOne = $scope.fname+$scope.lname;
		$scope.fullNameTwo = $scope.fname+$scope.lname;
	}

	$scope.onClearBtnClick = function(){
		$scope.fname = undefined;
		$scope.lname = undefined;
		$scope.fullNameOne = undefined;
		$scope.fullNameTwo = undefined;

	}
}])
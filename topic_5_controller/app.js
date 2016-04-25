angular.module('myApp',[]);
angular.module('myApp').controller('Topic5Controller',['$scope',function($scope){
	console.log(':::::::::: Welcome to Topic5Controller ::::::::::');
	$scope.onConcatBtnClick = function(){
		$scope.fullName = $scope.fname+$scope.lname;
	}
}])
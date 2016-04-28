angular.module('myApp',['toaster']);
angular.module('myApp').controller('Topic7Controller',['$scope', 'toaster', function($scope,toaster){
	console.log(':::::::::: Welcome to Topic7Controller ::::::::::');
	$scope.authValue = Math.floor(100000 + Math.random() * 900000);
	$scope.onValidateBtnClick = function(){
		if($scope.authValue == $scope.randomValue){
			console.log(':::::::::::: Value is Successs :::::::::::');
			toaster.pop('success', "Message", 'Value is Successs');

		}else{
			console.log(':::::::::::: Please Re-Enter :::::::::::::');
			toaster.pop('error', "Message", 'Please Re-Enter');

		}
	}

	$scope.onRefreshBtnClick = function(){
		$scope.authValue = Math.floor(100000 + Math.random() * 900000);
	}
}])
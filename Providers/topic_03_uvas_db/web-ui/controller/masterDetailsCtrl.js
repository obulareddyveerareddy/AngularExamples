myApp.controller('MasterDetailsController',['$scope', 'StudentsApiService', 'toaster', '$state', function($scope, StudentsApiService, toaster, $state){
	
	console.log(':::::::::::::::::::::::> Welcome MasterDetailsController <::::::::::::::::::::::: ');
	StudentsApiService.getCourses().then(function(successResponse){
		$scope.coursesList = successResponse.data;
	})

	$scope.onNewMasterAddClick = function(){
		console.log(':::::::::: onNewMasterAddClick() :::::::::::');
		$state.go('AddNewMaster');	
	}

}]);
myApp.controller('AddNewMasterController',['$scope', 'StudentsApiService', 'toaster', '$state', function($scope, StudentsApiService, toaster, $state){
	
	console.log(':::::::::::::::::::::::> Welcome AddNewMasterController <::::::::::::::::::::::: ');
	StudentsApiService.getCourses().then(function(successResponse){
		$scope.coursesList = successResponse.data;
	})

	$scope.master = {};

}]);
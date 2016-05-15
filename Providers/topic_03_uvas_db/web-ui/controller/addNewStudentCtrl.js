myApp.controller('AddNewStudentController',['$scope', 'StudentsApiService', 'toaster', '$state', function($scope, StudentsApiService, toaster, $state){
	
	console.log(':::::::::::::::::::::::> Welcome AddNewStudentController <::::::::::::::::::::::: ');
	StudentsApiService.getCourses().then(function(successResponse){
		$scope.coursesList = successResponse.data;
	})

	$scope.studentRecord = {}

	$scope.onAddBtnClick = function(){
		StudentsApiService.setStudent($scope.studentRecord).then(function(data){
			console.log(data);
			$state.go('students');
		})
	}

}]);
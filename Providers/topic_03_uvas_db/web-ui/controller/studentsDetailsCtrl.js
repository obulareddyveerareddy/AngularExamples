
myApp.controller('StudensDetailController',['$scope', 'StudentsApiService', 'toaster', 'defaultCourse', 'defaultCourseByValue', '$state', function($scope, StudentsApiService, toaster, defaultCourse, defaultCourseByValue, $state){
	console.log(":::::::::::: defaultCourse@controller :::> "+defaultCourse);
	console.log(":::::::::::: defaultCourseByValue@controller :::> "+defaultCourseByValue);
	
	console.log(':::::::::::::::::::::::> Welcome StudensDetailController <::::::::::::::::::::::: ');
	StudentsApiService.getCourses().then(function(successResponse){
		console.log(":::::::::::::::::: getCourses()@Controller ::::::::::::::::::::::");
		console.log(successResponse);
		$scope.coursesList = successResponse.data;
	})

	$scope.onCourseSelection = function(){
		console.log('::::::::::::::> onCourseSelection <::::::::::::');
		console.log($scope.selectedCourse);
		StudentsApiService.getStudentsByCourseId($scope.selectedCourse.id).then(function(response){
			console.log(response);
		});
	}

	$scope.onNewStudentAddClick = function(){
		$state.go('AddNewStudent');
	}

}]);
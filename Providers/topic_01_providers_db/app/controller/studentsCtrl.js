myApp.controller('StudentController',['$scope', 'StudentApiService', 'defaultCourseId', function($scope, StudentApiService, defaultCourseId){

	console.log('::::::::::::::::::> StudentController <::::::::::::::::::');
	console.log(defaultCourseId);
	StudentApiService.getCourses().then(function(data){
		$scope.courses = data;
		console.log($scope.courses);
	})

}])
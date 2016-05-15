myApp.service('StudentApiService',['$http', function($http){

	console.log('::::::::::::::::::> StudentController <::::::::::::::::::');

	this.getCourses = function(){
		console.log(':::::::::::::::: StudentApiService@getCourses ::::::::::::::::');
		return $http.get('/uvas/courses');
	}

}])
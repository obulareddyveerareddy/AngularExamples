myApp.service('StudentsApiService', ['$http', '$q', function($http, $q){

	this.getCourses = function(){
		console.log(':::::: Fetch courses list from Node.JS Middleware ::::::');
		return $http.get('/uvas/courses');
	}
	this.getStudentsByCourseId = function(courseId){
		console.log(':::::: getStudentsByCourseId ::::::::> '+courseId);
		return $http.get('/uvas/students/'+courseId);
		//return $http.get('/uvas/course/students', {params:{courseId:courseId}});
	}

	this.setStudent = function(student){
		return $http.post('/uvas/add/student', student);
	}

}])

var myApp = angular.module('app',['ui.router']);

myApp.value('defaultCourseId',"1");
myApp.constant('courseId',"1");
myApp.config(['$stateProvider', '$urlRouterProvider', '$httpProvider', 'courseId', function($stateProvider, $urlRouterProvider, $httpProvider, courseId){
	console.log(courseId);	

	$urlRouterProvider.otherwise('/')
	$stateProvider
	.state('/',{
		url:'/',
		templateUrl:'./partials/dashboardView.html',
		controller:'DefaultController'
	})
	.state('students',{
		url:'/students',
		templateUrl:'./partials/studentsView.html',
		controller:'StudentController'
	})

	$httpProvider.interceptors.push('InterceptorFactory');
}])
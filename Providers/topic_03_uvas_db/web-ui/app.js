
var myApp = angular.module('app',['ui.router', 'toaster']);


myApp.constant('defaultCourse','Angular.JS');
myApp.value('defaultCourseByValue','JS');

myApp.config(['$stateProvider', '$urlRouterProvider', '$httpProvider', 'defaultCourse',  function($stateProvider, $urlRouterProvider, $httpProvider, defaultCourse){

	console.log('::::::::::: Constant @ Config defaultCourse :::::::::'+defaultCourse);
	$httpProvider.interceptors.push('InterceptorFactory');
	$httpProvider.defaults.headers.common['auth'] = "Application Level";

	$urlRouterProvider.otherwise('/');
	$stateProvider
	.state('students',{
		url:'/students',
		templateUrl:'./views/studentDetailView.html',
		controller:'StudensDetailController'
	})
	.state('AddNewStudent',{
		url:'/students/add',
		templateUrl:'./views/addNewStudentView.html',
		controller:'AddNewStudentController'
	})
	.state('master',{
		url:'/master',
		templateUrl:'./views/mastersDetailsView.html',
		controller:'MasterDetailsController'
	})
	.state('AddNewMaster',{
		url:'/master/add',
		templateUrl:'./views/addNewMasterView.html',
		controller:'AddNewMasterController'
	})

}]).run(['defaultCourseByValue',function(defaultCourseByValue){
	console.log("::::::::::::: I am run method ::::> "+defaultCourseByValue);
}])
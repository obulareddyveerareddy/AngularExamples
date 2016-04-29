
angular.module('students',['toaster', 'ui.router']);

angular.module('students').config(['$stateProvider', '$urlRouterProvider',function($stateProvider, $urlRouterProvider){
	$urlRouterProvider.otherwise('home'); 
	$stateProvider
    .state('home', {
      url: "/home",
      templateUrl: "partials/home.html",
      controller:"StudentsCtrl"
    })
    .state('register', {
      url: "/register",
      templateUrl: "partials/register.html"
    })
}]);


angular.module('students').controller('StudentsCtrl',['$scope','toaster', '$rootScope', function($scope, toaster, $rootScope){
	console.log('I am a StudentsCtrl controller');
	$scope.students = [];

	$scope.students.push({fname:'veera', lname:'obula', email:'veera@gmail.com', mobile:'9898239842'});
	$scope.students.push({fname:'amar', lname:'obula', email:'veera@gmail.com', mobile:'9898239842'});
	$scope.students.push({fname:'ramu', lname:'obula', email:'veera@gmail.com', mobile:'9898239842'});
	$scope.students.push({fname:'sai', lname:'obula', email:'veera@gmail.com', mobile:'9898239842'});
	$scope.students.push({fname:'santhosh', lname:'obula', email:'veera@gmail.com', mobile:'9898239842'});
	$scope.students.push({fname:'Sanjay', lname:'obula', email:'veera@gmail.com', mobile:'9898239842'});
	$scope.students.push({fname:'Krishnan', lname:'obula', email:'veera@gmail.com', mobile:'9898239842'});
	$scope.students.push({fname:'Sandeep', lname:'obula', email:'veera@gmail.com', mobile:'9898239842'});
	$scope.students.push({fname:'Ayush', lname:'obula', email:'veera@gmail.com', mobile:'9898239842'});
	$scope.students.push({fname:'Ravi', lname:'obula', email:'veera@gmail.com', mobile:'9898239842'});
	if(angular.isDefined($rootScope.student)){
		$scope.students.push($rootScope.student);
	}
}])

angular.module('students').controller('RegisterCtrl',['$scope','toaster', '$state', '$rootScope', 
								function($scope, toaster, $state, $rootScope){
	console.log('I am a RegisterCtrl controller');
	$scope.admin = "Veera";
	$scope.student = {};
	$scope.onRegisterBtnClick = function(){
		console.log('::::::::::::: Registed Successfully :::::::::::::');
		toaster.pop("success","Registed Successfully !!!")
		console.log($scope.student);
		$rootScope.student = $scope.student;
		$state.go('home');
	}
}])
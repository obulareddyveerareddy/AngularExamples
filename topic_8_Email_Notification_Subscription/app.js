
angular.module('notification',['toaster', 'ui.router']);

angular.module('notification').config(['$stateProvider', '$urlRouterProvider',function($stateProvider, $urlRouterProvider){
	$stateProvider
    .state('home', {
      url: "/home",
      templateUrl: "partials/home.html"
    })
    .state('subscribe', {
      url: "/subscribe",
      templateUrl: "partials/subscribe.html",
      controller:"NotificationCtrl"
    })
}]);


angular.module('notification').controller('NotificationCtrl',['$scope','toaster', function($scope, toaster){
	console.log('I am a NotificationCtrl controller');
	$scope.random = Math.floor(100000 + Math.random() * 900000);
	$scope.notify = {};

	$scope.onSubmitBtnClick = function(){
		if($scope.notify.randomValue == $scope.random){
			console.log('Your Email Registered in our noticication Queue');
			toaster.pop('success','Your Email Registered in our noticication Queue');
		}else{
			console.log('Please check random value entry');
			toaster.pop('error','Your Email Registered in our noticication Queue');
		}
	}

}])

var myApp = angular.module('app',[]);
myApp.directive('myDir',function(){

	return{
		transclude:{
			spanSlot='span'
		},
		template:"<span ng-transclude='spanSlot'></span> I am <span ng-transclude></span> !!!"
	}

});
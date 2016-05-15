myApp.directive('minAge', function() {
  return {
    require: 'ngModel',
    link: function(scope, elm, attrs, ctrl) {
      console.log('::::::::::::::: Min-Age :::::::::::::');
      console.log(scope)
      ctrl.$validators.age = function(modelValue, viewValue) {
        console.log(modelValue);
        console.log(viewValue);
        if(viewValue < 16){
          return false;
        }
        return true;
      };
    }
  };
});
myApp.directive('integer', function() {
  return {
    require: 'ngModel',
    link: function(scope, elm, attrs, ctrl) {
      var INTEGER_REGEXP = /^\-?\d+$/;
      ctrl.$validators.integer = function(modelValue, viewValue) {
        if (ctrl.$isEmpty(modelValue)) {
          console.log('consider empty models to be valid');
          return true;
        }

        if (INTEGER_REGEXP.test(viewValue)) {
          console.log('it is valid');
          return true;
        }

        console.log(' it is invalid');
        return false;
      };
    }
  };
});
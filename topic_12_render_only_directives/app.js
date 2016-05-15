
angular.module('app',['toaster']);

angular.module('app').directive('updateImage',function(){
  return{
    restrict: 'EA',
    link:function(scope, element, attributes){
      $('#sampleText').change(function () {
        element.text($('#sampleText').val());
      });
    }
  }
})
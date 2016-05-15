myApp.factory('LoginFact', function ($http, $q) {


	var fnValidateLogDetails = function (userName, password) {
      var deffer = $q.defer();
      $http.post('/blogger/check/user', {userName:userName, password:password}).then(function(data){
      	deffer.resolve(data);
      }, function(){
      	deffer.reject();
      });
      
      return deffer.promise;
    }

  return {
    validateLogDetails: fnValidateLogDetails
  }
});
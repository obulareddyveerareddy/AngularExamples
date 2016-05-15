myApp.factory('InterceptorFactory',[function(){

	console.log('::::::::::::::::::> StudentController <::::::::::::::::::');

	return {
	    request: function(config) {
	    	console.log('::::::::: request :::::::::');
	      return config;
	    },

	    requestError: function(config) {
	    	console.log('::::::::: requestError :::::::::');
	      return config;
	    },

	    response: function(res) {
	    	console.log('::::::::: response :::::::::');
	      return res;
	    },

	    responseError: function(res) {
	    	console.log('::::::::: responseError :::::::::');
	      return res;
	    }
	  }
}])
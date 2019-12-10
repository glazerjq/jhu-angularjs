(function () {
"use strict";

angular.module('public')
.directive('validShortName', ValidShortNameDirective);

ValidShortNameDirective.$inject = ['$http', '$q'];
function ValidShortNameDirective($http, $q) {
  return {
  	restrict: 'A',
  	require: 'ngModel',
  	link: function (scope, element, attr, ngModel) {
  		ngModel.$asyncValidators.validShortName = function(modelValue, viewValue) {
  			var defer = $q.defer();
  			$http({
		  		method: "GET",
		  		url: (`https://jglazer5.herokuapp.com/menu_items/${modelValue}.json`),
	  		}).then(function(response) {
	  			if (response.data) {
	  				defer.resolve();
	  			} else {
	  				defer.reject();
	  			}
	  		}).catch(function(error) {
	  			defer.reject();
	  		});
	  		return defer.promise;
  		}
  	}
  }  
}

})();

(function () {
"use strict";

angular.module('public')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['UserService', '$http'];
function MyInfoController(UserService, $http) {
  var $ctrl = this;

  $ctrl.user = UserService.getUser();
  if ($ctrl.user) {
  	$http({
		method: "GET",
		url: (`https://jglazer5.herokuapp.com/menu_items/${$ctrl.user.favDish}.json`),
	}).then(function(response) {
		if (response.data) {
			console.log(response.data);
	 		$ctrl.user.name = response.data.name;
	 		$ctrl.user.description = response.data.description;
		}
	});
  }

  console.log($ctrl);
}

})();

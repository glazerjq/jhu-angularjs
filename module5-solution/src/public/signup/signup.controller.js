(function () {
"use strict";

angular.module('public')
.controller('SignupController', SignupController);

SignupController.$inject = ['UserService'];
function SignupController(UserService) {
  var $ctrl = this;

  $ctrl.submit = function() {
  	UserService.setUser($ctrl.user);
  	$ctrl.completed = true;
  }
}

})();

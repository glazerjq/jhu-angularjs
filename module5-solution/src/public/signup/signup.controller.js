(function () {
"use strict";

angular.module('public')
.controller('SignupController', SignupController);

function SignupController() {
  var $ctrl = this;
  
  $ctrl.submit = function() {
  	console.log("HERE");
  	$ctrl.completed = true;
  	//https://jglazer5.herokuapp.com/menu_items/A1.json
  }
}

})();

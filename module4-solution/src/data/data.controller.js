(function() {
'use strict';

angular.module('MenuApp')
.controller('DataController', DataController);

DataController.$inject = ['categories'];
function DataController(categories) {
	var $ctrl = this;
	$ctrl.categories = categories;
}	

})();
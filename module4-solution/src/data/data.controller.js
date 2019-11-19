(function() {
'use strict';

angular.module('data')
.controller('DataController', DataController);

DataController.$inject = ['MenuDataService'];
function DataController() {
	var $ctrl = this;

	$ctrl.categories = MenuDataService.getAllCategories();

	$ctrl.items = function(category) { 
		MenuDataService.getItemsForCategory(category);
	};
}	

})();
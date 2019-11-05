
(function() {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService);

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController (MenuSearchService) {
	var narrowItDown = this;
	narrowItDown.found = [];

	narrowItDown.getMatchedMenuItems = function(searchTerm) {
	  MenuSearchService.getMatchedMenuItems(searchTerm).then(function(result) {
	  	narrowItDown.found = result;
	  });
	}
};

MenuSearchService.$inject = ['$http'];
function MenuSearchService($http) {
	var service = this;

	service.getMatchedMenuItems = function(searchTerm) {
	  return $http({
	  	method: "GET",
	  	url: ("https://davids-restaurant.herokuapp.com/menu_items.json")
	  }).then(function (result) {
    	console.log(result);
    	var foundItems = result.data.menu_items.filter(r => r.description.includes(searchTerm));
    	return foundItems;
	  });
	};
}

})();
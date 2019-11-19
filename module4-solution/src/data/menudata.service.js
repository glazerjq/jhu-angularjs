(function() {
'use strict';

angular.module('data', [])
.service('MenuDataService', MenuDataService);

MenuDataService.$inject = ['$http'];
function MenuDataService($http) {
	var service = this;

    // returns a promise using the following REST API endpoint: https://davids-restaurant.herokuapp.com/categories.json
	service.getAllCategories = function() {
		return $http({
			method: "GET",
			url: ("https://davids-restaurant.herokuapp.com/categories.json")
		});
	};

	// returns a promise using the following REST API endpoint: https://davids-restaurant.herokuapp.com/menu_items.json?category=<categoryShortName>.
	service.getItemsForCategory = function(categoryShortName) {
		return $http({
			method: "GET",
			url: ("https://davids-restaurant.herokuapp.com/menu_items.json"),
			params: {"category": categoryShortName}
		});
	}
}
})();
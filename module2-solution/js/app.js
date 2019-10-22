
(function() {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService)
.filter('angularCurrencyFilter', AngularCurrencyFilter);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController (ShoppingListCheckOffService) {
	var itemsToBuy = this;

	itemsToBuy.items = ShoppingListCheckOffService.getItemsToBuy();
	itemsToBuy.buyItem = function (index) {
		ShoppingListCheckOffService.buyItem(index)
	};
};

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController (ShoppingListCheckOffService) {
	var boughtItems = this;

	boughtItems.items = ShoppingListCheckOffService.getBoughtItems();
};

function ShoppingListCheckOffService() {
	var service = this;

	var toBuyItems = [
		{ name: "cookies", quantity: 10, pricePerItem: 1 },
		{ name: "chips", quantity: 2, pricePerItem: 1.5 },
		{ name: "coca cola", quantity: 5, pricePerItem: 1.25 },
		{ name: "crackers", quantity: 9, pricePerItem: 0.5 },
		{ name: "coffee", quantity: 1, pricePerItem: 3 }
	];
	var boughtItems = [];

	service.buyItem = function(index) {
		boughtItems.push(toBuyItems[index]);
		toBuyItems.splice(index, 1);
	}

	service.getItemsToBuy = function() { 
		return toBuyItems;
	}

	service.getBoughtItems = function() { 
		return boughtItems;
	}
}

AngularCurrencyFilter.$inject = ['$filter'];
function AngularCurrencyFilter($filter) {
  return function (value) {
    value = value || 0;
    value = "$$" + $filter('currency')(value)
    return value;
  }
}

})();
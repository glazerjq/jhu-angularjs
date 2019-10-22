
(function() {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController .$inject = ['ShoppingListCheckOffService'];
function ToBuyController (ShoppingListCheckOffService) {
	var itemsToBuy = this;

	itemsToBuy.items = ShoppingListCheckOffService.getItemsToBuy();
	itemsToBuy.buyItem = function (index) {
		ShoppingListCheckOffService.buyItem(index)
	};
};

AlreadyBoughtController .$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController (ShoppingListCheckOffService) {
	var boughtItems = this;

	boughtItems.items = ShoppingListCheckOffService.getBoughtItems();
};

function ShoppingListCheckOffService() {
	var service = this;

	var toBuyItems = [
		{ name: "cookies", quantity: 10 },
		{ name: "chips", quantity: 2 },
		{ name: "coca cola", quantity: 5 },
		{ name: "crackers", quantity: 9 },
		{ name: "coffee", quantity: 1 }
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

})();
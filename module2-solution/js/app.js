
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
	itemsToBuy.buyItem = ShoppingListCheckOffService.buyItem(itemIndex);
};

AlreadyBoughtController .$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController (ShoppingListCheckOffService) {
	var boughtItems = this;

	boughtItems.items = ShoppingListCheckOffService.getBoughtItems();
};

function ShoppingListCheckOffService() {
	var service = this;

	var toBuyItems = [];
	var boughtItems = [];

	service.buyItem = function(itemIndex) {
		boughtItems.push(toBuyItems[itemIndex]);
		toBuyItems.splice(itemIndex, 1);
	}

	service.getItemsToBuy = function() { 
		return toBuyItems;
	}

	service.getBoughtItems = function() { 
		return boughtItems;
	}
}

})();
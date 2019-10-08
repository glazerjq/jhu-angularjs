
(function() {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
	$scope.checkIfTooMuch = function () {
		if (!($scope.dishes)) {
			$scope.output = "Please enter data first";
			$scope.output_style = "text-danger border border-danger";
		} else if ($scope.dishes.split(',').filter(x => x.trim() != "").length <= 3) {
			$scope.output = "Enjoy!";
			$scope.output_style = "text-success border border-success";
		} else {
			$scope.output = "Too much!";
			$scope.output_style = "text-success border border-success";
		}
	}

	$scope.outputStyle
};

})();
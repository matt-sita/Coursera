(function () {
	'use strict';

	angular.module('FooBar', []).controller('BarFoo', BarFoo);

	BarFoo.$inject = ['$scope'];
	function BarFoo($scope) {
		$scope.result = "";
		$scope.input = "";
		$scope.customStyle = {};
		$scope.checkResult = function () {
			$scope.customStyle.border = { };
			$scope.customStyle.color = { };
			var words = $scope.input.split(',');
			var empty = EmptyOrWhiteSpaceItems(words);
			var amount = words.length - empty;
			if ($scope.input === "" || amount == 0) {
				changeColor("red");
				$scope.result = "Please enter data first";
			}
			else if (amount <= 3) {
				changeColor("green");
				$scope.result = "Enjoy!";
			} else {
				changeColor("green");
				$scope.result = "Too much!";
			}
		};
		//Private functions
		function changeColor(color) {
			$scope.customStyle.border = { "color": color, "border-style": "solid", "border-width": "1px" };
			$scope.customStyle.color = { "color": color };
		}
		function EmptyOrWhiteSpaceItems(array) {
			var count = 0;
			for (var i = 0; i < array.length; i++) {
				if (array[i].trim() === "") {
					count = count + 1;
				}
			}
			return count;
		}
	};

})();
(function () {
	'use strict';

	angular.module('FooBar', []).controller('BarFoo', BarFoo);

	BarFoo.$inject = ['$scope'];
	function BarFoo($scope) {
		$scope.result = "";
		$scope.input = "";
		$scope.customStyle = {};
		$scope.checkResult = function () {
			$scope.customStyle.style = { "color": "green", "border-style":"solid", "border-width":"1px" }; //Inherently keep green
			var words = $scope.input.split(',');
			var empty = 0;
			for (var i = 0; i < words.length; i++) {
				if (words[i].trim() === "") {
					empty = empty + 1;
				}
			}
			var amount = words.length - empty;
			if ($scope.input === "" || amount == 0) {
				$scope.customStyle.style = { "color": "red", "border-style": "solid", "border-width": "1px" };
				$scope.result = "Please enter data first";
			}
			else if (amount <= 3) {
				$scope.result = "Enjoy!";
			} else {
				$scope.result = "Too much!";
			}
		};
	};

})();
(function () {
	'use strict';

	angular.module('FooBar', []).controller('BarFoo', BarFoo);

	BarFoo.$inject = ['$scope'];
	function BarFoo($scope) {
		$scope.result = "";
		$scope.input = "";

		$scope.checkResult = function () {
			if (input.split(',').length == 0) {
				result = "Please enter data first";
			}
			else if (input.split(',').length <= 3) {
				result = "Enjoy!";
			} else {
				result = "Too much!";
			}
		};
	};

})();
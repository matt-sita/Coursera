(function () {
	'use strict';

	angular.module('FooBar', []).controller('BarFoo', BarFoo);

	BarFoo.$inject = ['$scope'];
	function BarFoo($scope) {
		$scope.result = "";
		$scope.input = "";

		$scope.checkResult = function () {
			if ($scope.input.split(',').length == 0) {
				$scope.result = "Please enter data first";
			}
			else if ($scope.input.split(',').length <= 3) {
				$scope.result = "Enjoy!";
			} else {
				$scope.result = "Too much!";
			}
		};
	};

})();
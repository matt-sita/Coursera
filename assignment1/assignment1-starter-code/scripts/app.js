(function () {
	'use strict';

	angular.module('FooBar', []).controller('BarFoo', BarFoo);

	BarFoo.$inject = ['$scope'];
	function BarFoo($scope) {
		$scope.name = "FooBar";

		$scope.sayMessage = function () {
			return "BarFoo";
		};
	};

})();
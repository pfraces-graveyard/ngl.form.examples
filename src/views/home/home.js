angular.module('view.home', [])

.directive('viewHome', function () {
  'use strict';

  var controller = function ($scope) {
    $scope.title = 'Home';
  };

  return {
    scope: true,
    controller: controller,
    templateUrl: 'home/home.html'
  };
});

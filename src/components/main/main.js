angular.module('app.main', [])

.directive('appMain', function () {
  'use strict';

  var controller = function ($scope) {
    $scope.title = 'form';
  };

  return {
    controller: controller,
    templateUrl: 'main/main.html'
  };
});


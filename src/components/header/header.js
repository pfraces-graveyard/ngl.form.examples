angular.module('app.header', [])

.directive('appHeader', function () {
  'use strict';

  var controller = function ($scope) {
    $scope.title = 'ngl.form examples';
  };

  return {
    scope: true,
    controller: controller,
    templateUrl: 'header/header.html'
  };
});

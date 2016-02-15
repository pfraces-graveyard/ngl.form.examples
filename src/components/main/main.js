angular.module('app.main', [
  'app.log',      // <app-log>
  'app.standard', // <app-standard>
  'app.ngl'       // <app-ngl>
])

.directive('appMain', function () {
  'use strict';

  var controller = function ($scope) {
    $scope.title = 'ngl.form examples';
  };

  return {
    scope: true,
    controller: controller,
    templateUrl: 'main/main.html'
  };
});

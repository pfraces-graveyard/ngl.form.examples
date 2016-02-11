angular.module('app.main', [
  'app.standard', // <app-standard>
  'app.ngl',      // <app-ngl>
  'app.log'       // <app-log>
])

.directive('appMain', function () {
  'use strict';

  var controller = function () {};

  return {
    scope: true,
    controller: controller,
    templateUrl: 'main/main.html'
  };
});

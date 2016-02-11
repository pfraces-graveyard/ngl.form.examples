angular.module('app.main', [
  'app.standard', // <app-standard>
  'app.ngl'       // <app-ngl>
])

.directive('appMain', function () {
  'use strict';

  return {
    templateUrl: 'main/main.html'
  };
});

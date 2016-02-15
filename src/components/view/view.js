angular.module('app.view', [
  'view.login', // <view-login>
  'view.home'   // <view-home>
])

.directive('appView', function () {
  'use strict';

  var controller = function () {};

  return {
    scope: true,
    controller: controller,
    templateUrl: 'view/view.html'
  };
});

angular.module('view.login', [
  'view.login.standard', // <view-login-standard>
  'view.login.ngl'       // <view-login-ngl>
])

.directive('viewLogin', function () {
  'use strict';

  var controller = function () {};

  return  {
    scope: true,
    controller: controller,
    templateUrl: 'login/login.html'
  };
});

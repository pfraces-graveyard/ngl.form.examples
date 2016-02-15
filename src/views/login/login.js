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
})

.factory('viewLogin', function ($injector) {
  'use strict';

  var $location = $injector.get('$location');
  var appLogFields = $injector.get('appLogFields');

  var viewLogin = function (fields) {
    appLogFields(fields);
    $location.path('/home');
  };

  return viewLogin;
});

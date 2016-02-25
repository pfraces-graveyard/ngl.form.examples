angular.module('app.login', [
  'app.log' // appLogFields
])

.factory('appLogin', function ($injector) {
  'use strict';

  var $location = $injector.get('$location');
  var appLogFields = $injector.get('appLogFields');

  var appLogin = function (fields) {
    appLogFields(fields);
    $location.path('/home');
  };

  return appLogin;
});

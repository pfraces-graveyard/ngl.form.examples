angular.module('view.login.ngl', [
  'app.request', // appRequest
  'app.login',   // appLogin
  'ngl.form'     // <ngl-form>, <ngl-form-input>
])

.directive('viewLoginNgl', function ($injector) {
  'use strict';

  var appRequest = $injector.get('appRequest');
  var appLogin = $injector.get('appLogin');

  var controller = function ($scope) {
    $scope.submit = appLogin;
    $scope.title = '<ngl-form> + <ngl-form-input>';
    $scope.fields = [];

    appRequest.fields()
    .then(function (response) { $scope.fields = response.data; });
  };

  return {
    scope: true,
    controller: controller,
    templateUrl: 'login/ngl/ngl.html'
  };
});

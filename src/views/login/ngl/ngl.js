angular.module('view.login.ngl', [
  'app.request', // appRequest
  'app.log',     // appLogFields
  'ngl.form'     // <ngl-form-submit>, <ngl-form-password>
])

.directive('viewLoginNgl', function ($injector) {
  'use strict';

  var appRequest = $injector.get('appRequest');
  var viewLogin = $injector.get('viewLogin');

  var controller = function ($scope) {
    $scope.submit = viewLogin;
    $scope.title = '<ngl-form-submit> + <ngl-form-password>';
    $scope.fields = [];

    appRequest.fields()
    .then(function (request) { $scope.fields = request.data; });
  };

  return {
    scope: true,
    controller: controller,
    templateUrl: 'login/ngl/ngl.html'
  };
});

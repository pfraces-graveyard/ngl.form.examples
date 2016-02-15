angular.module('app.ngl', [
  'app.request', // appRequest
  'app.log',     // appLogFields
  'ngl.form'     // <ngl-form-submit>, <ngl-form-password>
])

.directive('appNgl', function ($injector) {
  'use strict';

  var appRequest = $injector.get('appRequest');
  var appLogFields = $injector.get('appLogFields');

  var controller = function ($scope) {
    $scope.submit = function () {
      appLogFields($scope.fields);
    };

    $scope.fields = [];

    appRequest.fields()
    .then(function (request) { $scope.fields = request.data; });
  };

  return {
    scope: true,
    controller: controller,
    templateUrl: 'ngl/ngl.html'
  };
});

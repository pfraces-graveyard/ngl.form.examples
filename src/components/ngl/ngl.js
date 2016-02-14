angular.module('app.ngl', [
  'ngl.form', // <ngl-form-submit>, <ngl-form-password>
  'app.log'   // appLogFields
])

.directive('appNgl', function ($injector) {
  'use strict';

  var $http = $injector.get('$http');
  var appLogFields = $injector.get('appLogFields');

  var controller = function ($scope) {
    $scope.submit = function () {
      appLogFields($scope.fields);
    };

    $scope.fields = [];

    $http.get('api/fields')
    .then(function (request) { $scope.fields = request.data; });
  };

  return {
    scope: true,
    controller: controller,
    templateUrl: 'ngl/ngl.html'
  };
});

angular.module('app.ngl', [
  'ngl.form' // <ngl-form-submit>, <ngl-form-password>
])

.directive('appNgl', function ($http, $log) {
  'use strict';

  var controller = function ($scope) {
    var submit = function () {
      $log.log($scope.fields);
    };

    $http.get('api/fields')
    .then(function (request) { $scope.fields = request.data; });

    angular.extend($scope, {
      submit: submit
    });

    $scope.fields = [];
  };

  return {
    controller: controller,
    templateUrl: 'ngl/ngl.html'
  };
});

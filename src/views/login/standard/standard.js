angular.module('view.login.standard', [
  'app.request', // appRequest
  'app.log'      // appLogFields
])

.directive('viewLoginStandard', function ($injector) {
  'use strict';

  var appRequest = $injector.get('appRequest');
  var appLogFields = $injector.get('appLogFields');

  var controller = function ($scope) {
    $scope.submit = function () {
      appLogFields($scope.fields);
    };

    $scope.title = 'Standard form';
    $scope.fields = [];

    appRequest.fields()
    .then(function (request) { $scope.fields = request.data; });
  };

  return {
    scope: true,
    controller: controller,
    templateUrl: 'login/standard/standard.html'
  };
});

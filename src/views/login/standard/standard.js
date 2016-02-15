angular.module('view.login.standard', [
  'app.request', // appRequest
  'app.log'      // appLogFields
])

.directive('viewLoginStandard', function ($injector) {
  'use strict';

  var appRequest = $injector.get('appRequest');
  var viewLogin = $injector.get('viewLogin');

  var controller = function ($scope) {
    $scope.submit = viewLogin;
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

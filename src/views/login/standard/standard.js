angular.module('view.login.standard', [
  'app.request', // appRequest
  'app.login'    // appLogin
])

.directive('viewLoginStandard', function ($injector) {
  'use strict';

  var appRequest = $injector.get('appRequest');
  var appLogin = $injector.get('appLogin');

  var controller = function ($scope) {
    $scope.submit = appLogin;
    $scope.title = 'Standard form';
    $scope.fields = [];

    appRequest.fields()
    .then(function (response) { $scope.fields = response.data; });
  };

  return {
    scope: true,
    controller: controller,
    templateUrl: 'login/standard/standard.html'
  };
});

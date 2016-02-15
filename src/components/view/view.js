angular.module('app.view', [
  'ngRoute',    // <ng-view>, $routeProvider
  'view.login', // <view-login>
  'view.home'   // <view-home>
])

.directive('appView', function () {
  'use strict';

  var controller = function () {};

  return {
    scope: true,
    controller: controller,
    templateUrl: 'view/view.html'
  };
})

.config(function ($routeProvider) {
  'use strict';

  $routeProvider
  .when('/login', { template: '<div data-view-login></div>' })
  .when('/home', { template: '<div data-view-home></div>' })
  .otherwise({ redirectTo: '/login' });
});

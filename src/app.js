angular.module('app', [
  'templates', // pre-compiled html partials
  'app.main'   // <app-main>
])

.config(function ($locationProvider) { $locationProvider.html5Mode(true); });

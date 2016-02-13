angular.module('app.log', [])

.factory('appLogCache', function () {
  'use strict';

  return [];
})

.factory('appLog', function ($injector) {
  'use strict';

  var appLogCache = $injector.get('appLogCache');

  var log = function (msg) {
    if (typeof msg !== 'string') { msg = angular.toJson(msg, 2); }
    appLogCache.push(msg);
  };

  return log;
})

.directive('appLog', function ($injector) {
  'use strict';

  var appLogCache = $injector.get('appLogCache');

  var controller = function ($scope) {
    $scope.log = appLogCache;
  };

  return {
    scope: true,
    controller: controller,
    templateUrl: 'log/log.html'
  };
});

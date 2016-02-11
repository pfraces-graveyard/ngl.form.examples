angular.module('app.logFields', [
  'ngl.lodash', // lodash
  'app.log'     // appLog
])

.factory('appLogFields', function ($injector) {
  'use strict';

  var lodash = $injector.get('lodash');
  var appLog = $injector.get('appLog');

  var fieldsFmt = function (fields) {
    return lodash
      .chain(fields)
      .keyBy('label')
      .mapValues('value')
      .value();
  };

  var logFields = function (fields) {
    appLog(fieldsFmt(fields));
  };

  return logFields;
});

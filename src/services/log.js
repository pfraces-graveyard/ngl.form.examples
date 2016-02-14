angular.module('app.log', [
  'ngl.lodash', // lodash
  'ngl.log'     // nglLog
])

.factory('appLogFields', function ($injector) {
  'use strict';

  var lodash = $injector.get('lodash');
  var nglLog = $injector.get('nglLog');

  var fieldsFmt = function (fields) {
    return lodash
      .chain(fields)
      .keyBy('label')
      .mapValues('value')
      .value();
  };

  var logFields = function (fields) {
    nglLog(fieldsFmt(fields));
  };

  return logFields;
});

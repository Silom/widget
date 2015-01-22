'use strict';

var angular = require('angular-bsfy');

var widgetApp = angular.module('ngWidget', [])


widgetApp.directive('ngWidget', function () {
  return {
    restrict: 'E',
    scope: {
      showDevbar: '@'
    },
    template: require('./widget.jade'),
    link: function (scope, elem, attr) {
      scope.showDevbar = true

    }
  }
})


module.exports = widgetApp

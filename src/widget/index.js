'use strict';

var widgetApp = angular.module('ngWidget', [])

widgetApp.directive('ngWidget', function () {
  return {
    restrict: 'E',
    transclude: true,
    replace: true,
    scope: {
      showDevbar: '@'
    },
    template: require('./widget.jade'),
    link: function ($scope, $elem, $attr) {

      if ($attr.showDevbar)
        $scope.showDevbar = true


    }
  }
})


module.exports = widgetApp

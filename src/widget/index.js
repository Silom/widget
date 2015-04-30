'use strict';

var widgetApp = angular.module('ngWidget', [require('./components/local-storage.js').name])

// Loops widgets and gets
widgetApp.directive('ngWidgetRender', function (localStorageService) {
  return {
    restrict: 'E',
    replace: true,
    scope: {
      theme: '@',// A Css class for styles
      storagePrefix: '@'// Separate widgets logical from each other
    },
    template: '<div></div>',
    link: function ($scope, $elem, $attr) {
      function addWidget() {}
    }
  }
})


widgetApp.directive('ngWidget', function () {

  return {
    restrict: 'E',
    transclude: true,
    replace: true,
    scope: {},
    template: require('./widget.jade'),
    link: function ($scope, $elem, $attr) {


      function deleteSelf() {}
      function updateSelf() {} // change behaviour (e.g. Text, API resource)
    }
  }
})

module.exports = widgetApp

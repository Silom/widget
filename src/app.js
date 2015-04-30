'use strict';

var angular = require('angular-bsfy')
var widgetApp = require('./widget')

var app = angular.module('demoapp', [ widgetApp.name ])


app.controller('appInformationCtrl', function ($scope) {
  $scope.editorActive = true
})

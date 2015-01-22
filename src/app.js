'use strict';

var angular = require('angular-bsfy')
var manifest = require('./manifest.js')
var widgetApp = require('./widget')

var app = angular.module('demoapp', [ widgetApp.name ])


// require all the features that are given by the manifest

'use strict';

var angular = require('angular-bsfy')
var widgetApp = require('./widget')

var app = angular.module('demoapp', [ widgetApp.name ])


// require all the features that are given by the manifest


/*
// Config brainstorming (need to split in manifest and widget config, so I can inherit)
{
  // Glyph {} | null (title fallback)
  glyph: {
    close: 'fa-close',
    options: 'fa-option'
  },

  // those are the defaults
  actions: {
    // Comes in
    close: true,
    persist: true,
    setOrder: true,// simple form for drag
    animations: true,// for all kind of stuff, maybe even break it down to every single animation
    // maybe as well
    drag: true,
    resize: false,
  }
}
*/


// alternativ kann ich das mit web components bauen

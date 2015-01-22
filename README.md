# Project base

### Development

Gulp; Used as build Tool.
Jade; For templating and faster HTML development.
Browserify; For faster JavaScript development and modularization.
(Less | Sass); For fast CSS development and realization of themes.

### Outcome

HTML; Project uses HTML5 features.
JavaScript; One big valid JavaScript file, due Browserify (It bundles the requirements into a scope, so the JavaScript runtime can make a use of the code).
CSS; For themes alignment.

At the end I should have 3 files.


# Widget features

* Manifest with feature activation.
* Display list from array.
* Set styles (size in percent, color theme)

The base of Widget implementation is the manifest, that means we need to render a widget with ng-repeats.


# Advanced ideas

Use frame as example, to show the modularization implementation.

E.g.

* Show all users
* Show login activity

Drag and Drop widgets.




ng-widget( type="{list | graph etc.}"  theme="[class-of-theme]" data="{object}" )
  // Here I can use requires and transcludes
  list( filter="{poperty:regex}" )
  graph( draw="cordinates" )

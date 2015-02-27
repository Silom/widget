'use strict';

var gulp = require('gulp')

// Load all plugins once
var plugins = {
  gutil: require('gulp-util'),
  browserify: require('browserify'),
  exorcist: require('exorcist'),
  autoprefixer: require('gulp-autoprefixer'),
  plumber: require('gulp-plumber'),
  watch: require('gulp-watch'),
  watchify: require('watchify'),
  sass: require('gulp-sass'),
  jadeify: require('jadeify'),
  jade: require('gulp-jade'),
  rm: require('rimraf'),
  source: require('vinyl-source-stream'),
  transform: require('vinyl-transform')
}

gulp.configs = {
  isProduction: plugins.gutil.env.dev ? false : true,
  sourceMap: plugins.gutil.env.dev ? true : false
}

//- Sources
var sources = {}
// Global selector
sources.styles = './src/**/*.scss'
sources.docs = './src/**/*.jade'
sources.js = './src/**/*.js'

// Init selector
sources.root = {}
sources.root.docs = './src/index.jade'
sources.root.js = './src/app.js'
sources.root.style = './src/styles/bundle.scss'

//- Destinations
var dest = {}

// Build path
dest.root = gulp.configs.isProduction ? './build/prod/' : './build/dev/'

dest.docs = dest.root
dest.styles = dest.root + 'css/'
dest.js = dest.root + 'js/'

// build and watch tasks
require('./gulp/utils')(gulp, plugins, sources, dest)
require('./gulp/sass')(gulp, plugins, sources, dest)
require('./gulp/jade')(gulp, plugins, sources, dest)
require('./gulp/browserify')(gulp, plugins, sources, dest)

// Main trigger with dev switch
gulp.task('default', ['clean'], function () {
  gulp.configs.isProduction ? gulp.start('app:build') : gulp.start('app:dev')
})

gulp.task('app:build', function () {
  gulp.start(['browserify:build', 'jade:build', 'sass:build'])
})

gulp.task('app:dev', function () {
  gulp.start(['jade:watch', 'sass:watch', 'browserify:watch'])
})

'use strict';

var gulp = require('gulp')

// Load all plugins once
var plugins = {
  gutil: require('gulp-util'),
  browserify: require('browserify'),
  babelify: require('babelify'),
  exorcist: require('exorcist'),
  autoprefixer: require('gulp-autoprefixer'),
  plumber: require('gulp-plumber'),
  watch: require('gulp-watch'),
  watchify: require('watchify'),
  sass: require('gulp-sass'),
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
sources.styles = './styles/**/*.scss'
sources.docs = './src/**/*.html'
sources.js = './src/**/*.js'
sources.fa = './node_modules/font-awesome/fonts/**'

// Init selector
sources.root = {}
sources.root.docs = './index.html'
sources.root.js = './src/app.js'
sources.root.style = './styles/bundle.scss'

//- Destinations
var dest = {}

// Build path
dest.root = gulp.configs.isProduction ? './build/prod/' : './build/dev/'

dest.docs = dest.root
dest.styles = dest.root + 'css/'
dest.js = dest.root + 'js/'
dest.fa = dest.root + 'fonts/'

// build and watch tasks
require('./gulp/utils')(gulp, plugins, sources, dest)
require('./gulp/sass')(gulp, plugins, sources, dest)
require('./gulp/html')(gulp, plugins, sources, dest)
require('./gulp/browserify')(gulp, plugins, sources, dest)
require('./gulp/font-awesome.js')(gulp, plugins, sources, dest)

// Main trigger with dev switch
gulp.task('default', ['clean'], function () {
  gulp.configs.isProduction ? gulp.start('app:build') : gulp.start('app:dev')
})

gulp.task('app:build', function () {
  gulp.start(['browserify:build', 'html:build', 'sass:build', 'fa:build'])
})

gulp.task('app:dev', function () {
  gulp.start(['html:watch', 'sass:watch', 'browserify:watch', 'fa:build'])
})

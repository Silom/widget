'use strict';

module.exports = function (gulp, plugins, sources, destinations) {
  gulp.task('sass:build', function() {
    gulp.src(sources.root.style)
    .pipe(plugins.plumber())
    .pipe(plugins.sass())
    .pipe(plugins.autoprefixer({
      browsers: ['last 2 versions']
    }))
    .pipe(gulp.dest(destinations.styles))
  })

  gulp.task('sass:watch', ['sass:build'], function() {
    plugins.watch(sources.styles, function () {
      gulp.start('sass:build')
    })
  })
}

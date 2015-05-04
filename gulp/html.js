'use strict';

module.exports = function (gulp, plugins, sources, destinations) {
  gulp.task('html:build', function() {
    gulp.src(sources.root.docs)
    .pipe(plugins.plumber())
    .pipe(gulp.dest(destinations.docs))
  })

  gulp.task('html:watch', ['html:build'], function() {
    plugins.watch(sources.docs, function () {
      gulp.start('html:build')
    })
  })
}

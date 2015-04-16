'use strict';

module.exports = function (gulp, plugins, sources, destinations) {
  gulp.task('fa:build', function() {
    gulp.src(sources.fa)
    .pipe(plugins.plumber())
    .pipe(gulp.dest(destinations.fa))
  })
}

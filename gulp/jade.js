'use strict';

module.exports = function (gulp, plugins, sources, destinations) {
  gulp.task('jade:build', function() {
    gulp.src(sources.root.docs)
    .pipe(plugins.plumber())
    .pipe(plugins.jade({
      pretty: gulp.configs.isProduction ? false : true
    }))
    .pipe(gulp.dest(destinations.root))
  })

  gulp.task('jade:watch', ['jade:build'], function() {
    plugins.watch(sources.docs, function () {
      gulp.start('jade:build')
    })
  })
}

var gulp        = require('gulp')
  , plugins     = require('gulp-load-plugins')()
  , utils       = plugins.loadUtils(['log', 'colors'])
  , paths       = require('./gulp.config.json')
  , browserSync = require('browser-sync')
  , reload      = browserSync.reload;

// gulp.task('vendorjs', function() {
//   utils.log(utils.colors.black.bgGreen('Vendor JavaScript'));

//   gulp.src(paths.src.vendorjs)
//     .pipe(plugins.changed(paths.build.vendorjs))
//     .pipe(gulp.dest(paths.build.vendorjs))
//     .pipe(reload({stream: true}));
// });

// gulp.task('app', function() {
//   utils.log(utils.colors.black.bgGreen('App'));

//   gulp.src(paths.src.app)
//     .pipe(plugins.changed(paths.build.app))
//     .pipe(gulp.dest(paths.build.app))
//     .pipe(reload({stream: true}));
// });

gulp.task('root_frontend', function() {
  utils.log(utils.colors.black.bgGreen('Root - Front-End'));

  gulp.src(paths.src.root_frontend)
    .pipe(plugins.changed(paths.build.root_frontend))
    .pipe(gulp.dest(paths.build.root_frontend))
    .pipe(reload({stream: true}));
});

gulp.task('package_json', function() {
  utils.log(utils.colors.black.bgGreen('package.json'));

  gulp.src(paths.src.package_json)
    .pipe(gulp.dest(paths.build.package_json));
});

gulp.task('b-s', function() {
  browserSync({
    server: {
      baseDir: './build/frontend/'
    },
    open: false
  });

  gulp.watch(paths.src.root_frontend, ['root_frontend']);
});

gulp.task('default', ['root_frontend', 'package_json', 'b-s']);
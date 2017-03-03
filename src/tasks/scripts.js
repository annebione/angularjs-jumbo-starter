'use strict';

let gulp        = require('gulp');
let gutil       = require('gulp-util');
let babel       = require('gulp-babel');
let annotate    = require('gulp-ng-annotate');
let sourcemaps  = require('gulp-sourcemaps');
let config      = require('./gulp.config.js');
let plumber     = require('gulp-plumber');
let concat      = require('gulp-concat');
let uglify      = require('gulp-uglify');

gulp.task('scripts', function() {
  return gulp
    .src(config.scripts.src)
    .pipe(plumber({ errorHandler: onError }))
    .pipe(sourcemaps.init())
    .pipe(annotate())
    .pipe(babel())
    .pipe(concat('app.js'))
    .pipe(uglify({mangle: false}))
    .pipe(sourcemaps.write({sourceRoot: '../src/app'}))
    .pipe(gulp.dest(config.scripts.dest));
});

function onError(err) {
  var message;
  switch (err.plugin) {
    default:
      message = new gutil.PluginError(err.plugin, err.message).toString();
      process.stderr.write(message + '\n');
  }
  gutil.beep();
}

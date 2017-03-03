'use strict';
/**
 * Validate and compile view templates in Jade, to html
 */

let gulp    = require('gulp');
let gutil   = require('gulp-util');
let flatten = require('gulp-flatten');
let config  = require('./gulp.config.js');
let plumber = require('gulp-plumber');

gulp.task('views', function() {
  return gulp
    .src(config.views.src)
    .pipe(plumber({ errorHandler: onError }))
    .pipe(gulp.dest(config.views.dest));
});

function onError(err) {
  var message = new gutil.PluginError(err.plugin, err.message).toString();
  process.stderr.write(message + '\n');
  gutil.beep();
}

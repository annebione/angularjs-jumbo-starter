'use strict';

let gulp    = require('gulp');
let config  = require('./gulp.config.js');
let webp    = require('gulp-webp')

gulp.task('images', imagesTask);



function imagesTask() {
  gulp
    .src(config.images.src)
    .pipe(webp())
    .pipe(gulp.dest(config.images.dest));
}

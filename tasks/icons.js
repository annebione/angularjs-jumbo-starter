'use strict';

let gulp    = require('gulp');
let config  = require('./gulp.config.js');

gulp.task('icons', iconsTask);

function iconsTask() {
  gulp
    .src(config.icons.src)
    .pipe(gulp.dest(config.icons.dest));
}

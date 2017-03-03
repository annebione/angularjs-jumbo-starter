'use strict';

let gulp    = require('gulp');
let config  = require('./gulp.config.js');
let sync    = require('gulp-sync')(gulp);

gulp.task('watch', function() {
  gulp.watch(config.views.watch, sync.sync(['views', 'reload']));
  gulp.watch(config.templates.src, sync.sync(['templates', 'reload']));

  gulp.watch(config.styles.watch, ['styles']);

  gulp.watch(config.scripts.src, sync.sync(['scripts', 'reload']));
  //gulp.watch(config.lintJS, ['lintJS']);

  gulp.watch('./bower.json', sync.sync(['dependencies', 'styles']));
});

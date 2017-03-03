'use strict';

let gulp      = require('gulp');
let gutil     = require('gulp-util');
let sequence  = require('run-sequence');

let tasks = [
  'dependencies',
  'views',
  'templates',
  'images',
  'icons',
  'styles',
  'scripts'
];

gulp.task('default', function() {
  sequence(tasks, 'browser-sync', 'watch');
});

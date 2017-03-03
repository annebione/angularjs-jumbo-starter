'use strict';

let gulp      = require('gulp');
let gutil     = require('gulp-util');
let sequence  = require('run-sequence');

let tasks = [
  'dependencies',
  'scripts',
  'views',
  'templates',
  'images',
  'icons',
  'styles',
  'watch',
  'jsdoc',
  'styledown'
];

gulp.task('default', function() {
  sequence(tasks, 'browser-sync', 'watch');
});

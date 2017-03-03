'use strict';
/**
 * Task browser-sync is too open browser, and refresh/inject this,
 * always you change a file in client/ directory
 */

let gulp      = require('gulp');
let argv      = require('yargs').argv;
let history   = require('connect-history-api-fallback');
let config    = require('./gulp.config.js');

let options = {
  server: {
    baseDir: './dist'
  },
  notify: false,
  middleware: [ history() ],
  reloadDelay: 100,
  open: argv.open
};

gulp.task('browser-sync', function() {
  config.browserSync.init(options);
});

'use strict';

let gulp = require('gulp');

gulp.task('nodemon', function() {
  let nodemon = require('gulp-nodemon');

  let options = {
    script: '../server/app.js',
    quiet: true,
    ext: 'js',
    ignore: [
      '../server/docs',
      './gulpfile.js',
      '../tests/**/*.js',
      '../src/app/**/*.js',
      '..dist/scripts/**/*.js'
    ],
    env: {
      ENV: 'development',
      open: argv.open
    }
  };
  nodemon(options);
});

'use strict';

let gulp    = require('gulp');
let config  = require('./gulp.config.js');
let bower   = require('bower-files')();
let minify  = require('gulp-clean-css');
let concat  = require('gulp-concat');
let uglify  = require('gulp-uglify');

gulp.task('dependencies', function() {

  // Styles
  gulp
    .src(bower.ext(config.deps.styles.ext).files)
    .pipe(concat(config.deps.styles.concat))
    .pipe(minify(config.deps.styles.minify))
    .pipe(gulp.dest(config.deps.styles.dest));

  // Scripts
  gulp
    .src(bower.ext(config.deps.scripts.ext).files)
    .pipe(concat(config.deps.scripts.concat))
    .pipe(uglify())
    .pipe(gulp.dest(config.deps.scripts.dest));

  // Fonts
  gulp
    .src(bower.ext(config.deps.fonts.ext).files)
    .pipe(gulp.dest(config.deps.fonts.dest));
});

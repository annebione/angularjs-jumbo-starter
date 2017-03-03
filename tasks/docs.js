'use strict';

let gulp          = require('gulp');
let hologram      = require('gulp-hologram');
let styledown     = require('gulp-styledown');
let babel         = require('gulp-babel');
let jsdoc         = require('gulp-jsdoc');
let config        = require('./gulp.config.js');
let dest          = require('gulp-dest');


gulp.task('styledown', styleGuide);

function styleGuide() {
	return gulp.src(config.styles.src)
	  .pipe(styledown({
	  	config: config.styledown.src,
	  	filename: 'styleguide.html'
	  }))
	  .pipe(gulp.dest(config.styledown.dest))
};

gulp.task('jsdoc', jsDoc);

function jsDoc() {
	return gulp
	  .src(config.scripts.src)
	  .pipe(babel({
	  	presets: ['es2015'] 
	  }))
	  .pipe(jsdoc(config.docs.js.dest))
};
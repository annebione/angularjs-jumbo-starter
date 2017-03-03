let gulp          = require('gulp');
let hologram      = require('gulp-hologram');
let jsdoc         = require('gulp-jsdoc');
let config        = require('./gulp.config.js');


gulp.task('hologram', styleGuide);

function styleGuide() {
	return gulp
	  .src(config.hologram.src)
	  .pipe(hologram())
};

gulp.task('jsdoc', jsDoc);

function jsDoc() {
	return gulp
	  .src(config.scripts.src)
	  .pipe(jsdoc(config.docs.js.dest))
};
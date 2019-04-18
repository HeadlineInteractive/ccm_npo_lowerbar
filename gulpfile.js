//==================================
// Required
//==================================
var gulp = require('gulp'),
	plumber = require('gulp-plumber'),
	autoprefixer = require('gulp-autoprefixer'),
	sass = require('gulp-sass');

//==================================
// Sass Task
//==================================
gulp.task('sass', function(){
	gulp.src('npo_lowerbar.sass')
		.pipe(plumber())
		.pipe(sass({outputStyle: 'expand'}).on('error', sass.logError))
		.pipe(autoprefixer('last 2 versions'))
		.pipe(gulp.dest('css/original'))
});

gulp.task('sass-minify', function(){
	gulp.src('npo_lowerbar.sass')
		.pipe(plumber())
		.pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
		.pipe(autoprefixer('last 2 versions'))
		.pipe(gulp.dest('css/minified'))
});

//==================================
// Default Tasks
//==================================
gulp.task('default', ['sass', 'sass-minify']);


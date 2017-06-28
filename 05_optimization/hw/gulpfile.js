var gulp           = require('gulp'),
		concat         = require('gulp-concat'),
		uglify         = require('gulp-uglify'),
		cleanCSS       = require('gulp-clean-css'),
		imagemin       = require('gulp-imagemin'),
		cache          = require('gulp-cache');


gulp.task('js', function() {
	return gulp.src([
		'js/jquery-2.1.3.min.js',
		'js/owl.carousel.js',
		'js/carousel-init.js',
		'js/parallax-init.js'
		])
	.pipe(concat('scripts.min.js'))
	.pipe(uglify())
	.pipe(gulp.dest('js'));
});


gulp.task('pack-css', function () {	
	return gulp.src([
		'css/reset.css',
		'css/owl.carousel.css',
		'css/owl.theme.css',
		'css/poster.css',
		'css/style.css'])
		.pipe(concat('stylesheet.css'))
		.pipe(cleanCSS())
		.pipe(gulp.dest('css'));
});



gulp.task('imagemin', function() {
	return gulp.src([
		'img/**/*',
		'pics/**/*'
	])
	.pipe(cache(imagemin()))
	.pipe(gulp.dest('dist/img')); 
});



gulp.task('default', ['pack-css', 'js']);

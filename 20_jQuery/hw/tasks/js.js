var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
// require('./browserSync');
var browserSync = require('browser-sync');
require('./commonJs');



gulp.task('js', ['commonJs'], function() {
	return gulp.src([
		'./libs/jquery-3.2.1.min.js',
		// '../libs/animate.css/animate.min.js',
        './js/script.min.js', // Всегда в конце
		])
	.pipe(concat('scripts.min.js'))
	.pipe(uglify()) // Минимизировать весь js (на выбор)
	.pipe(gulp.dest('./js'))
	.pipe(browserSync.reload({stream: true}));
});

gulp.task('browserSync', function() {
	browserSync({
		server: {
			baseDir: '/'
		},
		notify: false
	});
});
var gulp = require('gulp');
var sass = require('gulp-sass');
var cleanCSS = require('gulp-clean-css');
// var browserSync = require('./browserSync');
var browserSync = require('browser-sync');

gulp.task('scss', function() {
	return gulp.src('./scss/*.scss')
	.pipe(sass({outputStyle: 'expand'}).on("error", sass.logError))
	// .pipe(cleanCSS()) // Опционально, закомментировать при отладке
	.pipe(gulp.dest('./css'))
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
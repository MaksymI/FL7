var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
// var browserSync = require('browser-sync');

gulp.task('commonJs', function() {
	return gulp.src([
		'./js/script.js'
		])
	.pipe(concat('script.min.js'))
	.pipe(uglify())
	.pipe(gulp.dest('./js'));
	// .pipe(browserSync.reload({stream: true}));
});
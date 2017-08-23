var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('scss', () => {
	return gulp.src('./src/scss/*.scss')
	.pipe(sass({outputStyle: 'expand'}).on("error", sass.logError))
	.pipe(gulp.dest('./build/'));
});
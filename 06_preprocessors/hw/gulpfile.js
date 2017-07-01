var gulp           = require('gulp'),
		sass           = require('gulp-sass'),
		browserSync    = require('browser-sync'),
		notify         = require("gulp-notify");

gulp.task('browser-sync', function() {
	browserSync({
		server: {
			baseDir: 'app'
		},
		notify: false
	});
});

gulp.task('scss', function() {
	return gulp.src('app/scss/*.scss')
	.pipe(sass({outputStyle: 'expand'}).on("error", notify.onError()))
	.pipe(gulp.dest('app/css'))
	.pipe(browserSync.reload({stream: true}));
});

gulp.task('watch', ['scss', 'browser-sync'], function() {
	gulp.watch('app/scss/*.scss', ['scss']);
	gulp.watch('app/*.html', browserSync.reload);
});



gulp.task('default', ['watch']);

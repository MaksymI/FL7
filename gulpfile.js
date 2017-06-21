var gulp           = require('gulp'),
		browserSync    = require('browser-sync'),
		cache          = require('gulp-cache'),
		imagemin       = require('gulp-imagemin'),
		notify         = require("gulp-notify");



gulp.task('browser-sync', function() {
	browserSync({
		server: {
			baseDir: ''
		},
		notify: false,
		// tunnel: true,
		// tunnel: "projectmane", //Demonstration page: http://projectmane.localtunnel.me
	});
});



gulp.task('watch',  ['browser-sync'], function() {
	gulp.watch('**/*.html', browserSync.reload);
	gulp.watch('**/*.css', browserSync.reload);
});

gulp.task('imagemin', function() {
	return gulp.src('app/img/**/*')
	.pipe(cache(imagemin()))
	.pipe(gulp.dest('dist/img')); 
});


gulp.task('default', ['watch']);

var gulp           = require('gulp'),
		browserSync    = require('browser-sync'),
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
	gulp.watch('**/*.js', browserSync.reload);
});


gulp.task('default', ['watch']);
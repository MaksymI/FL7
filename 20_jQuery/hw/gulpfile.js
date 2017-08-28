var gulp = require('gulp');
var browserSync = require('browser-sync');
// require('./tasks/browserSync');
require('./tasks/scss');
// require('./tasks/js');
require('./tasks/commonJs');



gulp.task('watch', ['scss', 'commonJs', 'browserSync'], function() {
	gulp.watch('./scss/*.scss', ['scss']);
	gulp.watch(['./js/script.js'], ['commonJs']);
	gulp.watch('./*.html', browserSync.reload);
});

gulp.task('browserSync', function() {
	browserSync({
		server: {
			baseDir: './'
		},
		notify: false
	});
});


gulp.task('default', ['watch']);


// gulp.task('build', ['deleted2', 'tslint', 'scsslint', 'typescript', 'scss'], () => {
// 	var buildFiles = gulp.src([
// 		'./src/*.html',
// 		'./src/.htaccess',
// 		]).pipe(gulp.dest('./build/'));
// });
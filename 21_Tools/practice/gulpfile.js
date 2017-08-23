var gulp = require('gulp');
require('./tasks/typescript');
require('./tasks/tslint');
require('./tasks/scss');
require('./tasks/scsslint');
require('./tasks/deleted2');

gulp.task('build', ['deleted2', 'tslint', 'scsslint', 'typescript', 'scss'], () => {
  var buildFiles = gulp.src([
		'./src/*.html',
		'./src/.htaccess',
		]).pipe(gulp.dest('./build/'));
});
var gulp = require('gulp');
var del = require('del');

gulp.task('deleted2', () => {
    return del.sync('build');
});
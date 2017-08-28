var gulp = require('gulp');
var sassLint = require('gulp-sass-lint');

gulp.task('scsslint', function() {
  return gulp.src('./src/scss/*.s+(a|c)ss')
    .pipe(sassLint())
    .pipe(sassLint.format())
    .pipe(sassLint.failOnError())
});
var gulp = require('gulp');
var ts = require('gulp-typescript');

gulp.task('typescript', () => {
    return gulp.src('./src/js/app.ts')
        .pipe(ts({
            noImplicitAny: true,
            outFile: 'app.js'
        }))
        .pipe(gulp.dest('./build'));
});
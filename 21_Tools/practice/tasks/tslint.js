var gulp = require('gulp');
var tslint = require('gulp-tslint');

gulp.task("tslint", () =>
gulp.src("./src/js/app.ts")
    .pipe(tslint({
        formatter: "verbose"
    }))
    .pipe(tslint.report())
);
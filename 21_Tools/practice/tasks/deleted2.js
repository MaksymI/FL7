var gulp = require('gulp');
var del = require('del');

gulp.task('deleted2', () => {
    return del.sync('build');
});

// import gulp from '../node_modules/gulp';
// import del from '../node_modules/del';

// export default gulp.task('deleted2', () => {
//     return del.sync('build');
// });
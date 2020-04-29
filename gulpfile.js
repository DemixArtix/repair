var gulp = require('gulp'),
  scss = require('gulp-scss'),
  autoprefix = require('gulp-autoprefixer');

gulp.task('css', function () {
  gulp.src('scss/style.scss')
    .pipe(scss())
    .pipe(autoprefix('last 2 version', 'ie 8', 'ie 9'))
    .pipe(gulp.dest('build'));
});
var gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const htmlmin = require('gulp-htmlmin');
const tinypng = require('gulp-tinypng-compress');




gulp.task('css', function (done) {
  gulp.src('./src/css/*.css')
    .pipe(autoprefixer('last 2 version', 'ie 8', 'ie 9'))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('dist/css/'));
  done();
});

gulp.task('js', function (done) {
  gulp.src('./src/js/*.js')
    .pipe(gulp.dest('dist/js/'));
  done();
});

gulp.task('html', function (done) {
  gulp.src('./src/*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('dist/'));
  done();
});

gulp.task('fonts', function (done) {
  gulp.src('./src/fonts/**/*')
    .pipe(gulp.dest('dist/fonts/'));
  done();
});

gulp.task('tinypng', function (done) {
  gulp.src('./src/img/**/*.{png,jpg,jpeg}')
    .pipe(tinypng({
      key: 'xz01sc3fQCSrK0bspH56WFkR7X9xgB0D'
    }))
    .pipe(gulp.dest('dist/img/'));
  done();
});
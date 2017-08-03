const gulp = require('gulp');
const util = require('gulp-util');
const sass = require('gulp-sass');
//const plugins = require('gulp-load-plugins')({ lazy: true });

gulp.task('sass', () => {
    log('Compiling sass');
    return gulp
            .src('src/assets/scss/**/*.scss')
            .pipe(sass({outputStyle: 'expanded'}))
            .pipe(gulp.dest('src/assets/css'));
    }
);

gulp.task('watch', () => {
    gulp.watch('src/assets/scss/**/*.scss', ['sass']);
});

function log(msg) {
  if (typeof (msg) === 'object') {
    for (var item in msg) {
      if (msg.hasOwnProperty(item)) {
        util.log(util.colors.green(msg[item]));
      }
    }
  } else {
    util.log(util.colors.green(msg));
  }
}
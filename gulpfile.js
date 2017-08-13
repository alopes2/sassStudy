const gulp = require('gulp');
const util = require('gulp-util');
const sass = require('gulp-sass');
const browserSync = require('browser-sync');

//const plugins = require('gulp-load-plugins')({ lazy: true });

gulp.task('sass', () => {
    log('Compiling sass');
    return gulp
            .src('src/assets/scss/**/*.scss')
            .pipe(sass({outputStyle: 'expanded'}))
            .pipe(gulp.dest('src/assets/css'));
    }
);

gulp.task('watch',['sass'], () => {
    log('Watching files');
    startBrowserSync();
    gulp.watch('src/assets/scss/**/*.scss', ['sass']);
});


const startBrowserSync = () => {
  log('Starting browser sync');
  if(browserSync.active)
    return;

  browserSync.init({
    server: {
      baseDir: './src',
      index: 'simple-menu.html'
    },
    files: ['src/**/*.html','src/**/*.js','src/**/*.css'],
    logPrefix: 'SASS-study',
    browser: 'Chrome',
    port: 3000
  })
}

const log = msg => {
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
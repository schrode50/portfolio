'use strict';

const gulp = require('gulp');
const eslint = require('gulp-eslint');
const browserSync = require('browser-sync').create();

const scripts = ['public/*.js'];
const files = ['public/*'];

gulp.task('lint', () => {
  return gulp.src(scripts)
    .pipe(eslint())
    .pipe(eslint.format());
});

gulp.task('browser-sync', () => {
  browserSync.init({
    server: {
      baseDir: 'public/'
    }
  });
});

gulp.task('watch', ['browser-sync'], () => {
  gulp.watch(files, ['lint', browserSync.reload]);
});

gulp.task('default', ['watch', 'lint', 'browser-sync']);

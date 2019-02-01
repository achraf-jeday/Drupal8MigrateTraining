'use strict';

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    autoprefixer = require('gulp-autoprefixer'),
    browserSync = require('browser-sync').create();

gulp.task('browser-sync', function() {
    browserSync.init({
        proxy: "http://migrate-training.loc:8080"
    });
});

gulp.task('browser-sync:watch', ['sass'], function() {
  gulp.watch("./scss/**/*.scss", ['sass']);
  gulp.watch("./css/*.css").on('change', browserSync.reload);
});

gulp.task('sass', function () {
  return gulp
    .src('scss/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(autoprefixer('last 2 version'))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('css/'))
    .pipe(browserSync.stream());
});

gulp.task('sass:watch', function () {
  gulp.watch('./scss/**/*.scss', ['sass']);
});

gulp.task('default', [ 'sass', 'sass:watch', 'browser-sync', 'browser-sync:watch' ]);

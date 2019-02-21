const { watch, series } = require('gulp');

const gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin');
    sass = require('gulp-sass');

    sass.compiler = require('node-sass');


//concat 
gulp.task('concat', async function () {
    return gulp.src('./src/js/source/*.js')
        .pipe(concat('all.js'))
        .pipe(gulp.dest('./src/js/build/'))
});

//mini
gulp.task('min', async function () {
    return gulp.src('./src/js/source/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./src/js/build/'))
});


//imgages
gulp.task('img', async function () {
    return gulp.src(['src/img/*.*'])
        .pipe(imagemin())
        .pipe(gulp.dest('src/img/'));
});

//sass
gulp.task('sass', async function () {
    return gulp.src('./src/sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./src/css'));
});

gulp.task('default', gulp.parallel('min', 'concat','sass', 'img'));


gulp.task('watch', async function(){
 
    gulp.watch('src/js/*.js', gulp.parallel('min', 'concat'));
    gulp.watch('src/css/*.css', gulp.parallel('sass'));
});


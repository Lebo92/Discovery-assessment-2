"use strict";

// Load Node Modules/Plugins
import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import browserSync from 'browser-sync';
import del from 'del';
var gutil = require('gulp-util');


const reload = browserSync.reload;
const $ = gulpLoadPlugins();

// Remove existing docs and dist build
gulp.task('clean', del.bind(null, ['docs/dist', 'dist']));


// Build LibSass files
gulp.task('styles', function() {
    gulp.src(['src/scss/discovery.scss', 'src/scss/main.scss'])
        .pipe($.plumber())
        .pipe($.sass().on('error', $.sass.logError))
        .pipe($.sourcemaps.write('.'))
        .pipe($.autoprefixer({browsers: ['last 1 version']}))
        .pipe($.rename({ suffix: '.min' }))
        .pipe(gulp.dest('dist/css'))
        .pipe($.minifyCss())
        .pipe(gulp.dest('dist/css'))
        .pipe(browserSync.stream());
});

// Build JavaScript files
gulp.task('scripts', function() {
    return gulp.src(['assets/bootstrap/dev/js/src/util.js', 'assets/bootstrap/dev/js/src/alert.js', 'assets/bootstrap/dev/js/src/button.js', 'assets/bootstrap/dev/js/src/carousel.js', 'assets/bootstrap/dev/js/src/collapse.js', 'assets/bootstrap/dev/js/src/dropdown.js', 'assets/bootstrap/dev/js/src/modal.js', 'assets/bootstrap/dev/js/src/scrollspy.js', 'assets/bootstrap/dev/js/src/tab.js', 'assets/bootstrap/dev/js/src/tooltip.js', 'assets/bootstrap/dev/js/src/popover.js'])
        .pipe($.babel())
        .pipe($.concat('./bootstrap.js'))
        .pipe(gulp.dest('dist/js'));
});

gulp.task('scripts-2', function() {
    return gulp.src('src/js/**.js')
        .pipe($.babel())
        .pipe(gulp.dest('dist/js'));
});

// Build icons files
gulp.task('icons', function() {
    return gulp.src('src/icons/**.svg')
        .pipe(gulp.dest('dist/icons'));
});

// Build images files
gulp.task('images', function() {
    return gulp.src(['src/img/**.jpg', 'src/img/**.png'])
        .pipe(gulp.dest('dist/img'));
});


// Watch tasks
gulp.task('watch', function() {
    gulp.watch('scss/*.scss', ['styles']).on('change', browserSync.reload);
    gulp.watch('js/src/*.js', ['scripts']).on('change', browserSync.reload);
    gulp.watch('./dist/*.html').on('change', browserSync.reload);
});

gulp.task('dist', ['styles', 'scripts', 'scripts-2', 'icons', 'images']);

gulp.task('default', ['clean'], () => {
    gulp.start('dist');
});
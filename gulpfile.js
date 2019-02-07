var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');
var ts = require("gulp-typescript");
var tsProject = ts.createProject("tsconfig.json");

// Static Server + watching scss/html files
gulp.task('serve', function () {

  browserSync.init({
    server: "./",
    port: 80
  })
  gulp.watch('*.html').on('change', browserSync.reload)
  gulp.watch('assets/clientlib-common/sass/*.scss', ['sass'])
  gulp.watch('assets/clientlib-common/ts/*.ts', ['scripts']);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function () {
  gulp.src('assets/clientlib-common/sass/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('dist/css'))
    .pipe(browserSync.stream());
    
  gulp.src('horizontal-timeline-master/sass/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('horizontal-timeline-master/css/'))
    .pipe(browserSync.stream());
});

gulp.task('scripts', function () {
  return gulp.src('assets/clientlib-common/ts/*.ts')
    .pipe(tsProject())
    .js.pipe(gulp.dest('dist/js'));
});

gulp.task('default', ['sass', 'scripts', 'serve']);

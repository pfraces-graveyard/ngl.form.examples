var gulp = require('gulp');
var concat = require('gulp-concat-sourcemap');
var eslint = require('gulp-eslint');
var del = require('del');
var templateCache = require("gulp-angular-templatecache");
var dependencies = require('./dependencies.json');

gulp.task('clean', function () {
  return del('dist');
});

gulp.task('lint', ['clean'], function () {
  return gulp.src('./src/**/*.js')
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failOnError());
});

gulp.task('test', ['lint']);

gulp.task('index', ['test'], function () {
  return gulp.src('src/index.html')
    .pipe(gulp.dest('dist'));
});

gulp.task('resources', ['test'], function () {
  return gulp.src('resources/**')
    .pipe(gulp.dest('dist'));
});

gulp.task('styles', ['test'], function () {
  return gulp.src('./src/styles.css')
    .pipe(gulp.dest('./dist/'));
});

gulp.task('dependencies', ['test'], function () {
  return gulp.src(dependencies)
    .pipe(concat('dependencies.js', { sourcesContent: true }))
    .pipe(gulp.dest('./dist/'));
});

gulp.task('scripts', ['test'], function () {
  return gulp.src('./src/**/*.js')
    .pipe(concat('scripts.js', { sourcesContent: true }))
    .pipe(gulp.dest('./dist/'));
});

gulp.task('templates', ['test'], function () {
  return gulp.src('src/components/**/*.html')
    .pipe(templateCache('templates.js', {
      module: 'templates',
      standalone: true
    }))
    .pipe(gulp.dest('dist'));
});

gulp.task('build', [
  'index',
  'resources',
  'styles',
  'dependencies',
  'scripts',
  'templates'
]);

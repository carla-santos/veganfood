const { src, dest, watch, parallel } = require('gulp');

// CSS
const sass = require('gulp-sass')(require('sass'));
const plumber = require('gulp-plumber');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const postcss = require('gulp-postcss');
const sourcemaps = require('gulp-sourcemaps');

// Javascript
const concat = require('gulp-concat');
const rename = require('gulp-rename');
const terser = require('gulp-terser');

const css = function (start) {
  src('src/scss/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(plumber())
    .pipe(sass())
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(sourcemaps.write('.'))
    .pipe(dest('build/css'));
  start();
};

const jsFiles = function () {
  const files = [
    'src/js/menu-mobile.js',
    'src/js/smooth-scroll.js',
    'src/js/sticky-nav.js',
    'src/js/gallery.js',
    'src/js/slider.js',
  ];
  return files;
};

const javascript = function (start) {
  src(jsFiles())
    .pipe(sourcemaps.init())
    .pipe(plumber())
    .pipe(concat('script.js'))
    .pipe(dest('build/js'))
    .pipe(rename('script.min.js'))
    .pipe(terser())
    .pipe(sourcemaps.write('.'))
    .pipe(dest('build/js'));
  start();
};

const dev = function (start) {
  watch('src/scss/**/*.scss', css);
  watch('src/js/**/*.js', javascript);
  start();
};

exports.css = css;
exports.js = javascript;
exports.dev = parallel(javascript, dev);

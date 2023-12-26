const { src, dest, watch, parallel } = require('gulp');

// CSS
const sass = require('gulp-sass')(require('sass'));
const plumber = require('gulp-plumber');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const postcss = require('gulp-postcss');
const sourcemaps = require('gulp-sourcemaps');

function css(start) {
	src('src/scss/**/*.scss')
		.pipe(sourcemaps.init())
		.pipe(plumber())
		.pipe(sass())
		.pipe(postcss([autoprefixer(), cssnano()]))
		.pipe(sourcemaps.write('.'))
		.pipe(dest('build/css'));
	start();
}

function dev(start) {
	watch('src/scss/**/*.scss', css);
	start();
}

exports.css = css;
exports.dev = parallel(dev);

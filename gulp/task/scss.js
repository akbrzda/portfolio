const { src, dest } = require("gulp");

// Конфигурация
const path = require("../config/path.js");
const app = require("../config/app.js");

// Плагины
const autoprefixer = require("gulp-autoprefixer");
const csso = require("gulp-csso");
const rename = require("gulp-rename");
const size = require("gulp-size");
const cssMediaQueries = require("gulp-group-css-media-queries");
const sass = require("gulp-sass")(require("sass"));
const webpCss = require("gulp-webp-css");

// Обработка в SCSS
const scss = () => {
  return src(path.scss.src)
    .pipe(sass())
    .pipe(webpCss())
    .pipe(autoprefixer())
    .pipe(cssMediaQueries())
    .pipe(size({ title: "До сжатия main.scss:" }))
    .pipe(dest(path.scss.dest))
    .pipe(rename({ suffix: ".min" }))
    .pipe(csso())
    .pipe(size({ title: "После сжатия main.min.css:" }))
    .pipe(dest(path.cssmin.dest));
};

module.exports = scss;

const { src, dest } = require("gulp");

// Конфигурация
const path = require("../config/path.js");
const app = require("../config/app.js");

// Плагины
const concat = require("gulp-concat");
const cssimport = require("gulp-cssimport");
const autoprefixer = require("gulp-autoprefixer");
const csso = require("gulp-csso");
const rename = require("gulp-rename");
const size = require("gulp-size");
const cssMediaQueries = require("gulp-group-css-media-queries");
const webpCss = require("gulp-webp-css");

// Обработка в CSS
const css = () => {
  return src(path.css.src)
    .pipe(concat("style.css"))
    .pipe(cssimport())
    .pipe(webpCss())
    .pipe(autoprefixer())
    .pipe(cssMediaQueries())
    .pipe(size({ title: "style.css" }))
    .pipe(dest(path.css.dest))
    .pipe(rename({ suffix: ".min" }))
    .pipe(csso())
    .pipe(size({ title: "style.min.css" }))
    .pipe(dest(path.cssmin.dest));
};

module.exports = css;

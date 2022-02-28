const srcFolder = "./#src";
const buildFolder = "./dist";

module.exports = {
  root: buildFolder,

  html: {
    src: [srcFolder + "/*.html", "!" + srcFolder + "/_*.html"],
    watch: srcFolder + "/**/*.html",
    dest: buildFolder,
  },

  css: {
    src: srcFolder + "/css/*.css",
    watch: srcFolder + "/css/**/*.css",
    dest: buildFolder + "/css",
  },

  cssmin: {
    dest: buildFolder + "/css/min",
  },

  scss: {
    src: [srcFolder + "/sass/*.{scss,sass}", "!" + srcFolder + "/sass/_*.{scss,sass}"],
    watch: srcFolder + "/sass/**/*.{scss,sass}",
    dest: buildFolder + "/css",
  },

  js: {
    src: srcFolder + "/js/*.js",
    watch: srcFolder + "/js/**/*.js",
    dest: buildFolder + "/js",
  },
  jsmin: {
    dest: buildFolder + "/js/min",
  },

  img: {
    src: [srcFolder + "/img/*.{jpg,png,jpeg,gif,svg,ico}", srcFolder + "/img/**/*.{jpg,png,jpeg,gif,svg,ico}", srcFolder + "./*.{jpg,png,jpeg,gif,svg,ico}"],
    watch: srcFolder + "/img/**/*.{jpg,png,jpeg,gif,svg,ico}",
    dest: buildFolder + "/img",
  },

  font: {
    src: srcFolder + "/font/*.{eot,ttf,otf,otc,ttc,woff,woff2,svg}",
    watch: srcFolder + "/font/**/*.{eot,ttf,otf,otc,ttc,woff,woff2,svg}",
    dest: buildFolder + "/font",
  },
};
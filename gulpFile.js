var gulp = require('gulp');
var rename = require('gulp-rename');
var concat = require('gulp-concat');
var urlAdjuster = require('gulp-css-url-adjuster');
var uncss = require('gulp-uncss');

var srcPath = {
  htmlSrc: ["**/*.html","!node_modules/**/*.html"],
  fontsSrc: "**/*.ttf",
  imgSrc: ["**/*.png", "**/*.jpg", "**/*.svg"],
  cssSrc: ["**/*.css", "!node_modules/**/*.css"],
  jsSrc: [ "!gulpFile.js", "!node_modules/**/*.js", "**/*.js", "!**/*html5shiv-printshiv.min.js"],
}

var distSrc = {
  dist: "../dist/",
  distFonts: "../dist/fonts/",
  distImg: "../dist/img/"
}

gulp.task('build', function() {

  gulp.src(srcPath.fontsSrc).pipe(rename({
    dirname: ''
  })).pipe(gulp.dest(distSrc.distFonts));

  gulp.src(srcPath.htmlSrc).pipe(rename({
    dirname: ''
  })).pipe(gulp.dest(distSrc.dist));

  gulp.src(srcPath.imgSrc).pipe(rename({
    dirname: ''
  })).pipe(gulp.dest(distSrc.distImg));

  gulp.src(srcPath.cssSrc).pipe(rename({
    dirname: ''
  })).pipe(concat("css/styles.css")).pipe(urlAdjuster({})).pipe(gulp.dest(distSrc.dist));

  gulp.src(srcPath.jsSrc).pipe(rename({
    dirname: ''
  })).pipe(concat("script.js")).pipe(gulp.dest(distSrc.dist));



});

var srcArr = ["**/*.html", "**/*.png", "**/*.jpg", "**/*.svg", "**/*.css", "**/*.js", "!gulpfile.js", "!node_modules/**/*.js"]


gulp.task('watch', function() {
  gulp.watch(srcArr, ['build']);
});

gulp.task("cleancss", function() {
  gulp.src(distSrc.dist + '/css/styles.css')
    .pipe(uncss({
      html: ['../**/*.html']
    }))
    .pipe(gulp.dest('../dist/css/'));
})

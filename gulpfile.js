const gulp = require("gulp");
const del = require("del");
gulp.task("clean", () => {
  return del(["docs/*.js", "docs/*.css", "docs/*.html", "docs/images/**"]);
});

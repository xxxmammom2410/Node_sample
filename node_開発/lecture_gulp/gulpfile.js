//旧バージョン記述法
// var gulp = require("gulp");

// gulp.task("a", () => {
//   console.log("a");
// });

// gulp.task("b", ["a"], () => {
//   console.log("b");
// });

// gulp.task("a", ["b"]);
//------------------------------------

// var { series, parallel } = require("gulp");

// var task = async function () {
//   console.log("Hello World.");
// };

// module.exports.default = task;
//------------------------------------

// var { series, parallel } = require("gulp");

// var a = async function () {
//   console.log("a");
// };

// var b = async function () {
//   console.log("b");
// };

// module.exports.default = series(a, b);

//------------------------------------

var gulp = require("gulp");
var del = require("del");
var rename = require("gulp-rename");
var concat = require("gulp-concat");

var copyTask = async function () {
  return gulp.src("./src/sample1.txt")
    .pipe(gulp.dest("./dist"));
};


var deleteTask = async function () {
  return del("./dist/*");
};

var renameTask = async function(){
  return gulp.src("./src/sample1.txt")
  // .pipe(rename("hoge.txt"))
  .pipe(rename({ suffix: ".min"}))
  .pipe(gulp.dest("./dist"));
}

var concatTask = async function(){
  return gulp.src(["sample1.txt","sample2.txt"], { cwd: "./src"})
  .pipe(concat("bundle.txt"))
  .pipe(gulp.dest("./dist"));
};

var task = async function () {
  console.log("Hello World.");
};

module.exports = {
  default: task,      // 修正
  copy: copyTask,      // 追記
  delete: deleteTask,
  rename: renameTask,
  concat: concatTask
};


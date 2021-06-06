var gulp = require("gulp");

var taskA2 = async function () {
  console.log("TaskA");
};

module.exports.taskA = taskA2; 
// module.exports.default = series(a, b);
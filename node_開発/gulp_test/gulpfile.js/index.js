var gulp = require("gulp");

var {taskA} = require("./taskA");


var task = async function () {
  console.log("default Task");
};


// gulp.task("default",() =>{
//   console.log("hello");
// });

module.exports = { 
  default: task,      // 修正
  taskA: taskA
};

// exports.taskA = taskA;
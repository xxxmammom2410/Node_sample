console.log(process.env.NODE_ENV);

var systemlogger = require("./lib/log/systemlogger.js");
var express = require("express");
var app = express();
//デバッグのためコンソールログ出力用のロガーを読み込み
// var logger = require("./lib/log/logger.js").console;

app.set("view engine", "ejs");

//セキュリティ対策のため
app.disable("x-powered-by");


app.use("/public", express.static(__dirname + "/public/" + (process.env.NODE_ENV === "development" ? "development" : "production")));

//ルーティング
app.use("/", require("./routes/index.js"));
app.use("/posts/", require("./routes/posts.js"));

// logger.info("start."); ロガーからコンソールログ出力
app.use(systemlogger());


app.listen(3000);

var express = require("express");
var app = express();

//ミドルウェアを使用
app.use(require("./lib/logger.js"));


app.get("/", (req, res) => {
    //nodeのHTTPモジュールの拡張
    // res.writeHead(200);
    // res.write("Hello World");
    // res.end();
    res.status(200).send("Hello World");
})
app.listen(3000);
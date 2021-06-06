var express = require("express");
var app = express();//expressクラスのインスタンス化

//expressによるRouting
//アクセス先を指定して、コールバック関数を指定
//http://localhost:3000/home/index　に接続すると"OK"を返す
// app.get("/home/index", (req, res) => {
//     res.status(200).send("OK");
// });

// URLに:(パラメータ)とすることでレスポンスにパラメーターを渡すことができる
// app.get("/user/:id", (req, res) => {
//     console.log(req.params.id);
//     res.status(200).send("OK");
// });

//URLには正規表現が使用できる
//?　オプション
//* 0以上
//+ 1以上
//(//d+) 1以上の数値

// /user配下でミドルウェアを適用させる
app.use("/user", require("./router/user.js"));


app.listen(3000);
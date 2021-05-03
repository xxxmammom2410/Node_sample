var EventEmitter = require("events").EventEmitter
var util = require("util");

var Animal = function () {
    EventEmitter.call(this);
}
util.inherits(Animal, EventEmitter);

Animal.prototype.message = "Growl";


Animal.prototype.say = function () {
    console.log(this.message);
    //EventEmitterクラスのemitにより"say"イベントが実行される
    this.emit("say", this.message);
};

var Dog = function () {
    //コンストラクタを呼び出したい
    Animal.call(this);
    this.message = "わんわん"
};

util.inherits(Dog, Animal);//継承

var dog = new Dog();
//"say"イベントにイベントリスナーをバインド
dog.on("say", function (message) {//リスナーをアロー関数に
    console.log("「$[message]」と叫んだ");
});
dog.say();

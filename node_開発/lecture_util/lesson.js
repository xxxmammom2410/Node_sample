var util = require("util");

var Animal = function () {

}

Animal.prototype.message = "Growl";


Animal.prototype.say = function () {
    console.log(this.message);
};

var Dog = function () {
    //コンストラクタを呼び出したい
    Animal.call(this);
    this.message = "わんわん"
};

util.inherits(Dog, Animal);//継承

var dog = new Dog();
dog.say();
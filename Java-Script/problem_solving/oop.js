function test() {
    console.log('hello world');
    var x = 4;
    console.log(x);
}
var Human = /** @class */ (function () {
    function Human() {
    }
    Human.prototype.greet = function () {
        console.log("Hi ".concat(this.name, " Your age is ").concat(this.age));
    };
    return Human;
}());
var mahmoud = new Human();
mahmoud.name = 'Mahmoud';
mahmoud.age = 25;
mahmoud.greet();
console.log(mahmoud);

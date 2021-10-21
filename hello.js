//hello.ts
var Greeter = /** @class */ (function () {
    function Greeter() {
        this.greeting = "Akshaya";
    }
    Greeter.prototype.greet = function () {
        return "Hello, " + this.greeting;
    };
    return Greter;
}());
var greeter = new Greeter();
console.log(greeter.greet());

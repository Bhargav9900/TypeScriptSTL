var NewYear = /** @class */ (function () {
    function NewYear(message, year) {
        this.message = "Happy new year!";
        this.message = message;
        this.year = year;
    }
    NewYear.prototype.getMessage = function () {
        return this.message;
    };
    NewYear.prototype.getEvent = function () {
        return this.year;
    };
    return NewYear;
}());
//creatiing object
var g1 = new NewYear("Good morning", 2022);
console.log(g1.getMessage());
console.log(g1.getEvent());
var MyClass1 = /** @class */ (function () {
    function MyClass1() {
        this.a = 99;
        this.b = "hello";
        this.c = true;
    }
    MyClass1.prototype.show = function () {
        console.log("a: " + this.a);
    };
    return MyClass1;
}());
var ob = new MyClass1();
ob.show();

"use strict";
exports.__esModule = true;
exports.sub = exports.Bike = exports.Car = exports.add = exports.message = void 0;
exports.message = "hello world";
function add(a, b) {
    return a + b;
}
exports.add = add;
var Car = /** @class */ (function () {
    function Car(model, make, price) {
        this.model = model;
        this.make = make;
        this.price = price;
    }
    Car.prototype.showCarDeatils = function () {
        console.log("Model:" + this.model + " Make: " + this.make);
    };
    return Car;
}());
exports.Car = Car;
var Bike = /** @class */ (function () {
    function Bike(model, make, price) {
        this.model = model;
        this.make = make;
        this.price = price;
    }
    Bike.prototype.showBikeDeatils = function () {
        console.log("Model:" + this.model + " Make: " + this.make);
    };
    return Bike;
}());
exports.Bike = Bike;
function sub(a, b) {
    return a - b;
}
exports.sub = sub;

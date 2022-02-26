function badd(x, y) {
    if (typeof x === "number" && typeof y === "number") {
        return x + y;
    }
    if (typeof x === "string" && typeof y === "string") {
        return x + " " + y;
    }
}
console.log(badd(10, 20));
console.log(badd("f", "d"));
console.log("hello");
var citi = ["junagadh", "rajkot", "surat", "goa"];
citi.forEach(function (ele) { return console.log(ele); });
console.log(citi[2]);
var tuple1 = [10, "hello"];
tuple1.forEach(function (ele) { return console.log(ele); });
for (var ele in tuple1) {
    console.log(ele);
}
var Color;
(function (Color) {
    Color[Color["red"] = 0] = "red";
    Color[Color["white"] = 7] = "white";
    Color[Color["green"] = 4] = "green";
    Color[Color["black"] = 5] = "black";
    Color[Color["blue"] = 16] = "blue";
    Color[Color["purple"] = 17] = "purple";
})(Color || (Color = {}));
console.log("black: " + Color.black);
console.log("white: " + Color.white);
console.log("blue: " + Color.blue);
console.log("purple: " + Color.purple);
function add(a, b) {
    return a + b;
}
console.log("Addition: " + add(10, 20));
function mul(x, y) {
    if (y) {
        return x * y;
    }
    else {
        return x;
    }
}
console.log("Multiply: " + mul(10, 20));
function sadd(a, b) {
    if (b === void 0) { b = 5; }
    return a + b;
}
console.log("default parameters: " + sadd(10));
function sun(a, b) {
    var c = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        c[_i - 2] = arguments[_i];
    }
    c.forEach(function (ele) { return console.log(ele); });
}
console.log(sun(1, 2, 3, 4));
var v;
v = 10;
console.log(v);
v = "start";
console.log(v);
function asd(city) {
    if (typeof city === "string") {
        console.log(city);
    }
    else {
        city.forEach(function (ele) { return console.log(ele); });
    }
}
asd("pune");
var dd = ["asd", "fgh", "jkl"];
asd(dd);
console.log("");
var c1;
// c=["a","s","d"]
c1 = [1, 2, 3];
c1.forEach(function (ele) { return console.log(ele); });

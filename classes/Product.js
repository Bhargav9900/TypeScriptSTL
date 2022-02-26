var Product = /** @class */ (function () {
    function Product(id, name, brand, price) {
        this.id = id;
        this.name = name;
        this.brand = brand;
        this.price = price;
    }
    Product.prototype.setPrice = function (price) {
        this.price = price;
    };
    Product.prototype.getPrice = function () {
        return this.price;
    };
    Product.categoryInfo = function () {
        console.log("Product category static");
    };
    Product.prototype.printDetails = function () {
        console.log("Id: " + this.id + "\tName: " + this.name);
        console.log("Brand: " + this.brand + "\tPrice: " + this.price);
        console.log();
    };
    return Product;
}());
var p1 = new Product(1611, "Music Player", "Sony", 67000.99);
p1.printDetails();
var p2 = new Product(1612, "Laptop", "Sony", 57000.99);
p2.printDetails();
p2.setPrice(89000.90); //setter method call
p2.printDetails();
Product.categoryInfo();
console.log(p1 instanceof Product);
console.log(p1 instanceof Object);
console.log(p1 instanceof Number);

class Product{

    // id:number;
    // private name:string;
    // brand:string;
    // price:number;//public by default

    // constructor(id:number,name:string,brand:string,price:number){
    //     this.id = id;
    //     this.name = name;
    //     this.brand = brand;
    //     this.price = price
    // }

    constructor(private id:number,private name:string,private brand:string,private price:number){

    }

    setPrice(price:number):void{
        this.price = price
    }

    getPrice(){
        return this.price;
    }

    static categoryInfo():void{
        console.log("Product category static")
    }
    printDetails():void{

        console.log("Id: " + this.id +"\tName: " + this.name);
        console.log("Brand: " + this.brand +"\tPrice: " + this.price);
        console.log()
    }
}

let p1:Product = new Product(1611,"Music Player","Sony",67000.99);
p1.printDetails();

let p2:Product = new Product(1612,"Laptop","Sony",57000.99);
p2.printDetails();
p2.setPrice(89000.90); //setter method call
p2.printDetails();

Product.categoryInfo();

console.log(p1 instanceof Product)
console.log(p1 instanceof Object)
console.log(p1 instanceof Number)

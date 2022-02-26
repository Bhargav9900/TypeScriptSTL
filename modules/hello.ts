export let message:string = "hello world";

export function add(a:number,b:number):number{
    return a+b;
}

export default class Car{

    model:string;
    make:string;
    price:number;

    constructor(model,make,price) {
        this.model = model;
        this.make = make;
        this.price = price;
    }

    showCarDeatils():void{
        console.log("Model:" + this.model+ " Make: " + this.make)
    }
}

class Bike{

    model:string;
    make:string;
    price:number;

    constructor(model,make,price) {
        this.model = model;
        this.make = make;
        this.price = price;
    }

    showBikeDeatils():void{
        console.log("Model:" + this.model+ " Make: " + this.make)
    }
}

function sub(a:number,b:number):number{
    return a-b;
}

export{Bike,sub};
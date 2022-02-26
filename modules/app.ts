import Car,{add,message } from "./hello";

import * as h from './hello'

console.log(message);

let car:Car = new Car("Nexon","TATA",567777.90);
car.showCarDeatils();


console.log("Addition is " + add(45,65));

console.log("Subtraction: " + h.sub(70,65));

let bike:h.Bike = new h.Bike("Splender","Honda",89000.00)
bike.showBikeDeatils();
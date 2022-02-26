function badd(x:number,y:number):number;
function badd(x:string,y:string):string;
function badd(x:any,y:any):any{
    if(typeof x==="number" && typeof y==="number"){
        return x+y;
    }
    if(typeof x==="string" && typeof y==="string"){
        return x+" "+y;
    }


}
console.log(badd(10,20));
console.log(badd("f","d"));
console.log("hello");

let citi:string[] = ["junagadh","rajkot","surat","goa"];

citi.forEach((ele)=>console.log(ele));

console.log(citi[2]);

let tuple1:[number,string]=[10,"hello"]
tuple1.forEach((ele)=>console.log(ele));

for(let ele in tuple1){
    console.log(ele);
}

enum Color{
    red=0,white=7,green=4,black,blue=16,purple 
        
    }
    console.log("black: "+Color.black);
    console.log("white: "+Color.white);
    console.log("blue: "+Color.blue);
    console.log("purple: "+Color.purple);

function add(a:number,b:number):number{
    return a+b;
}
console.log("Addition: "+add(10,20));

function mul(x:number,y?:number):number{
   
   if(y){
       return x*y;
   }
   else{
       return x;
   }
}
console.log("Multiply: "+mul(10,20));

function sadd(a:number,b=5):number{
    return a+b;
}
console.log("default parameters: "+sadd(10));

function sun(a:number,b:number,...c:number[]){
    c.forEach((ele)=>console.log(ele));

}

console.log(sun(1,2,3,4));

let v:number|string;
v=10;
console.log(v);
v="start";
console.log(v);

function asd(city:string|string[]){
    if(typeof city ==="string"){
        console.log(city);
    }
    else{
        city.forEach((ele)=>console.log(ele));
    }
}

asd("pune");
let dd:string[] = ["asd","fgh","jkl"];
asd(dd);

console.log("");

let c1:number[]|string[];
// c=["a","s","d"]
c1=[1,2,3];
c1.forEach((ele)=>console.log(ele));


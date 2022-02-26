interface Greeting{
    message:string;

    getMessage():string;
}//end of interface


interface Celebration{
    year:number;
    getEvent():number;
}
class NewYear implements Greeting,Celebration{
    message: string = "Happy new year!";
    year: number;

    constructor(message,year) {
       this.message = message;
       this.year = year; 
    }

    getMessage(): string {
        return this.message
    }

    getEvent(): number {
        return this.year
    }
}

//creatiing object

let g1:NewYear = new NewYear("Good morning",2022);
console.log(g1.getMessage())
console.log(g1.getEvent())


interface A{
    a:number;
}

interface B{
    b:string
}

interface C extends A,B{
    show();
    c:boolean;
}

class MyClass1 implements C{
    a:number = 99;
    b: string = "hello";
    c: boolean = true;

    show():void{
        console.log("a: " + this.a);
    }
}

let ob:MyClass1 = new MyClass1();
ob.show();

let ob1:C= new MyClass1();
ob1.show();
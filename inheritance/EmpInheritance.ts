class Employee{

    protected empId:number;//it can be accessible by child
    name: string;
    salary: number;

    constructor(empId,name,salary){
        this.empId = empId;
        this.name = name;
        this.salary = salary;
    }

    show():void{
        console.log("Emp id: " + this.empId + "\tName: " + this.name)
    }
}//end of super class

class Manager extends Employee{

    incentives:number;

    constructor(empid,name,salary,incentives){
        super(empid,name,salary);
        this.incentives = incentives
    }

    getIncentives():number{
        console.log(this.empId);//use super class property
        return this.incentives;
    }

    //overridden method
    show(): void {
        console.log("Manager's show")
        super.show();
        console.log("Incentive: " + this.incentives)
    }
}


let e1:Employee = new Employee(1001,"test1",65000.00);
e1.show();

let m1:Manager = new Manager(3001,"Akshay",89000.89,7000);
m1.show();
console.log("Incentive of manager: " + m1.getIncentives())


e1 = new Manager(1002,"Bhargav",90000.95,9000.00)
e1.show()


class MyClass{

    display():void{

        let e:Employee = new Employee(1004,"Ram",87888.00);
        //console.log(e.empId);//not accsible
        console.log(e.name)
    }
}
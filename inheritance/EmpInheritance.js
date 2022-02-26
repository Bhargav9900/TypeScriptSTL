var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Employee = /** @class */ (function () {
    function Employee(empId, name, salary) {
        this.empId = empId;
        this.name = name;
        this.salary = salary;
    }
    Employee.prototype.show = function () {
        console.log("Emp id: " + this.empId + "\tName: " + this.name);
    };
    return Employee;
}()); //end of super class
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(empid, name, salary, incentives) {
        var _this = _super.call(this, empid, name, salary) || this;
        _this.incentives = incentives;
        return _this;
    }
    Manager.prototype.getIncentives = function () {
        console.log(this.empId); //use super class property
        return this.incentives;
    };
    //overridden method
    Manager.prototype.show = function () {
        console.log("Manager's show");
        _super.prototype.show.call(this);
        console.log("Incentive: " + this.incentives);
    };
    return Manager;
}(Employee));
var e1 = new Employee(1001, "test1", 65000.00);
e1.show();
var m1 = new Manager(3001, "Akshay", 89000.89, 7000);
m1.show();
console.log("Incentive of manager: " + m1.getIncentives());
e1 = new Manager(1002, "Bhargav", 90000.95, 9000.00);
e1.show();

"use strict";
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
exports.__esModule = true;
var message = 'welcome back';
console.log(message);
var x = 10;
var y = 20;
var sum = x + y;
var sumResult = "Sum is : ".concat(sum);
console.log("sumResult : ".concat(sumResult));
//let isBeginner: boolean = true;
//let total: number = 0;
var name = 'Mario';
var sentence = "My name is ".concat(name, "\nI am a beginner in Typescript");
console.log(sentence);
//let n: null = null;
//let u: undefined = undefined;
//let isNew: boolean = null;
//let myName: string = undefined;
var list1 = [1, 2, 3];
var list2 = ['Joe', 'Maria'];
var list3 = [1, 2, 3];
var allLists = {
    list1: list1,
    list2: list2,
    list3: list3
};
console.log(allLists);
// Tuple
var person1 = ['Mario', 44];
console.log('person1 tuple', person1);
console.log("Person1 Name is ".concat(person1[0]));
// Enum
var Color;
(function (Color) {
    Color[Color["Red"] = 2] = "Red";
    Color[Color["Green"] = 3] = "Green";
    Color[Color["Blue"] = 4] = "Blue";
})(Color || (Color = {}));
;
var c = Color.Green;
console.log(c);
var myVariable = 10;
console.log('My unknown variable : ', myVariable);
//(myVariable as string).toUpperCase();
var multiType;
multiType = 20;
multiType = true;
console.log('multiType : ', multiType);
var anyType;
anyType = 20;
anyType = 'Dan';
console.log('anyType : ', anyType);
var student = {
    id: 1,
    name: 'Mario',
    examDate: function (date) {
        console.log(date);
    }
};
console.log("student name : ".concat(student.name));
function add(num1, num2) {
    if (num2 === void 0) { num2 = 10; }
    if (num2)
        return num1 + num2;
    else
        return num1;
}
console.log(add(5, 10));
console.log(add(5));
function calculateTax(income, taxYear) {
    if (taxYear === void 0) { taxYear = 2022; }
    if (taxYear < 2022)
        return income * 1.2;
    return income * 1.3;
}
calculateTax(10000);
function fullName(person) {
    var personFullName = "".concat(person.firstName, " ").concat((person.lastName ? person.lastName : ''));
    console.log(personFullName);
}
var newPerson = { firstName: 'Peter', lastName: 'Pan' };
fullName(newPerson);
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.employeeName = name;
    }
    Employee.prototype.greet = function () {
        console.log("Good Morning ".concat(this.employeeName));
    };
    return Employee;
}());
var emp1 = new Employee('Mario');
console.log(emp1.employeeName);
emp1.greet();
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(managerName) {
        return _super.call(this, managerName) || this;
    }
    Manager.prototype.delegateWork = function () {
        console.log("Manager is deletaging work");
    };
    return Manager;
}(Employee));
var manager1 = new Manager('Steve');
console.log("Manager name is : ".concat(manager1.employeeName));
manager1.greet();
manager1.delegateWork();

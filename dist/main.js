"use strict";
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
let message = 'welcome back';
console.log(message);
let x = 10;
const y = 20;
let sum = x + y;
const sumResult = `Sum is : ${sum}`;
console.log(`sumResult : ${sumResult}`);
let name = 'Mario';
let sentence = `My name is ${name}
I am a beginner in Typescript`;
console.log(sentence);
let list1 = [1, 2, 3];
let list2 = ['Joe', 'Maria'];
let list3 = [1, 2, 3];
let allLists = {
    list1, list2, list3
};
console.log(allLists);
let person1 = ['Mario', 44];
console.log('person1 tuple', person1);
console.log(`Person1 Name is ${person1[0]}`);
var Color;
(function (Color) {
    Color[Color["Red"] = 2] = "Red";
    Color[Color["Green"] = 3] = "Green";
    Color[Color["Blue"] = 4] = "Blue";
})(Color || (Color = {}));
;
let c = Color.Green;
console.log(c);
let myVariable = 10;
console.log('My unknown variable : ', myVariable);
let multiType;
multiType = 20;
multiType = true;
console.log('multiType : ', multiType);
let anyType;
anyType = 20;
anyType = 'Dan';
console.log('anyType : ', anyType);
let student = {
    id: 1,
    name: 'Mario',
    examDate: (date) => {
        console.log(date);
    }
};
console.log(`Student name : ${student.name}`);
function kgToLbs(weight) {
    if (typeof weight === 'number') {
        return weight * 2.2;
    }
    else
        return parseInt(weight) * 2.2;
}
const kg1 = kgToLbs(10);
const kg2 = kgToLbs('10kg');
console.log('kg as number', kg1);
console.log('kg as string', kg2);
function add(num1, num2 = 10) {
    if (num2)
        return num1 + num2;
    else
        return num1;
}
console.log(add(5, 10));
console.log(add(5));
function calculateTax(income, taxYear = 2022) {
    if (taxYear < 2022)
        return income * 1.2;
    return income * 1.3;
}
calculateTax(10000);
function fullName(person) {
    let personFullName = `${person.firstName} ${(person.lastName ? person.lastName : '')}`;
    console.log(personFullName);
}
let newPerson = { firstName: 'Peter', lastName: 'Pan' };
fullName(newPerson);
class Employee {
    constructor(name) {
        this.employeeName = name;
    }
    greet() {
        console.log(`Good Morning ${this.employeeName}`);
    }
}
let emp1 = new Employee('Mario');
console.log(emp1.employeeName);
emp1.greet();
class Manager extends Employee {
    constructor(managerName) {
        super(managerName);
    }
    delegateWork() {
        console.log(`Manager is deletaging work`);
    }
}
let manager1 = new Manager('Steve');
console.log(`Manager name is : ${manager1.employeeName}`);
manager1.greet();
manager1.delegateWork();
function greet(name) {
    if (name) {
        console.log(name.toUpperCase());
    }
    else
        console.log('Hola!');
}
greet(null);
let textBox = {
    drag: () => { },
    resize: () => { },
    log: (message) => console.log(message)
};
textBox.log('hello method on textbox');
let quantity = 100;
console.log(`Quantity : ${quantity}`);
function getCustomer(id) {
    return id === 0 ? null : { birthday: new Date() };
}
let customer = getCustomer(0);
console.log(customer && ((_a = customer === null || customer === void 0 ? void 0 : customer.birthday) === null || _a === void 0 ? void 0 : _a.getFullYear()) ? (_b = customer === null || customer === void 0 ? void 0 : customer.birthday) === null || _b === void 0 ? void 0 : _b.getFullYear() : 'customer not found');
let findCustomeById = customer ? [0] : 'no customer found';
console.log(`Customer id : ${findCustomeById}`);
//# sourceMappingURL=main.js.map
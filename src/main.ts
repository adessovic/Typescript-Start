export {};
let message =  'welcome back';
console.log(message);


let x = 10;
const y = 20;

let sum = x + y;
const sumResult = `Sum is : ${sum}`;
console.log(`sumResult : ${sumResult}`);

//let isBeginner: boolean = true;
//let total: number = 0;

let name: string = 'Mario';
let sentence: string = `My name is ${name}
I am a beginner in Typescript`;

console.log(sentence);


//let n: null = null;
//let u: undefined = undefined;

//let isNew: boolean = null;
//let myName: string = undefined;


let list1: number[] = [1,2,3];
let list2: string[] = ['Joe', 'Maria']
let list3: Array<number> = [1,2,3];

let allLists = {
    list1, list2, list3
};
console.log(allLists);


// Tuple
let person1: [string, number] = ['Mario', 44];
console.log('person1 tuple', person1);
console.log(`Person1 Name is ${person1[0]}`);


// Enum
enum Color {Red = 2, Green, Blue};
let c: Color = Color.Green;
console.log(c);


let myVariable: unknown = 10;
console.log('My unknown variable : ' , myVariable);
//(myVariable as string).toUpperCase();


let multiType: number | boolean;
multiType = 20;
multiType = true;
console.log('multiType : ', multiType);


let anyType: any;
anyType = 20;
anyType = 'Dan';
console.log('anyType : ', anyType);




let student : {
    readonly id: number,
    name : string,
    examDate: (date: Date) => void
} = { 
    id : 1,
    name : 'Mario',
    examDate: (date: Date) => {
        console.log(date)
    }
};

console.log(`Student name : ${ student.name }`);




// Union Types
function kgToLbs(weight : number | string) : number {
    // Narrowing
    if(typeof weight === 'number'){
        return weight * 2.2
    }else return parseInt(weight) * 2.2;
}

const kg1 = kgToLbs(10);
const kg2 = kgToLbs('10kg');
console.log('kg as number', kg1);
console.log('kg as string', kg2);






function add(num1 : number, num2 : number = 10) {
    if(num2)
        return num1 + num2
    else
        return num1
}
console.log(add(5,10));
console.log(add(5));



function calculateTax(income : number, taxYear: number = 2022) : number {
    if(taxYear < 2022)
        return income * 1.2
    return income * 1.3;
}
calculateTax(10_000)





interface Person {
    firstName: string;
    lastName? : string;
}

function fullName(person : Person) {
    let personFullName = `${person.firstName} ${ (person.lastName ? person.lastName : '') }`
    console.log(personFullName);
}

let newPerson = { firstName : 'Peter', lastName : 'Pan' };
fullName(newPerson);




class Employee {
    public employeeName: string;

    constructor(name: string){
        this.employeeName = name;
    }

    greet(){
        console.log(`Good Morning ${this.employeeName}`);
    }
}

let emp1 = new Employee('Mario');
console.log(emp1.employeeName);
emp1.greet();


// Extended Class
class Manager extends Employee {
    constructor(managerName : string){
        super(managerName);
    }
    delegateWork(){
        console.log(`Manager is deletaging work`);
    }
}

let manager1 = new Manager('Steve');
console.log(`Manager name is : ${manager1.employeeName}`);
manager1.greet();
manager1.delegateWork();





function greet(name : string | null){
    if(name){
        console.log(name.toUpperCase());
    }else console.log('Hola!');
    
}
greet(null);






// Intersection Types
type Draggable = {
    drag: ()=> void
}
type Resizable = {
    resize: ()=> void,
    log: (message : string)=> void
}

type UIWidget = Draggable & Resizable;
let textBox: UIWidget = {
    drag: ()=> {},
    resize: ()=> {},
    log: (message)=> console.log(message)
}

textBox.log('hello method on textbox');



//Literal (exact, specific)
type Quantity = 50 | 100;
let quantity: Quantity = 100;
console.log(`Quantity : ${quantity}`);

//type Metrics = 'cm' | 'inch';



// Optional Chaining
type Customer = {
    birthday? : Date
}

function getCustomer(id : number) : Customer | null {
    return id === 0 ? null : { birthday : new Date() }
}

let customer = getCustomer(0);

// Optional property access operator
console.log(customer && customer?.birthday?.getFullYear() ? customer?.birthday?.getFullYear() : 'customer not found');

// Optional element access operator
let findCustomeById = customer?[0] : 'no customer found';
console.log(`Customer id : ${findCustomeById}`);


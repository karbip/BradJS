// Objects and Spread Operator and Object methods
//________________________________________________________________________________

/*
// Create object using Object Literal
const toDo = {};

// Add property to object
toDo.id = 1;
toDo.name = "Item1";

console.log(toDo);

// Create object using Object() constructor
const todo = new Object();

todo.id = 2;
todo.name = "Item2";

console.log(todo);
*/

//________________________________________________________________________________
// Spread Operator Example in Objects

/*
let x;

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

// Create nested objects
x = { obj1, obj2 };

// Create single object using Spread (...) operator
x = { ...obj1, ...obj2 };

// ________Object.assign() method________
y = Object.assign({}); // Creates empty object y

//assigns obj1 properties to object y
y = Object.assign({}, obj1);

//assigns obj1 properties to object y
y = Object.assign({}, obj2);

//assigns obj1 and obj2 properties to object y --- works similar to Spread operator
y = Object.assign({}, obj1, obj2);

console.log(y);
*/

//__________________________________________________________________________________

// Array of Objects

let x;

const str_literal = `years old`;

const arrayOfObjects = [
  (person1 = {
    fname: "biprajit",
    age: 39,
  }),
  (person2 = {
    fname: "soma",
    age: 38,
  }),
  (person3 = {
    fname: "eartha",
    age: 1,
  }),
];

// Access eartha details
x = person3.fname; // access name
y = person3.age; // access age

//console.log(x, y);

// Print using Template literal
console.log(`${person3.fname} is ${person3.age} ${str_literal} `);

// console.log(`${this.fname} is ${this.age} ${str_literal}`); // Output -  undefined is undefined years old

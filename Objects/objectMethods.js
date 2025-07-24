/* ____________________________Object Methods _______________________________ */

// const obj1 = Object.assign({}); // Creates an empty object
// const obj1 = new Object(); // Create an object

let x, y;

const person = {
  name: "Biprajit Kar",
  age: 39,
  location: "Bangalore",
};

const globalArrayObject = [
  { name: "Biprajit", age: 39, country: "India" },
  { name: "Max", age: 52, country: "U.S" },
];

// Access country: India
globalArrayObject[0].country;

// ________ Object.assign() _________

// Creates an object Obj1 and assign globalArrayObject properties to obj1 ; all in one line
const obj1 = Object.assign({}, globalArrayObject);

// ________ Object.keys() _________

// Put all object properties(keys from key-value pair) in an array
x = Object.keys(person);

// Get length of an object by first using Object.keys() and then length method on array
var objectLength = Object.keys(person).length;

// ________ Object.values() _________

// get all values only from key-value pair in an object and put in an array
x = Object.values(person);

// ________ Object.entries() ________

// Converts key-value pair to a nested array within array
x = Object.entries(person);

// ________ person.hasOwnProperty() __________

// Checks if object contains a certain property
x = person.hasOwnProperty("Location"); // false
x = person.hasOwnProperty("name"); // true

console.log(x);

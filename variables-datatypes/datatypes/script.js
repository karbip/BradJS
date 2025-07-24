// DATA TYPES
// PRIMITIVE and REFERENCE(OBJECT) Type

// Primitive: numbers, string, boolean, null, undefined, Symbol, bigInt
// Stores data in stack

// Reference: Array, Functions, Objects
// Stores data in a heap
// When assigned to a variable, it store the reference to that value

let person = {
  name: "bumba",
  age: 40,
};

let newPerson = person; // newPerson points to same object instead of creating new object

console.log(person);

console.log(newPerson);

newPerson.email = "biprajit.k@gmail.com";

console.log(person); // newPerson points to same object instead of creating new object, since newPerson.email was added to person object

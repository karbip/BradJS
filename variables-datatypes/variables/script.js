// ways to declare variables
// var, let, const

let fname = "biprajit";
let lname = "kar";
const age = 39;

console.log(fname, lname, age);

// Declare object
const person = {
  name: "Biprajit",
  city: "Bangalore",
};

console.log(person);

// Add key value pair to object
person.email = "biprajit.k@gmail.com";

console.log(person);

person.age = "39";

console.log(person);

// Delete a key value pair from object
delete person.email;
console.log(person);

//
let a = 1,
  b = 2;
console.log(a, b);

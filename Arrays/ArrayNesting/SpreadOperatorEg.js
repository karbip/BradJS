/* _______________Spread Operator_______________ (...) */
//_______________________________________________________
// Does almost same work as concat

/*
let x;

const fruits = ["Mango", "Apple", "Orange"];
const berries = ["Raspberry", "Blueberry", "Strawberry"];

x = [...fruits, ...berries]; // Output - [ 'Mango', 'Apple', 'Orange', 'Raspberry', 'Blueberry', 'Strawberry' ]
// Similar to 'concat'

x = [...fruits, berries]; // Output - ['Mango', 'Apple', 'Orange',['Raspberry', 'Blueberry', 'Strawberry']]
// Creates array within array
// just like Array nesting command - array = array1.push(array2)
// and Output - [array1, [array2]]

console.log(x);
*/

/* _________________Flatten Array method_______________ */
//________________________________________________________

/*
let y;

const menClothes = [
  ["Tshirts", "Shirts"],
  ["Cotton Trousers", "Denim Trousers"],
  "Shorts",
  "Socks",
];

y = menClothes.flat();

console.log(y);
*/

/* _______________Static Methods on Array Objects _______________*/
//________________________________________________________________

let z;

const fruits = ["Mango", "Apple", "Orange"];
z = Array.isArray(fruits); // Static method  'isArray' on Array Object; used with prefix 'Array.'

z = Array.from("12345"); // Static method 'from' will create array [ '1', '2', '3', '4', '5' ]

// Static method 'of' will create Array
const a = 1;
const b = 2;
const c = 3;

z = Array.of(a, b, c); // Output - [1, 2, 3]

console.log(z);

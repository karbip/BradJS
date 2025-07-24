// Array Nesting, concat and spread operator

let x;

const fruits = ["mango", "apple", "orange"];
const berries = ["blueberry", "strawberry", "raspberry"];

// Create nested array
fruits.push(berries); // output - ['mango','apple','orange',['blueberry','strawberry','raspberry']]

// Access nested array element 'strawberry'
x = fruits[3][1]; // Access location of nested array by fruits[3], and then location of strawberry(1) within nested array using fruits[3][1]

console.log(x); // output - strawberry

// Create new array using existing array
const allFruits = [fruits, berries];
console.log(allFruits); // output - [['mango','apple','orange',['blueberry','strawberry','raspberry']],['blueberry','strawberry','raspberry']]

// Access 'strawberry' from new array allFruits
console.log(allFruits[1][1]); // access second array first as: with index 1 in allFruits[1], then access second element[1] within it: allFruits[1][1]

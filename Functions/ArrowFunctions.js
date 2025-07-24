// Arrow Functions advantages

// Implicit return
// More compact
// Lexical scopes

/*

// Regular function declaration
function addNum(a, b) {
  return a + b;
}
console.log(addNum(1, 2));

// Arrow function syntax
const addNumArrow = (a, b) => {
  return a + b;
};
console.log(addNumArrow(2, 3));

// Above Arrow function can be further shortened by removing return key word since its only 1 line expression
const addNumArrow2 = (a, b) => a + b;
console.log(addNumArrow2(100, 200));

// Another Example
const addDollarSign = (value) => "$" + value; // can leave off () for a single param
console.log(addDollarSign(100));

// Returning an object using Arrow function
const returnObject1 = () => ({
  name: "biprajit",
  id: 1,
});
console.log(returnObject1()); // function invoke will need () next to it, even if blank

*/
//_________________________________________________________________________________________________________________

// Using Arrow functions in callbacks

const numbers = [1, 2, 3, 4, 5];

numbers.forEach(function (n) {
  console.log(n);
});

// callback is passing a function to another function

// further shortened

numbers.forEach((n) => console.log(n));

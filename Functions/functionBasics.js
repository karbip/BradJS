// Function Basics
//_____________________________________________________________________________________

// Function declaration
function SayHello() {
  // Function definition or body
  console.log("Hello, world!");
}

// Invoke Function
SayHello();

//_____________________________________________________________________________________

// Return keyword

function addNumbers(num1, num2) {
  return num1 + num2;
}

console.log(addNumbers(2, 3));

//____________________________________________________________________________________

// Rest parameter

// Declare function with argument(...<variable_name>)
function restOperatorExample(...numbers) {
  return numbers;
}

// call function with parameters
console.log(restOperatorExample(1, 2, 3));

// output - [1,2,3] ; rest operator creates array with parameters

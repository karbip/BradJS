// Challenge 1
/*
// As Normal Function
function getCelcius(F) {
  let c;
  c = ((F - 32) * 5) / 9;
  return c;
}
console.log(`The temperatue is ${getCelcius(32)} \xB0C`);
*/

// As an Arrow Function
const getCelcius = (F) => ((F - 32) * 5) / 9;
console.log(`The temperatue is ${getCelcius(32)} \xB0C`);

//__________________________________________________________________________________________

// Challenge 2
// As Normal function
/*
function minMax(arr) {
  let min_value = Math.min(...arr); // use spread operator to convert array to list of numbers
  let max_value = Math.max(...arr);
  //return the object after creatig in same line
  return {
    min: min_value,
    max: max_value,
  };
}
console.log(minMax([1, 2, 3, 4, 5]));
*/

// As an Arrow Function
const minMax = (arr) => {
  min = Math.min(...arr);
  max = Math.max(...arr);
  //return the object after creatig in same line
  return {
    min,
    max,
  };
};
console.log(minMax([1, 2, 3, 4, 5]));

//__________________________________________________________________________________________

// Challenge 3
// As a Normal IIFE function
/*
(function (length, width) {
  let area = length * width;
  console.log(
    `The area of a rectangle with length ${length} and width ${width} is ${area}`
  );
})(4, 4);
*/

// IIFE as an Arrow Function

((length, width) => {
  let area = length * width;
  console.log(
    `The area of a rectangle with length ${length} and width ${width} is ${area}`
  );
})(4, 4);

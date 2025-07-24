// Array Filter

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Using conventional fn
const newArr1 = numbers.filter(function (item) {
  return item % 2 === 0;
});
console.log(newArr1);

// Filter out only even numbers from the array
// Using Arrow fn
const newArr2 = numbers.filter((item) => item % 2 === 0);
console.log(newArr2);

// Filter odd numbers into another array
const oddNum = numbers.filter((item) => item % 2 !== 0);
console.log(oddNum);

// With forEach, more complicated -since we need to use push method
let evenNumber = [],
  oddNumber = [];
numbers.forEach((number) => {
  if (number % 2 === 0) {
    evenNumber.push(number);
  } else {
    oddNumber.push(number);
  }
});
console.log(evenNumber);
console.log(oddNumber);

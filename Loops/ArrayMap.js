const numbers = [1, 2, 3, 4, 5];

// Long way
const mappedNumbers = numbers.map(function (number) {
  return number * 2;
});
console.log(mappedNumbers); // print doubled array values

// Short way
const mappedNumbers1 = numbers.map((number) => number * 3);
console.log(mappedNumbers1); // // print 3 times array values

// Same with forEach
const mappedNumbers2 = [];
numbers.forEach((number) => {
  mappedNumbers2.push(number * 2);
});
console.log(mappedNumbers2);

// Chain map methods
const squareAndDouble = numbers
  .map((number) => Math.sqrt(number))
  .map((doubleNumber) => doubleNumber * 2);
console.log(squareAndDouble);

// Longer version of Chain map method
const squareAndDouble2 = numbers
  .map(function (number) {
    return Math.sqrt(number);
  })
  .map(function (sqrt) {
    return sqrt * 2;
  });
console.log(squareAndDouble2);

console.log(
  "___________________________________________________________________________"
);

// Chaining different methods- not only map
const evenDoubled = numbers
  .filter((number) => number % 2 === 0)
  .map((number) => number * 2);

console.log(evenDoubled);

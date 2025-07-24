// Array Reduce
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sum = numbers.reduce(function (accumulator, currentValue) {
  return accumulator + currentValue;
}, 0);
// 0 is initialValue
console.log(sum);

// Reduce method as a for loop

const sum2 = () => {
  let acc = 0;
  for (const curr of numbers) {
    acc += curr;
  }
  return acc;
};
console.log(sum2());

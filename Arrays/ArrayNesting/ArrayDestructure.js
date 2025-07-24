const numbers = [23, 33, 45, 67];
// Destructure Array
var [first, second, third, fourth] = numbers;
console.log(first, second, third, fourth);

// use ... (spread operator) to create an array or remaining values
const numbers2 = [11, 45, 66, 78];
var [first, ...rest] = numbers2;
console.log(rest);

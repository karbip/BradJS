var x = Math.floor(Math.random() * 100 + 1); // Generate random number between 1-100

var y = Math.floor(Math.random() * 50 + 1); // Generate random number between 1-50

//console.log(x, y);

var sumOutput, differenceOutput, productOutput, quotientOutput, rmOutput;

sumOutput = `${x} + ${y} = ${x + y}`;
differenceOutput = `${x} - ${y} = ${x - y}`;
productOutput = `${x} * ${y} = ${x * y}`;
quotientOutput = `${x} / ${y} = ${x / y}`;
rmOutput = `${x} % ${y}= ${x % y}`;

console.log(sumOutput);
console.log(differenceOutput);
console.log(productOutput);
console.log(quotientOutput);
console.log(rmOutput);

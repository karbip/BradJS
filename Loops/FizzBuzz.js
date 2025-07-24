// For numbers between 1-100
// print 'Fizz' for multiple of 3 and 'Buzz' for multiple of 5 instead of the number
// for numbers which are both multiples of 3 and 5, print 'FizzBuzz'

// Loop from 1-100
for (i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}

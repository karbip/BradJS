// Array Method Challenges

const people = [
  {
    firstName: "John",
    lastName: "Doe",
    email: "doe@gmail.com",
    age: 30,
    phone: "111 - 111 - 1111",
  },
  {
    firstName: "Jane",
    lastName: "Poe",
    email: "poe@gmail.com",
    age: 25,
    phone: "222 - 222 - 2222",
  },
  {
    firstName: "Bob",
    lastName: "Foe",
    email: "foe@gmail.com",
    age: 45,
    phone: "333 - 333 - 3333",
  },
  {
    firstName: "Sara",
    lastName: "Soe",
    email: "soe@gmail.com",
    age: 19,
    phone: "444-444 - 4444",
  },
  {
    firstName: "Jra",
    lastName: "Joe",
    email: "jj@gmail.com",
    age: 23,
    phone: "555 - 555 - 5555",
  },
];

/*_____Challenge 1_____*/

// From people array return a new array of object called 'youngPeople' with name and email address properties of people with age 25 or under

const youngPeople = people

  // Filter people below age 25
  .filter((person) => person.age <= 25)

  // Combine firstName and lastName keys into one single key name and return desired keys from object i.e name and email only
  .map((person) => {
    return {
      name: person.firstName + " " + person.lastName,
      email: person.email,
    };
  });

console.log(youngPeople);

/*_____Challenge 2_____ */

// Add all positive numbers in the array: numbers = [2, -30, 50, 20, -12, -9, 7]

const numbers = [2, -30, 50, 20, -12, -9, 7];

// Get positive numbers only
const positiveNumbersSum = numbers
  .filter((number) => number > 0)

  // Use reduce method to evaluate all array items to one single item and get sum of positive numbers
  .reduce((accumulator, currentValue) => accumulator + currentValue, 0); // 0 is initial value

console.log(positiveNumbersSum);

/*_____Challenge 3_____ */

// Capitalize first letter of each word in the array : words = ['coder', 'programmer', 'developer']

const words = ["coder", "programmer", "developer"];

const capitalizedWords = words.map((word) => {
  // capitalize first letter
  return word[0].toUpperCase() + word.slice(1, word.length); // get the remaining part of the word using slice and concatenate
});
console.log(capitalizedWords);

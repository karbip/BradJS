// For Of loop

const items = ["pen", "pencil", "books", "table", "chair"];
// loop thru array
for (const item of items) {
  console.log(item);
}

const persons = [
  { name: "biprajit", age: 39, location: "bangalore" },
  { name: "soma", age: 38, location: "bangalore" },
];
// loop thru object
for (const person of persons) {
  console.log(person);
  // loop thru object property
  console.log(person.age);
}

// loop thru string
const str = "Hello, world!";
for (letter of str) {
  console.log(letter); // loop thru each letter
}

// loop over Maps
const map = new Map();
map.set("name", "biprajit");
map.set("age", 30);
for (const [key, value] of map) {
  console.log(key, value);
}

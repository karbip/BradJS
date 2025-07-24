let x;

const person = {
  name: "Biprajit Kar",
  age: 39,
  location: "Bangalore",
};

// add more data to object
// add simple key pair
person.sex = "Male";

// add object within object
person.address = {
  street: "Varthur Gunjur road",
  apartment: "Candeur Signature",
};

// add array to object
person.hobbies = ["music", "sports"];

// access nested object key value pair
// access apartment
x = person.address.apartment;

// access hobby sports
x = person.hobbies[1];

// update property data
// update simple key value pair
person.email = "biprajit.k@gmail.com";

// update nested object property
person.address.state = "Karnataka";

// update array property inside object
person.hobbies[2] = "driving";

// add a function as property to object
person.greet = function () {
  console.log(`Hello, my name is ${this.name}`);
};

person.greet();

// delete any property
delete person.location;

console.log(person);

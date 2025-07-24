// Challenge 1: Create the object
var library = [
  {
    title: "Book 1",
    author: "Author 1",
    status: { own: true, reading: false, read: false },
  },
  {
    title: "Book 2",
    author: "Author 2",
    status: { own: true, reading: false, read: false },
  },
  {
    title: "Book 3",
    author: "Author 3",
    status: { own: true, reading: false, read: false },
  },
];

//__________________________________________________________________________________________________________________
// Challenge 2: Edit property value
// Setting property read for all objects within library array to true
library[0].status.read = true;
library[1].status.read = true;
library[2].status.read = true;

//__________________________________________________________________________________________________________________
// Challenge 3: Destructure the key "title" from first book and rename the variable to "firstbook"
var { title: firstbook } = library[0]; // Access value of key "title" from array "library". And rename key "title" to "firstbook" using "{ title : firstbook }"
// console.log(firstbook); // Output - Book 1

//__________________________________________________________________________________________________________________
//Challenge 4: Stringify object in array library
var str_1 = JSON.stringify(library);
console.log(str_1);

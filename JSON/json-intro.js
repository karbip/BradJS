// JSON Methods:

const blogPost = {
  id: 1,
  title: "First Post",
  body: "First post body",
};

// JSON.stringify : convert to Json string
var json_packet = JSON.stringify(blogPost);
console.log(json_packet);

// JSON.parse : convert from json packet to object
var str2 = JSON.parse(json_packet);
console.log(str2);

//_________________________________________________________________________

// stringify or json can convert array of objects as well

const obj1 = [
  {
    id: 1,
    fname: "Biprajit",
    lname: "Kar",
    age: 39,
  },
  {
    id: 2,
    fname: "Eartha",
    lname: "Kar",
    age: 1,
  },
];

// Stringify
var str3 = JSON.stringify(obj1);
// console.log(str3);

// Parse
var str4 = JSON.parse(str3);
console.log(str4);

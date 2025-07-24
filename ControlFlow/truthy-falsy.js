// Truthy and Falsy values

/* 
Falsy Values:
- false
- 0
- "" or '' (Empty String)
- undefined
- null
- NaN
*/

/*
Truthy values:
- Anything which is not falsy
- '0' (0 in a string)
- true
- ' ' (Space in a string)
- 'false' (false as a string)
- [] (Empty Array)
- {} (Empty Object)
- function(){} (Empty Function)
*/

// Truthy and Falsy caveats
const children = 0;
if (!isNaN(children)) {
  console.log(`You have ${children} children`); // printed when children != 0
} else {
  console.log(`Please enter number of children`); // printed when children = 0
}
// In above case, children = 0 should also print you have 0 children ; e.g for in a form/ drop down selector
// but, Because 0 is falsy, else condition gets executed
// To overcome this, we use either:
// if(children !== undefined )
// or
// if (!isNaN(children))

// Checking for empty array
const post = [];
if (post.length > 0) {
  console.log("Non empty array"); // printed
} else {
  console.log("Empty array");
}
// Above condition check results in wrong info to be printed, because empty array is truthy
// Workaround, is to check array length instead
// if (post.length>0)

// Check for Empty Objects
const user = {};
if (Object.keys(user).length > 0) {
  console.log("User available");
} else {
  console.log("No user");
}
// if condition executed for an empty object, since empty object is truthy value
// Workaround is: if(Object.keys(user).length > 0), which converts object keys into array, where we can calculate length

// Loose Equality(==)
console.log(false == ""); // Prints True; which is wrong ; thus use '===' to compare
console.log(false == 0); // Prints True; which is wrong ; thus use '===' to compare
console.log(null == undefined); // Prints True; which is wrong ; thus use '===' to compare

// Syntax: condition ? <true block>: <false block>

// Normal condition using if/else

let age = 10;
/*
if (age >= 18) {
  console.log("You can vote");
} else {
  console.log("You cannnot vote");
}
*/

// *** Using Ternery operator ***

// age >= 18 ? console.log("You can vote") : console.log("You cannot vote");

// Assigning a variable to ternery operator
// const canVote = age >= 18 ? true : false; // assign bool value to variable
const canVote = age >= 18 ? "Can vote" : "Cannot vote"; // assign string directly and print to console

console.log(canVote);

// Multiple Statements in Ternery operator

let auth = false;
//let redirect;
// Long method with if/else
/*
if (auth) {
  alert("Welcome to Dashboard");
  redirect = "/dashboard";
} else {
  alert("Access denied");
  redirect = "/login";
}
*/

// Using Ternery operator
const redirect = auth
  ? (alert("Welcome to dashboard"), "/dashboard")
  : (alert("Access denied"), "/login");

console.log(redirect);

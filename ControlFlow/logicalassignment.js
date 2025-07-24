/*

||= Assigns the right side value if the left side is falsy value
&&= Assigns the right side value only if the left side is a truthy value
??= Assigns the rigt side value only if the left side is null or undefined

*/

// ||= Example

let a = false;
/*
// Long format of  ||=
if (!a) {
  a = 10;
}
*/
a ||= 10; // assigns 10 to variable a only if left operand of ||= is false
console.log(a);

//___________________________________________________________________________________________

// &&= Example

let b = true;

// Long form of &&=
/*
if (b) {
  b = 100;
}
*/

b &&= 100; // assigns 100 to variable b only if left operand of &&= is true
console.log(b);
//____________________________________________________________________________________________________________

// ??= Example

let c = 0;
/*
// Long form of ??=
if (c === null || c === undefined) {
  c = "cat";
}
*/

c ??= "cat"; // assigns 'cat' to variable c only if left side of ??= is null or undefined

console.log(c);

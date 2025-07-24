// Capitalize first letter

const myString = "developer";

let myNewString;

// My solution
/*
myNewString = myString.slice(0, 1);
myNewString = myNewString.toUpperCase();
myNewString = myNewString + "eveloper";
console.log(myNewString);
*/

// Solution 1 using array index
myNewString = myString[0].toUpperCase() + myString.substring(1);
console.log(myNewString);

// Solution 2 charAt()
myNewString = myString.charAt(0).toUpperCase() + myString.substring(1);
console.log(myNewString);

// Solution 3 using index, and print using template literal
myNewString = `${myString[0].toUpperCase()}${myString.substring(1)}`;

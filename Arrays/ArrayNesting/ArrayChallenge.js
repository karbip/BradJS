/*
// Array Challenge 1
// Convert array arr = [1, 2, 3, 4, 5] to [6, 5, 4, 3, 2, 1, 0]
//__________________________________________________________________________________

const arr = [1, 2, 3, 4, 5];

// add 0 at array start
arr.unshift(0);

// add 6 at array end
arr.push(6);

// reverse array
arr.reverse();

console.log(arr);
*/

// ______________________________________________________________________________________
// Array Challenge 2
// Take 2 arrays arr1 =[1,2,3,4,5] and arr2=[5,6,7,8,9,10] and make them into 1 array arr3=[1,2,3,4,5,6,7,8,9,10]
//_______________________________________________________________________________________

let arr3;

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [5, 6, 7, 8, 9, 10];

// Remove 5 from arr2
arr2.splice(0, 1);

// combine arr1 and arr2 usng spread operator
arr3 = [...arr1, ...arr2];
console.log(arr3);

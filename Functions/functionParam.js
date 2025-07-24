// Function Parameters

//_____________________________________________________________________________________________

// Default parameters

// Declare default value for user is nothing passed as argument
function registeredUser(user = "Bot") {
  return user + " is registered";
}
console.log(registeredUser());

//_____________________________________________________________________________________________

// Rest Parameters

function sum(...numbers) {
  return numbers;
}
console.log(sum(1, 2, 3)); // Output - Array of numbers

//_____________________________________________________________________________________________________________

// Sum of numbers passed into function, using Rest Param

function sum1(...numbers1) {
  let total = 0;
  for (const num of numbers1) {
    total += num;
  }
  return total;
}
console.log(sum1(0, 0, 0));

//_________________________________________________________________________________________________________________

// Objects as params

function loginUserID(user) {
  return `User ${user.name} with ID ${user.id} is logged in`;
}
const user = {
  id: 1,
  name: "biprajit",
};
console.log(loginUserID(user)); // pass object reference as parameter
console.log(loginUserID({ id: 2, name: "Eartha" })); // pass object directly

//________________________________________________________________________________________________________________

// Array as Param

// Sum of array elements
function arraySum(arr) {
  let arrtotal = 0;
  for (const arrElement of arr) {
    arrtotal += arrElement;
  }
  return arrtotal;
}
console.log(arraySum([1, 2, 3, 4]));

// Pick up a random number from an array of numbers
function getRandom(arr1) {
  // get random index
  const randomIndex = Math.floor(Math.random() * arr1.length); // generate a random non-decimal number between 0 and arr.length

  // print element present at randomly chosen index
  const item = arr1[randomIndex];

  console.log(item);
}
getRandom([2, 4, 6, 7, 8, 0, 12]);

// Same function above with rest parameter will look like below
// Only difference is we dont have to pass as an array[], since rest parameter will convert it into an array
// just by adding ... in fnction declaration

/*
function getRandom(...arr1) {
  
}
getRandom(2, 4, 6, 7, 8, 0, 12);
*/

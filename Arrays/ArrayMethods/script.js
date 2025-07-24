let x, y;
// Array Methods
var arr = [23, 4, 33, 1.1, "Tea"];

// Push
arr.push("Mango"); // Push to end of Array
x = arr;

//Pop
arr.pop(); // Pops out last element, no need to pass argument
x = arr;

// Add to beginning of Array
arr.unshift(2.1);
x = arr;

// Remove from beginning of Array
arr.shift();
x = arr;

// Check if array contains an item
x = arr.includes("Mango"); //returns boolean value

// Check index of element
x = arr.indexOf("Mango"); // returns -1 since element does not exist
x = arr.indexOf(1.1); // returns position 3

// Slice method

// Does not remove elements from original array

//x = arr.slice(1); // array will be sliced from index location 1 till end of array x = [4,33,1.1,'Tea']
x = arr.slice(1, 4); // array will be sliced from index position 1 to index position 3 (4-1) ; x = [4,33,1.1]

// Splice method

// splice will remove elements from original array

//x = arr.splice(1, 4); // remove 4 elements starting from index position 1, so now arr = [23] and x = [23]

// splice method can help in removing a single element from array; dynamically, unlike pop(array end) or shift(array beginning)
x = arr.splice(3, 1); // removes 1.1 at index location 3. So now, arr=[23,4,33,'Tea'] and x=[1.1]

console.log(x, arr);

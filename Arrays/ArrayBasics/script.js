let x;

// Simple Array declaration
const arr1 = [12, 23, 44];
x = arr1;

// Array declaration using Array constructor
const arr2 = new Array(2, 4, 6.5);
x = arr2;

// Access array elements
x = arr1[0]; //output: 12
x = arr2[2]; //output: 6.5
x = arr2[3]; //undefined

// Access array element in Template literal
const FruitsILike = ["mango", "banana", "orange"];
x = `The fruit I like the most among ${FruitsILike[0]}, ${FruitsILike[1]}, and ${FruitsILike[2]} is ${FruitsILike[0]}.`;

// Add an array element - hardcoded using index position
FruitsILike[3] = "Watermelon";
x = FruitsILike;

// Add an array element - using length dynamically
FruitsILike[FruitsILike.length] = "strawberry";

// Update an array element using index
FruitsILike[0] = "Pear";
x = FruitsILike;

console.log(x);

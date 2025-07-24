// For Each loop
// High order array loop
// contains callback function
// Does not return any value

const Socials = ["Twitter", "Facebook", "Instagram", "LinkedIn"];
//console.log(Socials.__proto__);
console.log(
  "_____________________________________________________________________________________________________"
);

Socials.forEach(function (ArrayItem) {
  console.log(ArrayItem);
});

// writing above forEach loop using arrow function
Socials.forEach((ArrayItem) => console.log(ArrayItem));

// We can also pass additional paramaters to callback fn inside forEach
Socials.forEach((ArrayItem, index, arr) =>
  // Passed ArrayItem, its index and the original array itself (Array name can be different)
  console.log(
    `${index}- ${ArrayItem} in array Socials containing following values: [${arr}]`
  )
);
console.log(
  "_____________________________________________________________________________________________________"
);

// We can also use a named fn instead of an anonymous callback fn
function socialSites(item) {
  console.log(item);
}
Socials.forEach(socialSites);
console.log(
  "_____________________________________________________________________________________________________"
);

// forEach in Objects
const socialObj = [
  { name: "Twitter", url: "twitter.com" },
  { name: "Facebook", url: "facebook.com" },
  { name: "Insta", url: "instagram.com" },
  { name: "LinkedIn", url: "LinkedIn.com" },
];
socialObj.forEach((item) => console.log(item)); // print objects
socialObj.forEach((item) => console.log(item.url)); // access specific object property only

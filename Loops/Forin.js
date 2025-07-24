// For in loop
// Used when we want to loop thru an object's values

const colorObject = {
  color1: "Red",
  color2: "Blue",
  color3: "Green",
};

for (const key in colorObject) {
  console.log(key);
  // loop thru the keys only
  console.log(colorObject[key]);
  // loop thru values only
  console.log(`${key} contains ${colorObject[key]}`);
  // loop thru object key and values
}
console.log("________________________________________________________");
// For in to loop over array
const colorArray = ["Red", "Blue", "Green"];
for (const color in colorArray) {
  console.log(color);
  // gives us the index/ keys
  console.log(colorArray[color]);
  // gives array values
}

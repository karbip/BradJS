// Function Declaration vs Function Expression

// Function declaration

function addDollarSign(value) {
  return "$" + value;
}
console.log(addDollarSign(100));

// Function Expression

const addPlusSign = function (value) {
  return "+" + value;
};
console.log(addPlusSign(200));

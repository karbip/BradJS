// Declare variable amount containing string value
var amount = "100";
var amt = "Hello";
amt = parseInt(amt);

// Convert String to number
// parseInt
console.log(amount, typeof parseInt(amount));
console.log(amt, typeof parseInt(amt));
// Unary + operator
console.log(amount, typeof +amount);
// Number constructor
console.log(amount, typeof Number(amount));

// Convert Number to String
var amount1 = 100;
// using toString() method ; this one uses object wrapper concept *
var amount2 = amount1.toString();
console.log(amount2, typeof amount2);
// using constructor String()
var amount3 = String(amount1);
console.log(amount3, typeof amount3);

// Convert decimal string to number
var amount4 = "99.5";
var amount5 = parseFloat(amount4);
console.log(amount5, typeof amount5);

// Convert to Boolean

var amount6 = 4;
var amount7 = Boolean(amount6); // using Boolean() constructor
console.log(amount7, typeof amount7);
// Note. all numbers except 0 will be true, i.e. truthy values

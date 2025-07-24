// Date Objects and methods

let x;

let d = new Date();

x = d.getDate();

x = d.toString();

x = d.getTime();

x = d.getTimezoneOffset();

//Construct a date using date objects

x = `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`;

// Use Intl API
x = Intl.DateTimeFormat("en-IN").format(d);

console.log(x);

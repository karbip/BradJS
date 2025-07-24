var x;

x = 5 + "5"; // OUTPUT -> 55 String

// Type coercion happens here;  JS implicitly converts the number 5 to string. Thus, out put is: 55 String

// We need to convert string to number before adding, else it will concatenate

x = 5 + Number("5"); // OUTPUT -> 10 Number

// For + operator, concatenate precedes, for other operators like * - / ; Js converts string to number

x = 5 * "5"; // OUTPUT -> 25 Number

x = 5 + NaN; // OUTPUT - > NaN Number

x = 5 + null; // OUTPUT - > 5 Number ; Number() constructor used by JS to convert null to 0

console.log(x, typeof x);

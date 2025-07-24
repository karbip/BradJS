let d;

d = new Date();

// Pass date values and time as argument to Date() fn
d = new Date(2025, 3, 27, 10, 34);

// Pass date as a string to Date() fn
d = new Date("2025-04-25T10:34:35"); // yyyy-mm-ddThh:mm:ss format --- valid format
/*
d = new Date("2025-25-04T10:34:10"); //yyyy-dd-mm is invalid format
d = new Date("25-04-2025T10:34:35"); //dd-mm-yyyy is invalid format
d = new Date("04-25-2025T10:34:35"); //mm-dd-yyyy is invalid format
*/

// TimeStamp
d = d.getTime(); // 1745557475000 miliseconds for date 2025-04-25T10:34:35
d = d.valueOf(); // 1745557475000 miliseconds for date 2025-04-25T10:34:35

// Get Date and Time from TimeStamp
d = new Date(1745557475000); // Pass Timestamp in milisecond as argument to Date() fn

console.log(d);

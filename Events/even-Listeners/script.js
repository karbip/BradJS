/* JS Event Listeners */

/* 

Using addEventListener(<typeOfEvent>, <callbackFunction>) method

*/

// Select dom element to create event
const clearBtn = document.querySelector("#clear");

// Create event
clearBtn.addEventListener("click", () => alert("Items Cleared"));

clearBtn.addEventListener("click", () => console.log("Items cleared")); // can have multiple event listeners on same DOM element, doing different things

/* 

// We can set a automatic event creation too using setTimeout(<callbackFunction>, <timer>)
//setTimeout(() => alert("Items cleared"), 5000); // displays alert box after 5 seconds

*/

/** IMPORTANT --- 

// Add functionality of removing items from the page using 'Clear All' button
const clearBtn_actual = document.querySelector("#clear");

clearBtn_actual.addEventListener("click", () =>
  document.querySelector("ul").remove()
);

**/

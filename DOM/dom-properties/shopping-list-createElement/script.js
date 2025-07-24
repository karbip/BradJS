/* Create and Append Element using JS */
// Will use Shopping List example

// Create Element
const div_element1 = document.createElement("div");

// Create Attribute
div_element1.className = "my-element-class";
div_element1.id = "my-element-id";

// Set Attribute
div_element1.setAttribute("Title", "My Element");

// Put content in element
// Method 1 -  use innerText - NOT RECOMMENDED
// div_element1.innerText = "Hello, world!";

// Method 2 - use text node creation property instead -  .createTextNode()
const text_for_div_element1 = document.createTextNode("Hello, world!");
// Now link the variable containing text to the newly created element using property  - .appendChild()
div_element1.appendChild(text_for_div_element1);

// appendChild() can be also used to put element to HTML body in order for it to be displayed on web page
// document.body.appendChild(div_element1); // will put the new div element at the end of page by default

// We can also put the div element at any specific point in the HTML page, lets say at the end of the <ul>
document.querySelector("ul").appendChild(div_element1);

// console.log(div_element1);

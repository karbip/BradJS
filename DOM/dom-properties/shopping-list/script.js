// Properties to access DOM objects/ nodes

let output;

output = document.documentElement;
output = document.body;
output = document.head;

// get all elements inside head
output = document.head.children;

// get all elements inside body
output = document.body.children;

output = document.doctype;
output = document.domain;
output = document.contentType;
output = document.URL;
output = document.baseURI;

/* 
// Forms
output = document.forms;
// get form by index value
output = document.forms[0];
// get id of the form by index value
output = document.forms[0].id;
// get methods of the form by id
output = document.forms[0].method;
// rename id by index value
//output = document.forms[0].id = "new-id";
 */

// Links
// get first link
output = document.links[0];
// get the actual link
output = document.links[0].href;
// tag an id with link
output = document.links[0].id = "google-link";

// We can also use foreach on each element after converting to actual array since HTMLCollection is array type, but not exactly array
// first we convert HTMLCollection to array
const forms = Array.from(document.forms);
// Now we iterate through forms
forms.forEach;
(form) => console.log(form);

console.log("Output for: // tag an id with link");
console.log(output);

/*
_________________________________________________________________________________________
// DOM SELECTORS- SINGLE ELEMENT
// Properties and methods to access single elements

_________________________________________________________________________________________ 

*/
// document.getElementById()
output = document.getElementById("google-link");

// get a specific attribute using method getAttribute()
output = document.getElementById("google-link").getAttribute("id");
console.log(
  "Output of:  // get a specific attribute using method getAttribute()"
);
console.log(output);

// Set Attribute
document.getElementById("google-link").title = "shopping-list";
document.getElementById("google-link").setAttribute("class", "title"); // set class attribute to title

console.log("Output of: // Set Attribute");
console.log(output);

// use variable instead of typing getElementByID always such as:
const title = document.getElementById("google-link");

// Get or change or add content within a DOM element
console.log(title.textContent); // output: Google
// Change text content using following commands:

title.textContent = "content added using title.textContent";

title.innerText = "Content set using title.innetText";

title.innerHTML =
  "<strong> A Google link using title.innerHTML tag element</strong>";

// document.querySelector()

// get DOM element by tag
console.log("Output of: // get DOM element by tag");
console.log(document.querySelector("h1")); // output: null

// get element by id
console.log("Output of: // get element by id");
console.log(document.querySelector("#google-link")); // output: a#google-link.title

// get element by class
console.log("Output of: // get element by class");
console.log(document.querySelector(".title")); // output: a#google-link.title

// get element by attribute
console.log("Output of: // get element by attribute");
console.log(document.querySelector("input[type='text']")); // Output : null

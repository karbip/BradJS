/* An element is a single HTML tag*/
/* Here we work with elements and its - parent or child or siblings */

//______________________________________________________________________
// get child elements
//______________________________________________________________________

/* use 'children' property */
const parent = document.querySelector(".parent");
childElements = parent.children; // children is an attribute/ property - NOT a function
console.log(childElements); // output: HTMLCollection(3)[div.child, div.child, div.child]

// get specific child element text using index
console.log(parent.children[1].innerText); // Outputs: Child 2

// get class name
console.log(parent.children[1].className); // Output: child

// get Node name
console.log(parent.children[1].nodeName); // Output: DIV

// change innerText of element
console.log((parent.children[1].innerText = "Child Two"));

// change style of element
parent.children[1].style.color = "red";

/* use firstElementChild and lastElementChild properties */
console.log(parent.firstElementChild.innerText); // Output:Child 1
console.log(parent.lastElementChild.innerText); // Output: Child 3

//_____________________________________________________________________________________
// get parent element from a child
//______________________________________________________________________
// * use parentElement property *

const child = document.querySelector(".child");
parentElements = child.parentElement;
console.log("// get parent element from a child");
console.log(parentElements);

// get parent element text
parentElementsText = child.parentElement.innerText;
console.log("// get parent element text");
console.log(parentElementsText); // Output: Child 1 Child Two Child 3

//______________________________________________________________________
// Sibling selector
//______________________________________________________________________

const secondItem = document.querySelector(".child:nth-child(2)");
console.log("// Sibling selector");
console.log(secondItem); // Output: <div class='child' style = "color:red;">Child Two</div>

// using nextSibling will give us nextNode,
// instead
// To get next sibling from secondItem, we use *nextElementSibling* property
console.log("// get next sibling from secondItem");
console.log(secondItem.nextElementSibling); // Output: <div class='child'>Child 3</div>

// previousElementSibling
console.log("// previousElementSibling");
console.log(secondItem.previousElementSibling); // Output: <div class='child'>Child 1</div>

// Change style of previousElementSibling
secondItem.previousElementSibling.style.color = "blue";

// Change style of nextElementSibling
secondItem.nextElementSibling.style.color = "green";

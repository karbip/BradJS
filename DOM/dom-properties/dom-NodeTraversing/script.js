/* 
DOM Node types: Element
                Comments
                Text
                Attribute
                Entity
                EntityReference
                CDATASection
                ProcessingInstructions
                Document
                DocumentType
                DocumentFragment
                Notation
*/

//______________________________________________________________________
// use parent class to get child nodes using property *childNodes*
//______________________________________________________________________

const parent = document.querySelector(".parent");
console.log(
  "// use parent class to get child nodes using property *childNodes*"
);
console.log(parent.childNodes);

// use different properties to get from childNodes
console.log("// get the text from comment node");
console.log(parent.childNodes[1].textContent); // Output: Children * Will access the comment nodes since childNodes[1] point to comment node

// get the outerHTML of div Child 1
console.log("// get the outerHTML of div Child 1");
console.log(parent.childNodes[3].outerHTML);

// get the text from div Child 2
console.log("// get the text from div Child 2");
console.log(parent.childNodes[5].innerText); // Output: Child 2

// Change inntertext
console.log("// Change inntertext");
console.log((parent.childNodes[5].innerText = "Child Two"));

// Change color of innerText
parent.childNodes[5].style.color = "red";

// Get first child node
console.log("// Get first child node");
console.log(parent.firstChild); //output: #text
console.log(parent.lastChild); //output: #text

//______________________________________________________________________________________
// get parent node from child
//______________________________________________________________________________________

const child = document.querySelector(".child");
console.log(child.parentNode);

child.parentNode.style.backgroundColor = "Blue";
child.parentNode.style.padding = "10px";

//_______________________________________________________________________________________
// Siblings
//________________________________________________________________________________________

// Get the second sibling
console.log("// Get the second sibling");
const secondItem = document.querySelector(".child:nth-child(2)");
console.log(secondItem); // Output: <div class = "child" style='color:red">Child Two</div>

// Get the next sibling
console.log("// Get the next sibling");
console.log(secondItem.nextSibling);

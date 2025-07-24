/* 
Previous code using single function 

// Add HTML elements using JS 

function createNewItem(item) {
  // Create new list item
  const li = document.createElement("li");

  // Create text node for li element - this hold element text
  const li_text = document.createTextNode(item);
  // Push li_text node inside list element
  li.appendChild(li_text);

  // Create new button item
  const button = document.createElement("button");
  // Set class for button element
  button.className = "remove-item btn-link text-red";

  // Create new icon element
  const icon = document.createElement("i");
  // Set class for icon element
  icon.className = "fa-solid fa-xmark";

  // Push icon element inside button element
  button.appendChild(icon);
  // Push button element inside list element
  li.appendChild(button);
  // Push completed list element inside <ul> in the document
  document.querySelector(".items").appendChild(li);
}
createNewItem("Bread");

*/

//*

// This time with multiple functions - one for each element creation

function createNewItem(item) {
  const li = document.createElement("li"); // Create new list item

  li.appendChild(document.createTextNode(item)); // Put list text node inside list element

  const button = createButton("remove-item btn-link text-red"); // CreateButton function call

  li.appendChild(button); // Push button element inside list element

  document.querySelector(".items").appendChild(li); // Push completed list element inside <ul> in the document
}

// Button creation function
function createButton(classes) {
  const button = document.createElement("button"); // Create the button element
  button.className = classes; // set class that is passed as argument

  const icon = createIcon("fa-solid fa-xmark");
  button.appendChild(icon); // Push icon element inside button element

  return button;
}

// Icon creation function
function createIcon(classes) {
  const icon = document.createElement("i");
  icon.className = classes;
  return icon;
}

createNewItem("Butter");

createNewItem("Cookies");

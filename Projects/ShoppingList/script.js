// Define all global variables first
// Select DOM elements

const itemForm = document.getElementById("item-form");
const itemInput = document.getElementById("item-input");
const itemList = document.getElementById("item-list");

// Define all functions here
// addItem fn creates element from user input and calls - createButton fn
// createButton fn creates button and calls - createIcon fn

// addItem() fn
const addItem = (e) => {
  e.preventDefault();

  // Validate user input and access its value from user using itemInput.value
  const newItem = itemInput.value;
  if (newItem === "") {
    alert("Please add item");
    return;
  }

  // Placeholder console message to check if input was success
  console.log("success");

  // Create list item from user input
  const li = document.createElement("li");

  // Append newly created li element to DOM as a text node
  li.appendChild(document.createTextNode(newItem));

  // Placeholder to check if list item added or not
  console.log(li);

  // Create button element to contain the remove item X mark
  const button = createButton("remove-item btn-link text-red");

  // append button to list item
  li.appendChild(button);

  // Append complete li element to DOM
  itemList.appendChild(li);

  // Get itemList value and clear out before user enters next list item
  itemList.value = "";

  // Placeholder to check if button with icon has been
  console.log(button);
};

// createButton() fn
const createButton = (classes) => {
  const button = document.createElement("button");
  button.className = classes;

  // Append red X icon to button before returning button
  const icon = createIcon("fa-solid fa-xmark");
  button.appendChild(icon);

  return button;
};

// createIcon() fn
const createIcon = (classes) => {
  const icon = document.createElement("i");
  icon.className = classes;
  return icon;
};

// Event Listeners
itemForm.addEventListener("submit", addItem);

//
// Define all global variables first
//
//
// Select DOM elements by defining their variables first
const itemForm = document.getElementById("item-form");
const itemInput = document.getElementById("item-input");
const itemList = document.getElementById("item-list");
const clearBtn = document.getElementById("clear");
const itemfilter = document.getElementById("filter");
const formBtn = itemForm.querySelector("button");

// Variable for list in edit mode
let isEditMode = false;

//
// Define all functions here
// onAddItemSubmit() fn handles form submit event ; calls addItemToDOM() fn creates element from user input and calls - createButton() fn
// createButton() fn creates button and calls - createIcon() fn
//

//
// Display items from local storage
// This function comes first to display empty/ filled list depending on local storage
//
//
function displayItems() {
  const itemsFromStorage = getItemsFromStorage();
  itemsFromStorage.forEach((item) => addItemToDOM(item));
  checkUI();
}

//
// onAddItemSubmit() fn
//
//
const onAddItemSubmit = (e) => {
  e.preventDefault();

  // Validate user input and access its value from user using itemInput.value
  const newItem = itemInput.value;
  if (newItem === "") {
    alert("Please add item");
    return;
  }

  // Create item DOM element
  addItemToDOM(newItem);

  // Add item to local storage
  addItemToStorage(newItem);

  // Run checkUI() fn to check and make the clear all and item filter button appear whenever a new li item is added
  checkUI();

  // Get itemList value and clear out before user enters next list item
  itemInput.value = "";
};

//
// Add item to DOM
//
//
function addItemToDOM(item) {
  // Create list item from user input
  const li = document.createElement("li");

  // Append newly created li element to DOM as a text node
  li.appendChild(document.createTextNode(item));

  // Create button element to contain the remove item X mark
  const button = createButton("remove-item btn-link text-red");

  // Append button to list item
  li.appendChild(button);

  // Append complete li element to DOM
  itemList.appendChild(li);
}

//
// createButton() fn
//
//
const createButton = (classes) => {
  const button = document.createElement("button");
  button.className = classes;

  // Append red X icon to button before returning button
  const icon = createIcon("fa-solid fa-xmark");
  button.appendChild(icon);

  return button;
};

//
// createIcon() fn
//
//
const createIcon = (classes) => {
  const icon = document.createElement("i");
  icon.className = classes;

  return icon;
};

//
// Add items to local storage
//
//
function addItemToStorage(item) {
  const itemsFromStorage = getItemsFromStorage();

  // Add new item to array
  itemsFromStorage.push(item);

  // Convert to JSON and set to local storage
  localStorage.setItem("items", JSON.stringify(itemsFromStorage));
}

//
// Get items from local storage
//
//
function getItemsFromStorage(item) {
  let itemsFromStorage;
  if (localStorage.getItem("items") === null) {
    itemsFromStorage = [];
  } else {
    itemsFromStorage = JSON.parse(localStorage.getItem("items"));
  }

  return itemsFromStorage;
}

//
// onClickItem() fn
// On clicking delete icon - using red X to delete item
// On clicking the list item - it should highlight item and change state to edit mode
//
function onClickItem(e) {
  if (e.target.parentElement.classList.contains("remove-item")) {
    // Get the list item and remove it
    removeItem(e.target.parentElement.parentElement);
  } else {
    setItemToEdit(e.target);
  }
}
function setItemToEdit(item) {
  isEditMode = true;

  // Select li DOM element to edit
  itemList
    .querySelectorAll("li")
    .forEach((i) => i.classList.remove("edit-mode"));
  item.classList.add("edit-mode"); // Apply edit-mode CSS class to item selected
  formBtn.innerHTML = '<i class = "fa-solid fa-pen"> </i> Update item';
  formBtn.style.backgroundColor = "green";
  itemInput.value = item.textContent;
}

//
// removeItem() fn
//
//
const removeItem = (item) => {
  if (confirm("Are you sure?")) {
    // Remove item from DOM
    item.remove();

    // Remove item from local storage
    removeItemFromStorage(item.textContent);

    checkUI();
  }
};

//
// Remove items from local storage
//
//
function removeItemFromStorage(item) {
  let itemsFromStorage = getItemsFromStorage();

  // Filter out items to be removed
  itemsFromStorage = itemsFromStorage.filter((i) => i !== item);

  // Re-set local storage
  localStorage.setItem("items", JSON.stringify(itemsFromStorage));
}

//
// clearItems() button fn
//
//
const clearItems = (e) => {
  // Remove child element (text) if list contains an item
  while (itemList.firstChild) {
    itemList.removeChild(itemList.firstChild);
  }

  // Clear from localStorage
  localStorage.removeItem("items");

  // Run checkUI() fn to check and make the clear all and item filter button appear if any list items remain
  checkUI();
};

//
// filterItems() fn
//
//
function filterItems(e) {
  // Get the list item DOM element
  const item = itemList.querySelectorAll("li");

  // Get the user input text and convert to lower case for matching
  const text = e.target.value.toLowerCase();

  // For each list item
  item.forEach((item) => {
    // Get the list item text content
    const itemName = item.firstChild.textContent.toLowerCase();

    // Compare it with user input text
    if (itemName.indexOf(text) != -1) {
      // Display item if match
      item.style.display = "flex";
    } else {
      // Dont display item
      item.style.display = "none";
    }
  });
}

//
// Function checks at page load if list is empty and displays Clear All button and Filtert item button based on that
//
//
function checkUI() {
  // Items DOM element are defined here instead of global scope to make sure they are selected everytime a list item is added
  const items = itemList.querySelectorAll("li");

  // Display itemfilter and ClearBtn element if list has any item, otherwise dont
  if (items.length === 0) {
    clearBtn.style.display = "none";
    itemfilter.style.display = "none";
  } else {
    clearBtn.style.display = "block";
    itemfilter.style.display = "block";
  }
}

//
// Initialize app
//
//
function init() {
  // Event Listeners
  itemForm.addEventListener("submit", onAddItemSubmit);
  itemList.addEventListener("click", onClickItem);
  clearBtn.addEventListener("click", clearItems);
  itemfilter.addEventListener("input", filterItems);
  document.addEventListener("DOMContentLoaded", displayItems);

  // Run function when page loads
  checkUI();
}

init();

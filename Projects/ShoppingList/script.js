// Define all global variables first
// Select DOM elements

const itemForm = document.getElementById("item-form");
const itemInput = document.getElementById("item-input");
const itemList = document.getElementById("item-list");
const clearBtn = document.getElementById("clear");
const itemfilter = document.getElementById("filter");

// Define all functions here
// addItem fn creates element from user input and calls - createButton fn
// createButton fn creates button and calls - createIcon fn

//
// addItem() fn
//
const addItem = (e) => {
  e.preventDefault();

  // Validate user input and access its value from user using itemInput.value
  const newItem = itemInput.value;
  if (newItem === "") {
    alert("Please add item");
    return;
  }

  // Placeholder console message to check if input was success
  //console.log("success");

  // Create list item from user input
  const li = document.createElement("li");
  // Append newly created li element to DOM as a text node
  li.appendChild(document.createTextNode(newItem));
  // Placeholder to check if list item added or not
  //console.log(li);

  // Create button element to contain the remove item X mark
  const button = createButton("remove-item btn-link text-red");
  // append button to list item
  li.appendChild(button);

  // Append complete li element to DOM
  itemList.appendChild(li);

  // Run checkUI() fn to check and make the clear all and item filter button appear whenever a new li item is added
  checkUI();

  // Get itemList value and clear out before user enters next list item
  itemInput.value = "";

  // Placeholder to check if button with icon has been added
  //console.log(button);
};

//
// createButton() fn
//
const createButton = (classes) => {
  const button = document.createElement("button");
  button.className = classes;

  // Append red X icon to button before returning button
  const icon = createIcon("fa-solid fa-xmark");
  button.appendChild(icon);

  return button;
};

// createIcon() fn
//
const createIcon = (classes) => {
  const icon = document.createElement("i");
  icon.className = classes;

  return icon;
};

//
// removeItem() fn
//
const removeItem = (e) => {
  // Should fire off only if the icon we are clicking on has a parent, which is a button with class of 'remove-item'

  // Using event delegation, adding a click event to parent element
  if (e.target.parentElement.classList.contains("remove-item")) {
    // display alert message to user before deletion
    if (confirm("Are you sure to delete?")) {
      // remove the parent of parent (list item)
      e.target.parentElement.parentElement.remove();

      // Run checkUI fn to check and make the clear all and item filter button appear if any list items remain
      checkUI();
    }
  }
};

//
// clearItems() button fn
//
const clearItems = (e) => {
  // remove child element (text) if list contains an item
  while (itemList.firstChild) {
    itemList.removeChild(itemList.firstChild);
  }

  // Run checkUI() fn to check and make the clear all and item filter button appear if any list items remain
  checkUI();
};

//
// filterItems() fn
//
function filterItems(e) {
  // Get the list item DOM element
  const item = itemList.querySelectorAll("li");

  // Get the user input text and convert to lower case for matching
  const text = e.target.value.toLowerCase();

  // for each list item
  item.forEach((item) => {
    // Get the list item text content
    const itemName = item.firstChild.textContent.toLowerCase();

    // Compare it with user input text
    if (itemName.indexOf(text) != -1) {
      // Display item if match
      item.style.display = "flex";
    } else {
      // dont display item
      item.style.display = "none";
    }
  });
}

//
// function checks at page load if list is empty and displays Clear All button and Filtert item button based on that
//
function checkUI() {
  // items DOM element are defined here instead of global scope to make sure they are selected everytime a list item is added
  const items = itemList.querySelectorAll("li");

  // display itemfilter and ClearBtn element if list has any item, otherwise dont
  if (items.length === 0) {
    clearBtn.style.display = "none";
    itemfilter.style.display = "none";
  } else {
    clearBtn.style.display = "block";
    itemfilter.style.display = "block";
  }
}

// Event Listeners
itemForm.addEventListener("submit", addItem);
itemList.addEventListener("click", removeItem);
clearBtn.addEventListener("click", clearItems);
itemfilter.addEventListener("input", filterItems);

// run function when page loads
checkUI();

/* Custom insertAfter Challenge */

function insertAfter(newEL, existingEL) {
  // Get the parent element
  // Here we use a little trick - first check if we have access to parent element using
  console.log(existingEL.parentElement); // gives us output: ul#item-list.items - i.e. we do have access to parent element

  // Thus, use parentElement to directly call insertBefore method in one line
  existingEL.parentElement.insertBefore(newEL, existingEL.nextElementSibling);
}

// Create new element
const li = document.createElement("li");
li.textContent = "Insert me after";

// Get reference point - i.e. parent
const firstItem = document.querySelector("li:first-child");

insertAfter(li, firstItem);

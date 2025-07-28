/* Event Bubbling Demo */

// Select DOM element
const button = document.querySelector("form button");
// Parent of button element
const div = document.querySelector("form div:nth-child(2)");
// Parent of form
const form = document.querySelector("form");

// Add event listener
button.addEventListener("click", (e) => {
  alert("Button was clicked");
  e.stopPropagation();
});

// Event bubbling to now parent element of button - div ; if same event handler added to parent as well
div.addEventListener("click", (e) => {
  alert("div was clicked");
});

// Event bubbling further to parent of div - form
form.addEventListener("click", (e) => {
  alert("Form was clicked");
});

//
// To stop event from bubbling if same event handler is used, we add stopPropagation() method after button eventListener() method

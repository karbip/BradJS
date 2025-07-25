/* Input Events */

const itemInput = document.getElementById("item-input");
const priorityInput = document.getElementById("priority-input");
const checkboxInput = document.getElementById("checkbox");

// Define onInput() function
const onInput = (e) => {
  console.log(e.target.value);
};
// Define onChecked() fn
const onChecked = (e) => {
  console.log(e.target.checked);
};

/* Styling using focus and blur events block - START */
////////////////////////////////////////////////////////

// Define onFocus() fn on itemInput
const onFocus = (e) => {
  itemInput.style.outlineStyle = "solid";
  itemInput.style.outlineColor = "green";
};
// Define onFocus() fn on priorityInput
const onFocus_priorityInput = (e) => {
  priorityInput.style.outlineStyle = "solid";
  priorityInput.style.outlineColor = "green";
};
// Define onBlur() fn on itemInput
const onBlur = (e) => {
  itemInput.style.outlineStyle = "none";
};
// Define onBlur() fn on priorityInput
const onBlur_priorityInput = (e) => {
  priorityInput.style.outlineStyle = "none";
};
/* Styling using focus and blur events block - END */
////////////////////////////////////////////////////////

// Add event listener to 'Add Item' form
itemInput.addEventListener("input", onInput);

// Add event listener to 'Select priority' list
priorityInput.addEventListener("change", onInput);

// Add event listener to 'Checkbox' form
checkboxInput.addEventListener("input", onChecked);

// Onfocus and blur events
itemInput.addEventListener("focus", onFocus);
itemInput.addEventListener("blur", onBlur);
priorityInput.addEventListener("focus", onFocus_priorityInput);
priorityInput.addEventListener("blur", onBlur_priorityInput);

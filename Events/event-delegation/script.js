/* 
  Event Delegation 
  Used when we want to associate multiple elements to a single event listener
  like deleting multiple items from the shopping list
*/

/* 
Two ways to achive this- 
  1. Add event listener to multiple items
  2. Use event delegation
*/

/* 
// 1st method

// Select DOM element
const listItems = document.querySelectorAll("li");

// loop thru the listItems
listItems.forEach((item) => {
  item.addEventListener("click", (e) => {
    console.log(e.target);
    // delete items from list -  for event click
    e.target.remove();
  });
});
*/

// 2nd method - Event delegation
// Put a single event listener on parent element and target any child element

// Select parent element of target element
const list = document.querySelector("ul");
// Put event listener on parent
list.addEventListener("click", (e) => {
  console.log(e.target);
  // Change selected list item color
  if (e.target.tagName === "LI") {
    e.target.style.color = "red";
  }
});

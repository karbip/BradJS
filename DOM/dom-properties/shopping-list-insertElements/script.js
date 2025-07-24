/* Insert HTML, Text and other Element */
//___________________________________________________________________________________

// insertAdjacentElement EXAMPLE //
// Takes two arguments insertAdjacentElement('position'[beforebegin/ aftebegin/ beforeend/ afterend], elementName)

function insertElement() {
  // First we need a reference element - to indentify where we want to insert
  // In this example we choose the 'filter item' form input as reference point
  // Choose the '.filter' class to make the 'filter item' input as reference
  const filter = document.querySelector(".filter");

  // Create new element - say a h1 element
  const div_element = document.createElement("div");
  // Add text to the h1 element
  div_element.textContent = "insertAdjacentElement() inserts here";

  // Insert element - before ''filter item' input
  filter.insertAdjacentElement("beforebegin", div_element);
}
insertElement();

// insertAdjacentText EXAMPLE //
// Takes two arguments insertAdjacentText('position'[beforebegin/ aftebegin/ beforeend/ afterend], elementName)
function insertText() {
  // Define a reference point - lets say the first list item
  // li:firstChild to make the first list item as reference
  // li:last-child to make the last list item as reference
  const item1 = document.querySelector("li:first-child");

  // Can use siblingSelector to select 3rd list item ?
  const item2 = document.querySelector("li:nth-child(3)");

  // Insert text - before first list item
  item1.insertAdjacentText(
    "beforebegin",
    "insertAdjacentText() inserts here: beforebegin 1st li item added"
  );

  // Insert text - after 3rd list item
  item2.insertAdjacentText(
    "beforeend",
    "insertTextAdjacent(): beforeend 3rd li item added"
  );
}
insertText();

// insertAdjacentHTML EXAMPLE //
// Takes two arguments insertAdjacentText('position'[beforebegin/ aftebegin/ beforeend/
function insertHTML() {
  // Choose reference point
  const btn_clear = document.querySelector(".btn-clear");

  // Insert HTML
  btn_clear.insertAdjacentHTML(
    "afterend",
    "<div>Adding div HTML tag here using insertadjacentHTML()</div>"
  );
}
insertHTML();

/* insertBefore EXAMPLE  - We define a parent, choose item inside parent to act as reference for insertBefore */
function insertBeforeItem() {
  // Choose reference point
  // Here we choose the ul as parent
  const item = document.querySelector("ul");

  // Create the element we want to insert
  const li_item = document.createElement("li");
  // Add text to item
  li_item.textContent = "insertBefore()";

  // Select an item inside parent - lets say the 4th list item - to use as reference in variable fourthItem
  const fourthItem = document.querySelector("li:nth-child(4)");

  // We use parent to call the insertBefore function
  item.insertBefore(li_item, fourthItem); // Arguments taken: element to be inserted, reference point
}
insertBeforeItem();

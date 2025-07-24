/* Add item to the Shopping list */
/* Use JS to surface item  */
/*____________________________________________________________________*/

/* Quick and dirty way */

function createListItem(item) {
  const listItem = document.createElement("li");

  listItem.innerHTML = `${item}
    <button class="remove-item btn-link text-red">
        <i class="fa-solid fa-xmark"></i>
    </button>`;

  document.querySelector(".items").appendChild(listItem);
}

/* Clean and best way */

function createNewItem(item) {
  //Create list item element
  const li = document.createElement("li");

  //Create text node for the list element to hold item name
  const text_node_name = document.createTextNode(item);
  li.appendChild(text_node_name); //Add text node inside li element

  //Create button element
  const button = document.createElement("button");
  button.className = "remove-item btn-link text-red"; // give class property

  //Create icon element
  const icon = document.createElement("i");
  icon.className = "fa-solid fa-xmark"; // give class property as per index.html

  button.appendChild(icon); //Add icon element inside button element
  li.appendChild(button); //Add button element inside list item
  document.querySelector(".items").appendChild(li); //Add the whole li tag(includes all sub tags) to the document body
}

createListItem("Eggs");
createNewItem("Cheese");

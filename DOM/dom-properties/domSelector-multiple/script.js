/* DOM Selector - Multiple */

// querySelectorAll()

// query selector for all list items in the index.html file
const listItems = document.querySelectorAll("li");

console.log(
  "Output of: // query selector for all list items in the index.html file"
);
console.log(listItems);

// We can use high order Array methods on NodeList unlike HTMLCollection, where we first need to convert HTMLCollection into an arrray

// Access the list item text at index 1
console.log("// Access the list item text at index 1: ");
console.log(listItems[1].innerText);

// We can also use class reference to output all list items if there are more lists out class: items in the html file

const listItemsUsingClassReference = document.querySelectorAll(".items");
console.log("Output of all list items using class identified: .items");
console.log(listItemsUsingClassReference);

// we can change style of only an indivudual element as such,
listItems[1].style.color = "red"; // but
// listItems.style.color = "red"; // to change all elements will throw error since listItems is in node, which works with JQuery

// To change color of all list items to blue, we will can use forEach loop
listItems.forEach((item) => {
  item.style.color = "blue";
});

// To change list item text or color (basically change property based on a criteria)

listItems.forEach((item, index) => {
  if (index === 0) {
    item.innerText = "Banana";
    // This will remove the 'x' button from HTML page as li item contained more info and all got replaced

    // Thus, workaround is to include complete li item info as template string
    item.innerHTML = `Banana
          <button class="remove-item btn-link text-red">
            <i class="fa-solid fa-xmark"></i>
          </button>`;
    item.style.color = "Red";
  }
});

// _______________________________________________________________________________________________________
// getElementsByClassName(), getElementsByTagName(), getElementsByID() -
// All above gives us HTMCOllection, where high order Array methods dont work.
// Only querySelector() or QuerySelectorAll(), gives us NodeList(), where high order Array methods work

const listItems2 = document.getElementsByClassName(".items");
console.log(listItems2);

// So, need to convert HTMLCollection to Array first
const ListItemsArray = Array.from(listItems2);
// Now we can use high order Array method like foreach
ListItemsArray.forEach((item) => {
  console.log(item.innerText);
});

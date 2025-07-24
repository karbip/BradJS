/* Remove Item */
//_________________________________________________________________________________________________________________________

// remove() method
/* // Remove 'Clear All' button
removeClearButton = () => {
  document.querySelector("#clear").remove();
};
removeClearButton();
*/

//_________________________________________________________________________________________________________________________

/* 
// removeChild() method
removeFirstItem = () => {
  // First, select parent
  const ul = document.querySelector("ul");
  // Next, select child
  const li = document.querySelector("li:first-child");
  // Now, remove child element
  ul.removeChild(li);
};
removeFirstItem();
*/

//_________________________________________________________________________________________________________________________

// Remove item using index number : using removeChild() method
removeItem = (itemNumber) => {
  // Get parent
  const ul = document.querySelector("ul");

  // Get child
  //const li = document.querySelector(`li:nth-child(${itemNumber})`); // use template literal to use the itemNumber

  // OR
  const li = document.querySelectorAll("li")[itemNumber - 1]; // Use this method if we dont want to pass 0 as itemNumber , as it uses NodeList, which is an array, thus we use itemNumber-1

  // Remove item
  ul.removeChild(li);
};
// Pass itemNumber to the function
removeItem(1);

//____________________________________________________________________________________________________________________________

// Shortest way to remove ; one liner
const removeItem2 = (itemNumber) =>
  document.querySelectorAll("li")[itemNumber - 1].remove();

removeItem2(1);

// Replace Item with [item].replaceWith() method
replaceFirstItem = () => {
  const firstItem = document.querySelector("li:first-child");
  const li = document.createElement("li");
  li.textContent = "Replaced first item";
  // Call replaceWith method
  firstItem.replaceWith(li);
};
replaceFirstItem();

//_________________________________________________________________________________________________________________________________________

// Replace with outerHTML method
replaceSecondItem = () => {
  const secondItem = document.querySelector("li:nth-child(2)");
  secondItem.outerHTML = "<li>Replaced second item</li>";
};
replaceSecondItem();

//_________________________________________________________________________________________________________________________________________

// Replace all items, we do this by looping thru all elements using forEach loop
replaceAllItems = () => {
  const items = document.querySelectorAll("li");
  // We dont have to create new element here since we are not replacing any li tag
  items.forEach((item, index) => {
    // Replace all items like:
    //item.outerHTML = "<li>new_li</li>";
    // OR
    //item.innerHTML = 'Replace All';

    // We can also choose to replace a specific item and other items (using ternery operator instead of traditional if/else) as:
    item.outerHTML = index === 1 ? "<li>Second Item</li>" : "<li>Item</li>";
  });
};
replaceAllItems();

//_________________________________________________________________________________________________________________________________________

// Replace using replaceChild() method
replaceChildHeading = () => {
  // First select parent
  const header = document.querySelector("header");
  // Next select child
  const h1 = document.querySelector("h1");
  // Create new element to replace child
  const h2 = document.createElement("h2");
  // Add id to new element(optional)
  h2.id = "app-title";
  // Add text to h2
  h2.textContent = "Shopping list";
  // Use [parentElement].replaceChild(newElement, oldElement) method now
  header.replaceChild(h2, h1);
};
replaceChildHeading();

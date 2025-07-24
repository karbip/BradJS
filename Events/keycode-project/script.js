/*

// Method 1 - using the div from HTML as template literal, easier way, not recommended

window.addEventListener("keydown", (e) => {
  const insert = document.querySelector("#insert");
  insert.innerHTML = `
    <div class="key">
        ${e.key === " " ? "Space" : e.key}
        <small>e.key</small>
      </div>
      <div class="key">
        ${e.keyCode}
        <small>e.keyCode</small>
      </div>
      <div class="key">
        ${e.code}
        <small>e.code</small>
      </div>
    `;
});

*/

// Method 2 - recommended, more dynamic

function showKeyCodes(e) {
  // Select the dom element
  const insert = document.querySelector("#insert");

  // Below line added to display new keyCodes in page instead of adding it to the previous values by clearing the innerHTML of selected element
  insert.innerHTML = " ";

  // Create an object to hold the 3 kind of key values we are going to display on screen
  const keyCodes = {
    // we use 'key:value' pairing to put values into keys
    "e.key": e.key === " " ? "Space" : e.key, // Check to see if key press is space
    "e.keyCode": e.keyCode,
    "e.code": e.code,
  };

  // Now we loop thru the object to extract key:value pair and use them to put into div elements
  for (key in keyCodes) {
    // Create the div element first
    const div = document.createElement("div");
    // Add className 'key' to the div element
    div.className = "key";
    // Create the small element
    const small = document.createElement("small");
    // Add the text to small element to be displayed
    const keyText = document.createTextNode(key); // get key name from keyCodes object
    // Assign  key value to the text node from keyCodes object
    const keyValue = document.createTextNode(keyCodes[key]);

    // Append newly created nodes to DOM window

    // Append title text to the <small> element
    small.appendChild(keyText);
    // Append the keyValue to div tag
    div.appendChild(keyValue);
    // Now append small element into div element
    div.appendChild(small);
    // Now, finally add the div to the dom (inside parent div element with id=insert)
    insert.appendChild(div);
  }
}
window.addEventListener("keydown", showKeyCodes);

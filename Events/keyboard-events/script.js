/* /* 

Keyboard Events 

*/

// Select element
const itemInput = document.querySelector("#item-input");

// Add eventListener to element - keypress - when key is pressed down -  does not count when hold down
itemInput.addEventListener("keypress", (e) => console.log("key pressed"));

// Add eventListener to element - keydown -  when key is pressed and hold down
itemInput.addEventListener("keydown", (e) => console.log("keydown"));

// Add eventListener to element - keyup - when key is released
itemInput.addEventListener("keyup", (e) => console.log("keyup"));

//
/* Get key being typed by user */
//

const userkeyInput = document.querySelector("#item-input");

// 'key' method
userkeyInput.addEventListener("keypress", (e) =>
  console.log(`key method: user pressed ${e.key}`)
);

// 'keycode' method - gives keycode
userkeyInput.addEventListener("keypress", (e) => console.log(e.keyCode));

// 'code' method
userkeyInput.addEventListener("keypress", (e) =>
  console.log(`Using code: user pressed ${e.code} `)
);

// To find if user is holding down a key
userkeyInput.addEventListener("keydown", (e) => {
  if (e.repeat) {
    console.log(`You are holding down ${e.key}`);
  }
});

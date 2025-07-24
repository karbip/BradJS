/** Mouse Events **/
//_______________________________________________________________________________

//  Select DOM element to associate with event
/* 
const logo = document.querySelector("img");

// Define the callback fn for the event
// We create a function to toggle background and text color
colorChange = () => {
  if (document.body.style.background !== "purple") {
    document.body.style.background = "purple";
    document.body.style.color = "white";
  } else {
    document.body.style.background = "white";
    document.body.style.color = "black";
  }
};

// Define the eventListener
logo.addEventListener("click", colorChange);
 */
/* Other Mouse Events */
//_______________________________________________________________________________

// Define the dom element on which to add event listener
const logo = document.querySelector("img");

// Define onClick callback function
const onClick = () => console.log("doubleclicked");
const rightClick = () => console.log("right clicked");
const mouseUp = () => console.log("mouse up");

// Define event listeners
logo.addEventListener("dblclick", onClick);
logo.addEventListener("contextmenu", rightClick);
logo.addEventListener("mouseup", mouseUp);
// mouseup, mousedown
// wheel
// mouseover, mouseout
// drag, dragstart, dragend

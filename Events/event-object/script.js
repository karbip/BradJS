/*  

Event Objects listed below:

`target` - element which triggered the event
`currentTarget` -  element eventListener is attached to
`type` -  type of event triggered
`timeStamp` - event timeStamp
`clientX` -  X position of mouse click relative to window
`clientY` -  Y position of mouse click relative to window
`offsetX` -  X position of mouse click relative to element
`offsetY` -  Y position of mouse click relative to element
`pageX` -  X position of mouse click relative to page
`pageY` -  Y position of mouse click relative to page
`screenX` -  X position of mouse click relative to screen
`screenY` -  Y position of mouse click relative to screen

*/

// Example
//
// Find out objects defined above on clicking logo

const logo = document.querySelector("img");

logo.addEventListener("click", (e) => {
  console.log(`target element is: ${e.target}`);
  console.log(`currentTarget is: ${e.currentTarget}`);
  console.log(`timeStamp: ${e.timeStamp}`);
  console.log(`trigger type: ${e.type}`);
  console.log(`window relative X : ${e.clientX} Y : ${e.clientY}`);
  console.log(`element relative X : ${e.offsetX} Y : ${e.offsetY}`);
  console.log(`page relative X : ${e.pageX} Y : ${e.pageX}`);
  console.log(`screen relative X : ${e.screenX} Y : ${e.screenY}`);
});

// We can access the target element and change its property using e.target
// Make logo red on double click
logo.addEventListener(
  "dblclick",
  (e) => (e.target.style.backgroundColor = "Red")
);

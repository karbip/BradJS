/* How window events were handled before ES6 */
//
// Scripts were put in head tag of html and below workarounds were used to overcome error due to page not loaded
//
// Method 1
window.onload = function () {
  document.querySelector("h1").textContent = "Hello World";
};

// Method 2
window.addEventListener("load", () => {
  document.querySelector("h1").textContent = "Hello World";
});

// Method 3
window.addEventListener("DOMContentLoaded", () => {
  document.querySelector("h1").textContent = "Hello World";
});

///////////////////////////////////////////////////////////////////////////////////////////////
/* Other Window events (ES6)*/
// Resize window
window.addEventListener("resize", () => {
  document.querySelector(
    "h1"
  ).innerText = `${window.innerHeight} x ${window.innerWidth}`;
});

// Scroll Event
window.addEventListener("scroll", () => {
  document.querySelector(
    "h1"
  ).innerText = `${window.scrollX} x ${window.scrollY}`;
});

// Page color change associated with page scroll
window.addEventListener("scroll", () => {
  window.scrollY > 5
    ? (document.body.style.backgroundColor = "red")
    : (document.body.style.backgroundColor = "blue");
});

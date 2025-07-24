const user = "Biprajit";

(function () {
  const user = "Soma";
  console.log(user); // will print Soma- as variable 'user' under iife scope
})();

console.log(user); // prints Biprajit as variable ''user' under global scope

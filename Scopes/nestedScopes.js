// Nested Scopes

// Can access variables in parent scope from child scope, but not the other way

function first() {
  let x = 100;
  function second() {
    let y = 200;
    console.log(x + y); // works since child can access variable (x) from parent scope
  }
  second(); // need to call child function in parent scope
  // console.log(x + y); // gives reference error since parent cannot access variable (y) in child scope
}
first();

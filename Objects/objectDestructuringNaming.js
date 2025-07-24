/* ____________________ Destructuring ______________________*/

// Means pulling out property values or values from key value pair by their keys and assigning to variables

const todo = {
  id: 1,
  title: "Take out trash",
  user: {
    name: "john",
    bin: "wetbin",
  },
};

// Normal way to assign value to another variable is
// var id = todo.id;

// Assign property value  to variable of same name using destructuring
// Syntax:
// var { <variable_name } = <object_name>

var { title } = todo;

// Pull out the nested object property bin's value
// Syntax:
// var { <nested_object_name> : {<property_name>} }
var {
  user: { bin },
} = todo;

var {
  user: { name },
} = todo;

console.log(name, bin);

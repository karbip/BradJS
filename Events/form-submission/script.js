/* Form Submission and Form objects */

//
//
/////////////////////////////////////////////////////////////////////////
/* Form submission and data validation */
/////////////////////////////////////////////////////////////////////////
//
//

// Select the element - here the form element
const form = document.getElementById("item-form");

// Define onSubmit() fn
const onSubmit = (e) => {
  e.preventDefault(); // Do not submit to file yet since file does not have action attribute yet - connected to backend, rather we just use JS to amnipulate data

  // Get the value submitted using form data object as below:
  const item = document.getElementById("item-input").value;
  const priority = document.getElementById("priority-input").value;

  // Form validation
  if (item === "" || priority === "0") {
    alert("Please enter data in all fields");
    return;
  }

  // Display the values entered from keyboard
  console.log(item, priority);
};

// Add event listener for form submission
form.addEventListener("submit", onSubmit);

//
//
////////////////////////////////////////////////////////////////////////////
/* Form data objects */
///////////////////////////////////////////////////////////////////////////
//
//

// Define fn to display working of form objects
// And get keyboard values using form objects
const onSubmit2 = (e) => {
  e.preventDefault();

  const formData = new FormData(form); // pass in original form data into formData object
  //console.log(formData);

  // Get values using formData.get() method
  // FormData requires that we have a name attribute to the <input> element
  const item = formData.get("item"); // name : item
  const priority = formData.get("priority"); // name: priority
  console.log(item, priority);

  // We can also get all entries using enties() method
  const entries = formData.entries();
  console.log(entries); // This gives us an iterator output, which is an array
  // We use for of loop to iterate thru each item
  for (let entry of entries) {
    console.log(entry[1]); // Access the array item created by using entries() method
  }
};

// Add event listener
form.addEventListener("submit", onSubmit2);

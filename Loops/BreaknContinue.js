// Break and Continue statements
// Break exits the whole loop whereas continue skips that particular iteration

const arr1 = ["Biprajit", "Kar", "Soma", "Eartha"];
for (i = 0; i < arr1.length; i++) {
  if (arr1[i] === "Kar") {
    continue;
    // using 'break' here will print 'Biprajit' and stop(break) the loop
    // using 'continue' will skip the condition (if true) continue with loop and print remaining array values
  } else {
    console.log(i);
    console.log(arr1[i]);
  }
}

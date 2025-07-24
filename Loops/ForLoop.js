for (i = 0; i < 10; i++) {
  console.log(i);
}

// Nested Loops
for (i = 0; i < 10; i++) {
  console.log(`Number ${i} table`);

  for (j = 0; j <= 10; j++) {
    console.log(`${i} * ${j} = ${i * j}`);
  }
}

// Looping thru an array
const arr = ["Biprajit", "Soma", "Eartha"];
for (k = 0; k < arr.length; k++) {
  console.log(k);
  console.log(`My name is ${arr[k]}`);
}

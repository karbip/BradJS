// While and Do-While loops

let i = 1;
while (i <= 5) {
  console.log("Number " + i);
  let j = 1;
  while (j <= 5) {
    console.log(`${i} * ${j} = ${i * j}`);
    j++;
  }
  i++;
}

// Do-While

const arr1 = ["biprajit", "soma", "kar", "eartha"];
let k = 0;
do {
  console.log(arr1[k]);
  k++;
} while (arr1[k] !== "kar");

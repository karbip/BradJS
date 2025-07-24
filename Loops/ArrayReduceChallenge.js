// Array Reduce Challenge

const products = [
  { id: 1, name: "Product One", price: 130 },
  { id: 2, name: "Product Two", price: 150 },
  { id: 3, name: "Product Three", price: 175 },
];

// Get combined prices
const combinedPrice = products.reduce((acc, product) => acc + product.price, 0);

// Simply take product price and add with accumulator

console.log(combinedPrice);

// && - First falsy value or last value

console.log(10 && 20); // 20
console.log("object" && "key-value"); // key-value
console.log("object" && 20); // 20
console.log("" && "0"); // ""

// Above statement use case is printing blog posts
const posts = [];
//console.log(posts[0]); // will print undefined on website, which we do not want
// we would rather print 0 or blank posts as below:
posts.length > 0 && console.log(posts[0]);

// || -  First truthy value or last value
console.log(10 || 20); // 10
console.log("object" || "key-value"); // object
console.log("object" || 20); // object
console.log(" " || "0"); // " "

// ?? - Nullish Coalesense or First Hand operator
// Returns the first operand on the right side only if left operand is 'null' or 'undefined'
console.log(10 ?? 19 ?? 19); // 10
console.log(null ?? undefined ?? 99 ?? 100); // 99
console.log(undefined ?? 21); // 21
console.log(0 ?? 22); // 0

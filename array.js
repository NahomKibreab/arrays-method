const array = ["banana", "computer", "iphone", "laptop", "macbook"];

console.log(array);

// Arraty destructuring
const [fruit, , mobile, ...rest] = array;

console.log("fruit: ", fruit);
// console.log("pc: ", pc);
console.log("mobile: ", mobile);

console.log("array[0]", array[0]);

console.log("rest: ", rest);

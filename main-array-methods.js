const names = ["Nahom", "Awet", "Salih", "Selam"];

// for (let i = 0; i < names.length; i++) {
//   console.log("hi ", names[i]);
// }

// Array.map()

const newNames = names.map((name) => {
  return "Hi " + name;
});

console.log("names", names);
console.log("newNames", newNames);

const array = [
  { key: 1, value: 10 },
  { key: 2, value: 20 },
  { key: 3, value: 30 },
];

const newArrayFromObject = array.map((obj) => {
  return obj.value;
}); // [10, 20, 30]

console.log("array", array);
console.log("newArrayFromObject", newArrayFromObject);

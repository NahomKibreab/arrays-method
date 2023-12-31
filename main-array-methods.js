const names = ["Nahom", "Awet", "Salih", "Selam"]; // List of names
const name = "Nahom";

const listOfObject = [
  { name: "Nahom", age: 12 },
  { name: "Salih", age: 13 },
]; // List of objects

const objectName = {
  name: "Nahom",
  age: "12",
  eyeColor: "brown",
  addLastName: function (lastName) {
    return this.name + " " + lastName; // Nahom Salih
  },
};

console.log("objectName", objectName);
console.log("objectName.name", objectName.name);
console.log("objectName.age", objectName.age);
console.log("objectName.addLastName", objectName.addLastName);
console.log("objectName.addLastName('Salih')", objectName.addLastName("Salih"));

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
]; // List of objects

const newArrayFromObject = array.map((obj) => {
  // {key:3, value:30} obj
  return obj.value;
}); // [10, 20, 30]

console.log("array", array);
console.log("newArrayFromObject", newArrayFromObject);

// Array.filter()

/*
Special character and symbols

"" // string
'' // string
`` // string
[] // array
{} // object
name () => {} // arrow function 
function name () {} // declaration function
name() // call function
*/

const listOfNumberAndString = ["Nahom", "Salih", "Selam", 12, 13, 14];

const listOfString = listOfNumberAndString.filter(
  (element) => typeof element === "string"
); // ["Nahom", "Salih", "Selam"]

console.log("listOfString", listOfString);

// Special String Template Literal
const tilnetString = `Nahom ${2 * 2} ${listOfNumberAndString[2]}`;

console.log("tilnetString", tilnetString);

// Array.sort()

const fetch = require("node-fetch");
// import fetch from "node-fetch";

function resolveAfter2Seconds() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("resolved");
    }, 10000);
  });
}

async function asyncCall() {
  console.log("calling");

  const result = await resolveAfter2Seconds();
  console.log(result);
  // Expected output: "resolved"
}

async function testingApiCall() {
  const result = await fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => response.json())
    .then((json) => json);

  console.log("result", result);
}

// asyncCall();

testingApiCall();

const numbers = [4, 2, 3, 1, 5, 2000, 1000];

const sortedNumbers = numbers.sort(); // UTF 16 code point

const correctSortedNumbers = numbers.sort((a, b) => a - b); // Ascending order from smallest to largest

const descedingSortedNumbers = numbers.sort((a, b) => b - a); // Descending order from largest to smallest

// (a, b) => a - b; // + or -

console.log("numbers", numbers);
console.log("sortedNumbers", sortedNumbers);
console.log("descedingSortedNumbers", descedingSortedNumbers);

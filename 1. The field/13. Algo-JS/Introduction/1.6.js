const readlineSync = require("readline-sync");

let num1 = readlineSync.question("Could you pick an integer number?");
let num2 = readlineSync.question("Could you pick another integer number?");

console.log(num1 % num2);
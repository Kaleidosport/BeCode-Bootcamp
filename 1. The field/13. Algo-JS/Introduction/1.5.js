const readlineSync = require("readline-sync");

let num1 = readlineSync.question("Could you pick a decimal number?");
let num2 = readlineSync.question("Could you pick another decimal number?");

let num3 = Math.trunc(num1);

console.log(num3 * num2);
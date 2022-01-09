const readlineSync = require("readline-sync");

const number = parseInt(readlineSync.question("Enter the number of terms you want in your Fibonacci series: "));
let num1 = 0;
let num2 = 1;
let nextNum;

console.log("Resulting Fibonacci series:");

for (let i = 1; i <= number; i++) {
    console.log(num1);
    nextNum = num1 + num2;
    num1 = num2;
    num2 = nextNum;
}
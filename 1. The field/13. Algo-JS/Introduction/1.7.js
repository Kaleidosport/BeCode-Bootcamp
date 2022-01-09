const readlineSync = require("readline-sync");

let shoeSize = readlineSync.question("What's your shoe size?");
let birthYear = readlineSync.question("What year were you born?");

let shoeSizeDouble = (shoeSize * 2);

shoeSizeDouble += 5;
shoeSizeDouble *= 50;

shoeSizeDouble -= birthYear;
shoeSizeDouble += 1766;

console.log(shoeSizeDouble);
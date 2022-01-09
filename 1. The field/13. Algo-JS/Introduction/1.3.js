const readlineSync = require("readline-sync");

let firstname = readlineSync.question("May I know your name?");
console.log("Hello " + firstname + ".")
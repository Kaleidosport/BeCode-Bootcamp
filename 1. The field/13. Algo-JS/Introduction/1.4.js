const readlineSync = require("readline-sync");

let name = readlineSync.question("What's your name?");
let firstName = readlineSync.question("And your first name?");
let city = readlineSync.question("Where do you live?");

console.log("Your name is " + firstName + " " + name + " and you live in " + city + ".")
const readlineSync = require("readline-sync");

let favNumber = readlineSync.question("What\'s your favorite number?");

do {
    console.log("Are you sure?");
    favNumber = readlineSync.question("What\'s your favorite number?");
} while (favNumber != 42);
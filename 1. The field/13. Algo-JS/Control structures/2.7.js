const readlineSync = require("readline-sync");

let n = readlineSync.question("Pick a number: ");
let sum = 0;

for (let nEntries = 0; nEntries < n ; nEntries++) {
    sum += parseInt 
    (readlineSync.question("Pick another number: "));
}

console.log(sum);
const readlineSync = require("readline-sync");

function rand10(min, max) {
    return parseInt(Math.random() * (11 - 1) + 1);
}

let Array = [];
let n = readlineSync.question("Pick a number: ");

function multiRand(n) {
    for (let i = 0; i < n; i++) {
        Array.push(rand10(1, 11));
    }
    return Array;
}
/* multiRand(n) documentation
 * This node starts by asking the user to pick a number (n)
 * In the aftermath, node 4.3.js displays a number ranking from 1 to 10 n times
 * If the user enters 98, 98 rand10(1, 11) are performed
 * Also works when using unshift() instead of push()
*/

console.log(multiRand(n));
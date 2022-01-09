// First skimmed through https://www.educative.io/edpresso/how-to-find-the-factorial-of-a-number-in-javascript

const readlineSync = require("readline-sync");

let a = readlineSync.question("Pick a number: ");

function factorial(a) {
    if(a == 0 || a == 1) {
        return 1;
    } else {
        return a * factorial(a-1);
    }
}

/* factorial(a) documentation
 * The user starts by pick a number (a)
 * node 4.6.js then calculates its factorial and displays the result
*/

console.log("Here is your number\'s factorial: " + factorial(a) + ".");
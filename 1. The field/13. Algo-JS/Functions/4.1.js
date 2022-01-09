// Prior to the exercises, think of completing FreeCodeCamp's tutorials dedicated to functions
// Start from https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/write-reusable-javascript-with-functions

const readlineSync = require("readline-sync");

function calcSurface(length, width) {
    return length * width;
}

let length = readlineSync.question("Pick a length: ");
let width = readlineSync.question("Pick a width: ");

console.log("The resulting surface is " + calcSurface(length, width));

/* calcSurface() documentation
 * This function calculates the surface of a rectangle
 * To that end, the user provides a length and a width
 * Once both values are multiplied, the surface is displayed
*/
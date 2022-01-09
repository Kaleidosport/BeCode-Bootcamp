// First skimmed through https://www.geeksforgeeks.org/program-calculate-distance-two-points/

const readlineSync = require("readline-sync");

let x1 = readlineSync.question("Pick a number to position your 1st point on the X axis: ");
let y1 = readlineSync.question("Pick a number to position your 1st point on the Y axis: ");
let x2 = readlineSync.question("Pick a number to position your 2nd point on the X axis: ");
let y2 = readlineSync.question("Pick a number to position your 2nd point on the Y axis: ");

function calcDistance(x1, y1, x2, y2) {
    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2) * 1.0);
}

/* Math.sqrt => https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Math/sqrt
 * Math.pow => https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Math/pow
 * calcDistance documentation
 * This function calculates the distance between (x1, y1) and (x2, y2)
 * The user picks numbers corresponding to those coordinates
 * Then the needed formula is prompted and displays the result
*/

console.log("The distance between your coordinates amounts to " + calcDistance(x1, y1, x2, y2) + ".");
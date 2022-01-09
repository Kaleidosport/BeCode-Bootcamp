const readlineSync = require("readline-sync");

let arr = [];
let n = readlineSync.question("Pick a number: ");

let sum = 0;
function average(arr) {
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}
// This function calculates the array's average

function min(arr) {
    return Math.min(...arr);
}
// This one picks the smallest number out of the array

function max(arr) {
    return Math.max(...arr);
}
// As for this one, it picks the biggest number out of the array

function rand10(min, max) {
    return parseInt(Math.random() * (11 - 1) + 1);
}

function multiRand(n) {
    for (let i = 0; i < n; i++) {
        arr.push(rand10(1, 11));
    }
    return arr;
}

console.log("This gives us the following numbers: " + multiRand(n) + ". With an average of " + average(arr) + " , " + max(arr) + " as max number and " + min(arr) + " as min number.");
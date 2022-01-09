const readlineSync = require("readline-sync");

let minAge = readlineSync.question("How old were you when you started working?");
let maxAge = readlineSync.question("How old do you think you\'ll be when you stop working?");
let currentAge = readlineSync.question("How old are you at the moment?");

if (currentAge > minAge && currentAge < maxAge) {
    console.log("Thanks for filling our form. What a great time to be " + currentAge + ".");
} else {
    console.log("Seems like you didn\'t get it right. Have a nice day.");
    return;
}
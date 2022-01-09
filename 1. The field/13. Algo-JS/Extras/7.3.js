const readlineSync = require("readline-sync");

function divisors() {
    let n = parseInt(readlineSync.question("Pick a number: "));
    console.log("Is it a prime number or does it have divisors? Let\'s find out.");
    let numbers = [];

    for (let i = 2; i < n; i++) {
        if (n % i == 0) {
            numbers.push(i);
        }
    }
    if (n % 2 != 0 || n == 1) {
        return (n + " is a prime number.");
    }
    return numbers;
}

console.log(divisors());
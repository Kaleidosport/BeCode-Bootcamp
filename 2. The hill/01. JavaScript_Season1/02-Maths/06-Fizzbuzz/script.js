
// 02-maths/06-fizzbuzz/script.js - 2.6: fizzbuzz

(() => {

    // your code here
    let anyNumber;

    for (let i = 0; i < 100; i++) {
        anyNumber = Math.floor(Math.random() * 100) + 1;
        if (anyNumber % 3 === 0 && anyNumber % 5 != 0) {
            console.log("Fizz for " + anyNumber + ".");
        }
        else if (anyNumber % 5 === 0 && anyNumber % 3 != 0) {
            console.log("Buzz for " + anyNumber + ".");
        }
        else if (anyNumber % 3 === 0 && anyNumber % 5 === 0) {
            console.log("Fizzbuzz for " + anyNumber + ".");
        }
        else {
            console.log("No fizz nor buzz for " + anyNumber + ".");
        }
    }

})();
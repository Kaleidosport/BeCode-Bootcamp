const readlineSync = require("readline-sync");

function guessTheNumber () {
    const random = Math.floor(Math.random() * 100) + 1;
    // This generates a random integer ranging from 1 (min) to 100 (max)

    let guess = parseInt(readlineSync.question("Guess a number between 1 and 100: "));
    // After 37 attempts, I conclude parseInt is more efficient and reliable than Math.floor in this case

    while (guess != random) {
        if (guess < random) {
            guess = parseInt(readlineSync.question("Too low, try again. Guess a number between 1 and 100: "));
        }
        if (guess > random) {
            guess = parseInt(readlineSync.question("Too high, try again. Guess a number between 1 and 100: "));
        }
        else {
            console.log("Well guessed! Congrats and thanks for playing.");
            break;
        }
    }
}

guessTheNumber();
// Calling the function, game on!
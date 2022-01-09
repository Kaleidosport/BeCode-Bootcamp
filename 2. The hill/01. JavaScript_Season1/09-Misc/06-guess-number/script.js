// 09-misc/06-guess-number/script.js - 9.6: guess the number

(() => {

    // your code here
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    let attempts = 0;
    let guess = 0;
    
    while (guess != randomNumber) {
        guess = parseInt(prompt("Guess a number between 1 and 100: "));
        if (guess < randomNumber) {
            alert("Higher!");
            attempts++;
        }
        else if (guess > randomNumber) {
            alert("Lower!");
            attempts++;
        }
        else {
            alert("You did it! It took you " + attempts + " guesses to find the number.");
            break;
        }
    }

})();

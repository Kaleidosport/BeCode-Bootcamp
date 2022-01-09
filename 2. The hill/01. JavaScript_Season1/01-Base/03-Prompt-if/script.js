
// 01-base/03-prompt-if/script.js - 1.3: promp & if

(() => {
    // Don't bother with that, look at your browser's console(chrome), you can delete it afterwards ;)
    console.log('%c ', 'padding: 38px; background:url(https://becode.org/app/uploads/2020/03/bc_mailsign_seal.png) no-repeat;');
    console.log('Hello Woods programmer');
  
    // YOUR CODE HERE
    let question = prompt("Would you like some cake? Answer with yes or no: ");
    if (question === "Yes" || question === "yes") {
        alert("Congratulations, have some!");
    }
    else {
        alert("More cake for me, then!");
    }
  })();
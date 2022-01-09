
// 01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation

(() => {
    // Don't bother with that, look at your browser's console(chrome), you can delete it afterwards ;)
    console.log('%c ', 'padding: 38px; background:url(https://becode.org/app/uploads/2020/03/bc_mailsign_seal.png) no-repeat;');
    console.log('Hello Woods programmer');

    // YOUR CODE HERE
    function getAsl() {
        let age = prompt("How old are you?");
        let sex = prompt("What gender are you?");
        let location = prompt("Where do you live?");

        let doConfirm = confirm("So, you are " + age + " old and a " + sex + " living in " + location + "."
        + " Do you confirm those datas?");
        if (doConfirm === false) {
            getAsl();
        }
        else {
            prompt("Thanks, have a nice day.");
        }       
    }

    getAsl(); 
})();
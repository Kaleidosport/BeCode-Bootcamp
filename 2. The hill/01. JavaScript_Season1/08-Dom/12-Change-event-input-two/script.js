// 08-dom/12-change-event-input-two/script.js - 8.12: change event (2)


(() => {

    // your code here
    let passwordAllowedValues = new RegExp("^(?=(.*[a-zA-Z]){1,})(?=(.*[0-9]){2,}).{8,}$");

    document.getElementById("pass-one").addEventListener("input", () => {
        let enteredPassword = document.getElementById("pass-one").value.toString();
        if (enteredPassword.match(passwordAllowedValues)) {
            document.getElementById("validity").innerHTML = "Ok";
        }
        else {
            document.getElementById("validity").innerHTML = "Not ok";
        }        
    })

})();

/* That one was hella challenging
 * https://stackoverflow.com/questions/32534109/javascript-password-validation-at-least-2-number-digits?lq=1
 * https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/String/match
*/
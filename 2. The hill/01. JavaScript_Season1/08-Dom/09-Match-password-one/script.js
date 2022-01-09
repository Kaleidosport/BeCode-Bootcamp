// 08-dom/09-match-password-one/script.js - 8.9: password verification (1)


(() => {

    // your code here
    let initialPassword = document.getElementById("pass-one");
    let repeatedPassword = document.getElementById("pass-two");

    document.getElementById("run").addEventListener("click", () => {
        if (initialPassword.value != repeatedPassword.value) {
            initialPassword.style.borderColor = "red";
            initialPassword.style.borderWidth = "thick";
            repeatedPassword.style.borderColor = "red";
            repeatedPassword.style.borderWidth = "thick";
            // https://www.w3schools.com/jsref/prop_style_bordercolor.asp
        }
    })

})();

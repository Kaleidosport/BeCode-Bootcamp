// 08-dom/03-select-three/script.js - 8.3: select multiple elements by css selector


(() => {

    // your code here
    for (let i = 0; i < document.querySelectorAll(".target").length; i++) {
        document.querySelectorAll(".target")[i].innerHTML = "Owned!";
    }
    // Had to go with a for (...) due to the fact querySelectorAll returns an array

})();
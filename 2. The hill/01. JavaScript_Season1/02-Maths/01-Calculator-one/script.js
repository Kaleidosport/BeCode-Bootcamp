
// 02-maths/01-calculator-one/script.js - 2.1: calculator1

(() => {
    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("addition").addEventListener("click", function() {
        // perform an addition
        let a = Number(document.getElementById("op-one").value);
        let b = Number(document.getElementById("op-two").value);
        let sum = a + b;

        alert("Your result: " + sum + ".");
    });

    document.getElementById("substraction").addEventListener("click", function() {
        // perform an substraction
        let a = Number(document.getElementById("op-one").value);
        let b = Number(document.getElementById("op-two").value);
        let difference = a - b;

        alert("Your result: " + difference + ".");
    });

    document.getElementById("multiplication").addEventListener("click", function() {
        // perform an multiplication
        let a = Number(document.getElementById("op-one").value);
        let b = Number(document.getElementById("op-two").value);
        let product = a * b;

        alert("Your result: " + product + ".");
    });

    document.getElementById("division").addEventListener("click", function() {
        // perform an division
        let a = Number(document.getElementById("op-one").value);
        let b = Number(document.getElementById("op-two").value);
        let quotient = a / b;

        alert("Your result: " + quotient + ".");
    });
})();
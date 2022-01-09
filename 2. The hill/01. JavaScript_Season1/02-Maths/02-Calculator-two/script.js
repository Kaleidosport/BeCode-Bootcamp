
// 02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)

(() => {
    // to get the value of an input: document.getElementById("element-id").value

    const performOperation = operation => {
        // perform the operation
        let a = Number(document.getElementById("op-one").value);
        let b = Number(document.getElementById("op-two").value);
        let getResult = "";

        switch(operation) {
            case "addition":
                getResult = a + b;
                alert("The sum amounts to " + getResult + ".");
                break;
            
            case "substraction":
                getResult = a - b;
                alert("The difference amounts to " + getResult + ".");
                break;

            case "multiplication":
                getResult = a * b;
                alert("The product amounts to " + getResult + ".");
                break;

            case "division":
                getResult = a / b;
                alert("The quotient amounts to " + getResult + ".");
                break;

            default:
                alert("Seems like something went wrong.");
                break;
        }
    };

    Array.from(document.querySelectorAll("button.operator")).forEach($btn =>
        $btn.addEventListener(
            "click",
            () => (performOperation($btn.id), false),
        ),
    );
})();
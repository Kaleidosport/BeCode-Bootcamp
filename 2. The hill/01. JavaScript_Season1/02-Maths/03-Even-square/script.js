// 02-maths/03-even-square/script.js - 2.3: squares and pairs


(() => {

    document.getElementById("run").addEventListener("click", () => {

        // your code here
        const showSquareNumbers = [];

        for (let i = 0; i < 22; i++) {
            let getSquare = Math.pow(i, 2);
            showSquareNumbers.push(getSquare);
        }

        alert("Those are the square numbers ranging from 1 to 21: " + showSquareNumbers + ".");

    });

})();
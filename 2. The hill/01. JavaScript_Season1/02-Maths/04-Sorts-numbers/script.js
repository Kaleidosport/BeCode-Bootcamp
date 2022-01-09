// 02-maths/04-sort-numbers/script.js - 2.4: Sorting the numbers

(() => {

    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("run").addEventListener("click", () => {

        // your code here
        let numbersToSort = document.getElementById("numbers").value;
        let showSortedNumbers = numbersToSort.split(",").sort((a, b) => a - b);
        // Explanation: https://forum.freecodecamp.org/t/arr-sort-a-b-a-b-explanation/167677/2
        alert(showSortedNumbers);

    });

})();
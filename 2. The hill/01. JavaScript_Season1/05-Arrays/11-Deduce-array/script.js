// 05-arrays/11-dedupe-array/script.js - 5.11: de-dupe the array


(() => {

    const fruits = [
        "cerise",
        "durian",
        "pomme",
        "poire",
        "fraise",
        "tomate",
        "orange",
        "mandarine",
        "fraise",
        "durian",
        "pêche",
        "cerise",
        "raisin",
        "cerise",
    ];

    // your code here
    document.getElementById("run").addEventListener("click", () => {
        let uniqueFruits = [...new Set(fruits)];
        console.log(uniqueFruits);
        // ...new Set method strikes again: https://www.javascripttutorial.net/array/javascript-remove-duplicates-from-array/
    })
    
})();
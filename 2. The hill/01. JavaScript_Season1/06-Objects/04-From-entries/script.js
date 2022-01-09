// 06-objects/04-from-entries/script.js - 6.4: fromEntries


(() => {
    const keys = ["name", "species", "age", "gender", "color"];
    const values = ["Skitty", "cat", 9, "female", "tabby"];
    // your code here
    document.getElementById("run").addEventListener("click", () => {
        console.log(Object.fromEntries(keys.map(($, i) => [keys[i], values[i]])))
    })
})();

/* Those two came in handy:
 * https://www.javascripttutorial.net/es-next/javascript-object-fromentries/
 * https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Object/fromEntries
 * Could have used another method by first merging both arrays then a simple Object.fromEntries(newArray);
*/
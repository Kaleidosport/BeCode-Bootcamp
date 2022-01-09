// 05-arrays/13-find-in-set/script.js - 5.13: Find in a Set


(() => {
    const people = new Set([
        "Nicolas",
        "Nick",
        "Leny",
        "Alexandre",
        "Charlène",
        "Laureline",
        "Esther",
        "Simon",
        "Lucas",
    ]);

    // your code here
    document.getElementById("run").addEventListener("click", () => {
        console.log(people.size + " people in this set.");

        if (people.has("Alexandre")) {
            console.log("Yes, Alexandre is a part of this.");
        }
        else {
            console.log("Nope, no Alexandre in here.");
        }
    })

})();
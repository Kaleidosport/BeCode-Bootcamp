// 06-objects/01-generate-object/script.js - 6.1: genererate an object


(() => {
    // your code here
    document.getElementById("run").addEventListener("click", () => {
        let myself = {
            lastname: "Lambert",
            firstname: "Anthony",
            age: 35,
            city: "Charleroi",
            country: "Belgium"
        }

        JSON.stringify(myself);
        console.log("Hey, nice to meet ya.");
        console.log(myself);
    })
})();
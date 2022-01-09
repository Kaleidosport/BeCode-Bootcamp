// 05-arrays/14-bird-names-generator/script.js - 5.14: Bird names generator in French


(() => {
    const birds = [
        {name: "mouette", fem: true},
        {name: "corbeau"},
        {name: "mésange", fem: true},
        {name: "hibou"},
        {name: "buse", fem: true},
        {name: "pigeon"},
        {name: "pie", fem: true},
        {name: "vautour"},
        {name: "faucon"},
        {name: "rouge-gorge"},
        {name: "tourterelle", fem: true},
        {name: "corneille", fem: true},
    ];
    const adjectives = new Set([
        "cendré",
        "huppé",
        "chantant",
        "hurlant",
        "perché",
        "grand",
        "petit",
        "bleu",
        "pantelant",
        "tangent",
        "arboré",
    ]);

    // your code here
    document.getElementById("run").addEventListener("click", () => {
        let randomBird = birds[Math.floor(Math.random() * birds.length)];

        // Will have to transform the set into an array: https://stackoverflow.com/questions/42739256/how-get-random-item-from-es6-map-or-set
        let ArrayFromAdjectives = Array.from(adjectives);
        let randomAdjective = ArrayFromAdjectives[Math.floor(Math.random() * ArrayFromAdjectives.length)];

        if (randomBird.fem === true) {
            document.getElementById("target").innerHTML = "Votre oiseau est une " + randomBird.name + " " + randomAdjective + "e.";
        }
        else {
            document.getElementById("target").innerHTML = "Votre volatile est un " + randomBird.name + " " + randomAdjective + ".";
        }
    })

})();
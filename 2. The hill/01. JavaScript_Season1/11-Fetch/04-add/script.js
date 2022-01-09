// 11-fetch/04-add/script.js - 11.4: ajouter un élément


(() => {
    // your code here
    document.getElementById("run").addEventListener("click", async () => {
        let name = document.getElementById("hero-name").value
        let alterEgo = document.getElementById("hero-alter-ego").value
        let abilities = document.getElementById("hero-powers").value.split(", ")

        let data = {
            "name" : name,
            "alterEgo" : alterEgo,
            "abilities" : abilities 
        }

        await fetch("http://localhost:3000/heroes", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {"Content-type" : "application/json"}
        })
          .then(response => response.json())
          .then(data => console.log(data))
          .catch(error => console.log(error))
    })
})();

/* Those resources proved instrumental throughout those FETCH exercises:
 * https://www.youtube.com/watch?v=cuEtnrL9-H0 (structure, use and concepts)
 * https://www.freecodecamp.org/news/javascript-fetch-api-tutorial-with-js-fetch-post-and-header-examples/ (syntax and use)
 * https://www.freecodecamp.org/news/fetch-api-cheatsheet/ (reminders, list of most common uses)
*/

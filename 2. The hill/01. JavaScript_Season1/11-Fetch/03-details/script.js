// 11-fetch/03-details/script.js - 11.3: details


(() => {
    // your code here
    const TEMPLATE = (heroes) => {
        let template = document.getElementById("tpl-hero");
        let xMan = document.importNode(template.content, true);
        xMan.querySelector(".name").innerHTML = heroes.name;
        xMan.querySelector(".alter-ego").innerHTML = heroes.alterEgo;
        xMan.querySelector(".powers").innerHTML = heroes.abilities;
        return xMan;
    }

    document.getElementById("run").addEventListener("click", async () => {
        let setTarget = document.getElementById("target");
        let setId = document.getElementById("hero-id").value;
        await fetch(`http://localhost:3000/heroes/${setId}`)
          .then(response => response.json())
          .then(char => {
              while (setTarget.firstChild) {
                  setTarget.removeChild(setTarget.firstChild);
              }
              if (char.id == setId) {
                  setTarget.appendChild(TEMPLATE(char))
              }
          })
    })
})();


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
        await fetch("http://localhost:3000/heroes")
          .then(response => response.json())
          .then(char => {
              char.forEach(xMan => {
                  document.getElementById("target").appendChild(TEMPLATE(xMan));
              })
          })
    })
})();

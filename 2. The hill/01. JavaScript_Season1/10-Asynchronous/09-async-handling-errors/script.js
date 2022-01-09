// 10-asynchronous/09-async-handling-errors/script.js - 10.9: gestion d'erreur (async/await)


(() => {
    // your code here
    document.getElementById("run").addEventListener("click", async () => {
        await window.lib.getPersons()
          .then(async (individuals) => {
              console.log(individuals);
          })
          .catch(async (oops) => {
              console.error("Error!");
              console.dir(oops);
          })
    })
})();
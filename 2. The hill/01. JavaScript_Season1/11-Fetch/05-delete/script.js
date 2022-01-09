// 11-fetch/05-delete/script.js - 11.5: supprimer un élément


(() => {
    // your code here
    document.getElementById("run").addEventListener("click", async () => {
        let setId = document.getElementById("hero-id").value

        await fetch(`http://localhost:3000/heroes/${setId}`, {
            method : "DELETE"
        })
        .then((result => result.json()))
        .then(data => console.log(data))
        .catch(error => console.error(error))
    })
})();

/* Useful resources: 
https://medium.com/swlh/restful-api-design-get-post-put-patch-delete-a-walkthrough-with-javascripts-fetch-api-e37a8416e2a0 (listing all fetch methods)
https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch (generic doc, my go-to-guy)
*/
// 10-asynchronous/08-async-get-comments/script.js - 10.8: chargement d'articles et de commentaires (async/await)


(() => {
    // your code here
    document.getElementById("run").addEventListener("click", async () => {
        await window.lib.getPosts().then(async articles => {
            for (let article of articles) {
                await window.lib.getComments(article.id).then(async comment => {
                    for (let com of comment) {
                        article.comments += JSON.stringify(com);
                    }
                    console.log(article);
                })
            }
        })
    })
})();

/* An async function can contain an await expression that pauses the execution of the async function and waits for the passed Promise's resolution,
and then resumes the async function's execution and returns the resolved value.
If there's no await, the code is executed in a non-blocking manner. There'll be no pause. */

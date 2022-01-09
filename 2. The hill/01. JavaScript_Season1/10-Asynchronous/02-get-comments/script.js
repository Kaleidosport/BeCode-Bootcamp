// 10-asynchronous/02-get-comments/script.js - 10.2: chargement d'articles et de commentaires


(() => {
    // your code here
    document.getElementById("run").addEventListener("click", () => {
        window.lib.getPosts((error, articles) => {
            for (let article of articles) {
                window.lib.getComments(article.id, (error, comment) => {
                    article.comments = comment;
                    console.log(article);
                })
            }
        })
    })
})();

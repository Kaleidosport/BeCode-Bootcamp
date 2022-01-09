// 10-asynchronous/05-promise-get-comments/script.js - 10.5: chargement d'articles et de commentaires (Promise)


(() => {
    // your code here
    document.getElementById("run").addEventListener("click", () => {
        window.lib.getPosts().then(articles => {
            for (let article of articles) {
                window.lib.getComments(article.id).then(comment => {
                    for (let com of comment) {
                        article.comments += JSON.stringify(com);
                    }
                    console.log(article);
                })
            }
        })
    })
})();

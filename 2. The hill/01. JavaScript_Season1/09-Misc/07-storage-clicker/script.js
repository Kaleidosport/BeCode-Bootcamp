// 09-misc/07-storage-clicker/script.js - 9.7: storage clicker


(() => {

    // your code here
    let counter = 0;

    if (localStorage.getItem("counterState")) {
        counter = localStorage.getItem("counterState");
    }
    else {
        counter = 0;
    }

    document.getElementById("target").innerHTML = counter;

    document.getElementById("increment").addEventListener("click", () => {
        counter++;
        document.getElementById("target").innerHTML = counter;
        localStorage.setItem("counterState", counter);
    })

})();

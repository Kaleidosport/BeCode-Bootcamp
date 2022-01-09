
// 03-colors/03-change-bcg-three/script.js - 3.3: background color (3)


(() => {

    // your code here
    document.getElementById("run").addEventListener("click", () => {
        let shuffleHex = "0123456789ABCDEF";
        let randomColor = "#";

        for (let i = 0; i < 6; i++) {
            randomColor = randomColor + shuffleHex[Math.floor(Math.random() * 16)];
        }

        document.body.style.backgroundColor = randomColor;
    });


})();
// 05-arrays/09-rand-array-stats/script.js - 5.9: random & statistics array

(() => {

    // your code here
    document.getElementById("run").addEventListener("click", () => {
        let arrayToRand = [];
        for (let i = 0; i < 10; i++) {
            let shuffle = Math.floor(Math.random() * 101);
            arrayToRand.push(shuffle);
            document.getElementById("n-" + (i + 1)).innerHTML = shuffle;
        }
        
        let minFromArray = Math.min(...arrayToRand);
        let maxFromArray = Math.max(...arrayToRand);
        let sumOfArray = arrayToRand.reduce((a, b) => a + b, 0);
        let averageOfArray = sumOfArray / arrayToRand.length;

        document.getElementById("min").innerHTML = minFromArray;
        document.getElementById("max").innerHTML = maxFromArray;
        document.getElementById("sum").innerHTML = sumOfArray;
        document.getElementById("average").innerHTML = averageOfArray;
    })

})();
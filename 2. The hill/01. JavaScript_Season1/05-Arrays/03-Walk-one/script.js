// 05-arrays/01-get-element/script.js - 5.1: walk through the list


(() => {

    let fruits = [
        "apple",
        "pear",
        "raspberry",
        "tomatos",
        "kiwi",
        "banana",
        "orange",
        "mandarin",
        "durian",
        "peache",
        "grap",
        "cherry",
    ];

    // your code here
    fruits.forEach(elem => console.log(elem));

    /* Since forEach is required in the next exercise, I add another method:
    for (let i = 0; i < fruits.length; i++) {
        console.log(fruits[i]);
    }
    */

})();
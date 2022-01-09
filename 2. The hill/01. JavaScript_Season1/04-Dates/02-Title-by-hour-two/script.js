// 04-dates/02-title-by-hour-two/script.js - 4.2: text according to the hour (2)


(() => {

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"

    // your code here
    const time = new Date();
    const clock = time.getHours();
    const clockNeedle = time.getMinutes();
    // Source: https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Date/getMinutes

    if (clock >= 17 && clockNeedle >= 30) {
        document.getElementById("target").innerHTML = "Good evening!";
    }
    else {
        document.getElementById("target").innerHTML = "Why, hello there!";
    }

})();
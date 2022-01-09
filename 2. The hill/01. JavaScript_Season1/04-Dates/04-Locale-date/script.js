
// 04-dates/04-locale-date/script.js - 4.4: textual date


(() => {

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"

    // your code here
    const currentDate = new Date();
    const options = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
    // Relevant doc: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString

    let dateToDisplay = currentDate.toLocaleTimeString("en-BE", options);
    document.getElementById("target").innerHTML = dateToDisplay;

})();
// Also noteworthy: https://css-tricks.com/everything-you-need-to-know-about-date-in-javascript/

// 04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13


(() => {

    // your code here
    document.getElementById("run").addEventListener("click", () => {
        let year = document.getElementById("year").value;
        let count = 0;
        let monthsWithAFridayThe13th = [];
        const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];

        for (let month = 0; month < 12; month++) {
            let d = new Date(year, month, 13);
            if (d.getDay() == 5) {
              count++;
              monthsWithAFridayThe13th.push(monthNames[d.getMonth()]);
           }
        }            
        
        alert("There was/were " + count + " Friday 13th in " + year + ": in " + monthsWithAFridayThe13th + ".");
    })
})();

/* This proved useful: https://stackoverflow.com/questions/1643320/get-month-name-from-date
 * Same goes for https://stackoverflow.com/questions/33514676/count-the-number-of-fridays-that-fall-on-the-13th-within-a-given-year
*/
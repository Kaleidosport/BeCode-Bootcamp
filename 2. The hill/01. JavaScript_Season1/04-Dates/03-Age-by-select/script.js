// 04-dates/03-age-by-select/script.js - 4.3: calculate the age


(() => {

    // your code here
    document.getElementById("run").addEventListener("click", () => {
        let currentDay = document.getElementById("dob-day").value;
        let currentMonth = document.getElementById("dob-month").value;
        let currentYear = document.getElementById("dob-year").value;

        const today = new Date();
        const birthDate = new Date(currentYear, currentMonth - 1, currentDay);
        // currentMonth - 1 because month index are 0 based, meaning January = 0 instead of 1

        let age = today.getFullYear() - birthDate.getFullYear();
        let m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }

        alert(age);
    })

})();

// This one came in handy: http://jsfiddle.net/codeandcloud/n33RJ/
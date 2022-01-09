// 09-misc/05-worst-ui-three/script.js - 9.5: worst user interface (3) : phone slot

(() => {

    // your code here
    let firstSpot = document.getElementById("part-one");
    let secondSpot = document.getElementById("part-two");
    let thirdSpot = document.getElementById("part-three");
    let fourthSpot = document.getElementById("part-four");

    let firstFix = document.getElementById("fix-part-one");
    let secondFix = document.getElementById("fix-part-two");
    let thirdFix = document.getElementById("fix-part-three");
    let fourthFix = document.getElementById("fix-part-four");

    let firstMin = parseInt(firstSpot.getAttribute("data-min"));
    let secondMin = parseInt(secondSpot.getAttribute("data-min"));
    let thirdMin = parseInt(thirdSpot.getAttribute("data-min"));
    let fourthMin = parseInt(fourthSpot.getAttribute("data-min"));

    let firstMax = parseInt(firstSpot.getAttribute("data-max"));
    let secondMax = parseInt(secondSpot.getAttribute("data-max"));
    let thirdMax = parseInt(thirdSpot.getAttribute("data-max"));
    let fourthMax = parseInt(fourthSpot.getAttribute("data-max"));

    document.getElementById("target").innerHTML = "0" + firstMin + "0" + secondMin + "0" + thirdMin + "0" + fourthMin;

    firstFix.addEventListener("click", () => {
        firstSpot.value = Math.floor(Math.random() * (firstMax - firstMin + 1)) + firstMin;

        document.getElementById("target").innerHTML = "0" + firstSpot.value + secondSpot.value + thirdSpot.value + fourthSpot.value;
    })

    secondFix.addEventListener("click", () => {
        secondSpot.value = Math.floor(Math.random() * (secondMax - secondMin + 1)) + secondMin;

        if (secondSpot.value <= 9) {
            secondSpot.value = "0" + secondSpot.value;
        }

        document.getElementById("target").innerHTML = "0" + firstSpot.value + secondSpot.value + thirdSpot.value + fourthSpot.value;
    })

    thirdFix.addEventListener("click", () => {
        thirdSpot.value = Math.floor(Math.random() * (thirdMax - thirdMin + 1)) + thirdMin;

        if (thirdSpot.value <= 9) {
            thirdSpot.value = "0" + thirdSpot.value;
        }

        document.getElementById("target").innerHTML = "0" + firstSpot.value + secondSpot.value + thirdSpot.value + fourthSpot.value;
    })

    fourthFix.addEventListener("click", () => {
        fourthSpot.value = Math.floor(Math.random() * (fourthMax - fourthMin + 1)) + fourthMin;

        if (fourthSpot.value <= 9) {
            fourthSpot.value = "0" + fourthSpot.value;
        }

        document.getElementById("target").innerHTML = "0" + firstSpot.value + secondSpot.value + thirdSpot.value + fourthSpot.value;
    })

})();

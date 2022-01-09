// 09-misc/04-worst-ui-two/script.js - 9.4: worst user interface (2) : phone clicker


(() => {

    // your code here
    let firstSpot = document.getElementById("part-one");
    let secondSpot = document.getElementById("part-two");
    let thirdSpot = document.getElementById("part-three");
    let fourthSpot = document.getElementById("part-four");

    let firstMin = parseInt(firstSpot.getAttribute("data-min"));
    let secondMin = parseInt(secondSpot.getAttribute("data-min"));
    let thirdMin = parseInt(thirdSpot.getAttribute("data-min"));
    let fourthMin = parseInt(fourthSpot.getAttribute("data-min"));

    let firstMax = parseInt(firstSpot.getAttribute("data-max"));
    let secondMax = parseInt(secondSpot.getAttribute("data-max"));
    let thirdMax = parseInt(thirdSpot.getAttribute("data-max"));
    let fourthMax = parseInt(fourthSpot.getAttribute("data-max"));

    document.getElementById("target").innerHTML = "0" + firstMin + "0" + secondMin + "0" + thirdMin + "0" + fourthMin;

    firstSpot.addEventListener("click", () => {
        firstSpot.innerHTML = parseInt(firstSpot.innerHTML) + 1;
        if (parseInt(firstSpot.innerHTML) > firstMax) {
            firstSpot.innerHTML = firstMin;
        }

        document.getElementById("target").innerHTML = "0" + firstSpot.innerHTML + secondSpot.innerHTML + thirdSpot.innerHTML + fourthSpot.innerHTML;
    })

    secondSpot.addEventListener("click", () => {
        secondSpot.innerHTML = parseInt(secondSpot.innerHTML) + 1;

        if (parseInt(secondSpot.innerHTML) <= 9) {
            secondSpot.innerHTML = "0" + secondSpot.innerHTML;
        }

        if (parseInt(secondSpot.innerHTML) > secondMax) {
            secondSpot.innerHTML = secondMin;
        }

        document.getElementById("target").innerHTML = "0" + firstSpot.innerHTML + secondSpot.innerHTML + thirdSpot.innerHTML + fourthSpot.innerHTML;
    })

    thirdSpot.addEventListener("click", () => {
        thirdSpot.innerHTML = parseInt(thirdSpot.innerHTML) + 1;

        if (parseInt(thirdSpot.innerHTML) <= 9) {
            thirdSpot.innerHTML = "0" + thirdSpot.innerHTML;
        }

        if (parseInt(thirdSpot.innerHTML) > thirdMax) {
            thirdSpot.innerHTML = thirdMin;
        }

        document.getElementById("target").innerHTML = "0" + firstSpot.innerHTML + secondSpot.innerHTML + thirdSpot.innerHTML + fourthSpot.innerHTML;
    })

    fourthSpot.addEventListener("click", () => {
        fourthSpot.innerHTML = parseInt(fourthSpot.innerHTML) + 1;

        if (parseInt(fourthSpot.innerHTML) <= 9) {
            fourthSpot.innerHTML = "0" + fourthSpot.innerHTML;
        }

        if (parseInt(fourthSpot.innerHTML) > fourthMax) {
            fourthSpot.innerHTML = fourthMin;
        }

        document.getElementById("target").innerHTML = "0" + firstSpot.innerHTML + secondSpot.innerHTML + thirdSpot.innerHTML + fourthSpot.innerHTML;
    })

})();
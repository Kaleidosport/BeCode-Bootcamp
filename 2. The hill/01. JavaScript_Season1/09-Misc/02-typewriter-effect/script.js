// 09-misc/02-typewriter-effect/script.js - 9.2: typewriter effect


(() => {

    // your code here
    let i = 0;
    let text = "The calendar loses a precious component. The remaining months gather to mourn. The mourners play a melody, while the eleventh moon quietly rises. The chrysanthemum withers and falls to lie on the ground beside bloody Scarlet Eyes but you will remain supreme, even after losing half your limbs. Enjoy the interlude. Search out new allies. East is the direction to go. You will find one who awaits you.";
    document.getElementById("target").innerHTML = "";

    function typeWriter() {
        if (i < text.length) {
            document.getElementById("target").innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, 70);
        }
    }

    typeWriter();

})();

// Best practice: https://www.w3schools.com/howto/howto_js_typewriter.asp
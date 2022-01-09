// 09-misc/01-waving-text/script.js - 9.1: waving text


(() => {

    // your code here
    let myText = "Where is the money, Lebowski?!"
    document.getElementById("target").innerHTML = myText;

    let splitText = myText.split(" ");
    let firstPiece = splitText[0].fontsize(4);
    let secondPiece = splitText[1].fontsize(2);
    let thirdPiece = splitText[2].fontsize(7);
    let fourthPiece = splitText[3].fontsize(3);
    let fifthPiece = splitText[4].fontsize(6);

    myText = firstPiece.concat(" ", secondPiece, " ", thirdPiece, " ", fourthPiece, " ", fifthPiece);
    document.getElementById("target").innerHTML = myText;

})();

// fontsize() & concat() acquired! /ô/
// 08-dom/04-attr-create/script.js - 8.4: manipulating attributes and creating elements


(() => {

    // your code here
    let fromSource = document.getElementById("source");
    let getSourceImage = fromSource.getAttribute("data-image");

    let newImage = document.createElement("img");
    // https://www.geeksforgeeks.org/how-to-create-an-image-element-dynamically-using-javascript/
    document.getElementById("target").appendChild(newImage);
    newImage.setAttribute("src", getSourceImage);

    fromSource.remove();

})();
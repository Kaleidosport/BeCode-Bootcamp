// 08-dom/05-hover-image/script.js - 8.5: image hover


(() => {

    // your code here
    let image = document.querySelector("img");
    let baseImage = image.src;
    let newSource = image.getAttribute("data-hover");

    // https://developer.mozilla.org/en-US/docs/Web/API/Element#mouse_events <=> https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
    image.addEventListener("mouseover", () => {
        image.setAttribute("src", newSource);
    })

    image.addEventListener("mouseout", () => {
        image.setAttribute("src", baseImage);
    })

})();

// Another relevant syntax: https://developer.mozilla.org/fr/docs/Web/API/GlobalEventHandlers/onmouseover
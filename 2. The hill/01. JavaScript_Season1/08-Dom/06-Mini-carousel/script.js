// 08-dom/06-mini-carousel/script.js - 8.6: mini carousel


(() => {

    let gallery= [
        "../../_shared/img/bell.svg",
        "../../_shared/img/clock.svg",
        "../../_shared/img/compass.svg",
        "../../_shared/img/lemon.svg",
        "../../_shared/img/map.svg",
    ];

    // your code here
    let nextImage = document.querySelector("img");
    let i = 0;

    document.getElementById("next").addEventListener("click", () => {
        if (i < gallery.length) {
            nextImage.setAttribute("src", gallery[i]);
            i++;
        }
        else {
            i = 0;
        }
    })

})();
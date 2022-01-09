// 08-dom/11-change-event-input-one/script.js - 8.11: change event (1)


(() => {

    // your code here
    document.getElementById("pass-one").addEventListener("input", () => {
        if (document.getElementById("pass-one").value.length > 10) {
            document.getElementById("pass-one").setAttribute("maxlength", 10);
        }
        else {
            document.getElementById("counter").innerText = document.getElementById("pass-one").value.length + "/10";
        }
    })
    

})();

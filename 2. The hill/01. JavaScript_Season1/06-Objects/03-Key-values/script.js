// 06-objects/03-keys-values/script.js - 6.3: keys & values


(() => {
    const person = {
        lastname: "Delnatte",
        firstname: "Pierre-Antoine",
        nickname: "Leny",
        birthDate: "08-05-1985",
        city: "Liège",
        status: "married",
    };
    // your code here
    document.getElementById("run").addEventListener("click", () => {
        console.log(Object.keys(person));
        // Useful reminder: https://www.geeksforgeeks.org/object-keys-javascript/

        for (const [key, value] of Object.entries(person)) {
            console.log(`${key}: ${value}`);
        }
        // This one was inspirational: https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Object/entries
    })
})();

/* /!\ Afterthought:
I could have entered console.log(Object.values(person)); instead of the for part
See here: https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Object/values
I keep my method since it is asked to display both the keys and the values as a list, which I did
*/

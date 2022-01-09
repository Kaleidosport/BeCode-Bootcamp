// 07-classes/04-getter-setter/script.js - 7.4: getter & setter


(() => {
    // your code here
    class Person {
        constructor(firstname, lastname) {
            this.firstname = firstname;
            this.lastname = lastname;
        }

        get name() {
            return this.firstname + " " + this.lastname;
        }

        set name(otherName) {
            this.firstname = otherName.split(" ")[0];
            this.lastname = otherName.split(" ")[1];
        }
    }

    document.getElementById("run").addEventListener("click", () => {
        let newPerson = new Person("Tony", "Stark");
        console.log(newPerson.name);

        newPerson.name = "Stephen Strange";
        console.log(newPerson.name);
    })
})();
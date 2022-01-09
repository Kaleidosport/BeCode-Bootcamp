const readlineSync = require("readline-sync");

function pizzaFlavorsManager() {
    let loaded = true;
    let pizzasList = [];

    while(loaded) {
        console.log("Hello! Welcome to the Pizza flavors Manager.");
        console.log("Please choose your actions: ");
        console.log("1 - List all the pizza flavors");
        console.log("2 - Add a new pizza flavor");
        console.log("3 - Remove a pizza flavor");
        console.log("4 - Exit this program");

        let pickAction = readlineSync.question("Enter your action\'s number: ");
        switch(pickAction) {

            case "1":
                if (pizzasList.length == 0) {
                    console.log("You'll have to add a new flavor first.");
                }
                else {
                    console.log(pizzasList);
                }
                break;

            case "2":
                pizzasList.unshift(readlineSync.question("Add your very own pizza flavor: "));
                break;

            case "3":
                let removePizza = readlineSync.question("What pizza flavor do you wanna remove?");
                for (let i = 0; i < pizzasList.length; i++) {
                    if (removePizza == pizzasList[i]) {
                        delete pizzasList[i];
                        console.log("The flavor " + removePizza + " has been removed.");
                    }
                }
                break;

            case "4":
                loaded = false;
                console.log("See ya.");
                break;
        }
    }
}

pizzaFlavorsManager();
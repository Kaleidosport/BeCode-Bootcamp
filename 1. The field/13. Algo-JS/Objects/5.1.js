// First skimmed through https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer

const readlineSync = require("readline-sync");

let name = "";
let productionYear = "";
let castMembers = [];
let nameCast = "";
let tvSerie = {};

function askTvSerie() {
    name = readlineSync.question("What's your favorite serie? ");
    productionYear = readlineSync.question("What year was it produced? ");
    while (nameCast != "END") {
        nameCast = readlineSync.question("Add a cast member, type END to end the process: ");
        castMembers.push(nameCast);
    } 
    tvSerie = {
        "Name": name,
        "Produced in": productionYear,
        "Starring": castMembers
    };
    JSON.stringify(tvSerie);    
}

askTvSerie();
console.log(tvSerie);
console.log("Tell us even more about " + name + " and " + castMembers[0] + " next time.");
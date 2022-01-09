/* Some links proved useful prior to finding solutions, of which...
 * https://medium.com/@wisecobbler/4-ways-to-populate-an-array-in-javascript-836952aea79f
 * https://www.codegrepper.com/code-examples/javascript/get+random+elements+from+array+javascript
 * https://stackoverflow.com/questions/19269545/how-to-get-a-number-of-random-elements-from-an-array/38571132#38571132
 * https://www.w3resource.com/javascript-exercises/javascript-array-exercises.php 
*/

const readlineSync = require("readline-sync");

let name = "";
let productionYear = "";
let castMembers = [];
let nameCast = "";
let tvSerie = {};
let shuffled = [];
let shuffling = [];

function askTvSerie() {
    name = readlineSync.question("What's your favorite serie? ");
    productionYear = readlineSync.question("What year was it produced? ");
    while (nameCast != "END") {
        nameCast = readlineSync.question("Add a cast member, type END to end the process: ");
        if (nameCast!= "END") castMembers.push(nameCast);
    } 
    tvSerie = {
        "Name": name,
        "Produced in": productionYear,
        "Starring": castMembers
    };
    JSON.stringify(tvSerie);    
}

function randomizeCast(someSerie) {
    shuffled[0]=someSerie[0];
    shuffling=someSerie.sort(() => Math.random() - Math.random()).slice(0, someSerie.length);
    while (shuffled[0]===shuffling[0]) {
        shuffling=someSerie.sort(() => Math.random() - Math.random()).slice(0, someSerie.length);
    }
    return shuffling;
}

function moreTvSerie() {
    console.log("Great news! An all-new serie starring " + tvSerie["Starring"] + " is in the making!");
    name = readlineSync.question("Come up with a name for this new project: ");
    productionYear = readlineSync.question("When should it start filming? ");
    castMembers = tvSerie["Starring"]; 
    tvSerie2 = {
        "Name": name,
        "Will be produced in": productionYear,
        "Starring": castMembers
    };
    JSON.stringify(tvSerie2);    
}

askTvSerie();
console.log(tvSerie);
console.log("I get it, " + name + " was great.");
randomizeCast(tvSerie["Starring"]);
moreTvSerie();
console.log(tvSerie2);
console.log("Well, ain't you looking forward to seeing " + castMembers[0] + " again and in the main role at that?");
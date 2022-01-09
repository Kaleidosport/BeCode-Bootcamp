const readlineSync = require("readline-sync");

let steps = 7;

let nickName = readlineSync.question("Enter your nickname: ");
steps -= 1;

console.log(steps + " steps remaining.");
let favoritePerson = readlineSync.question("Who's your favorite person in the whole world?");
steps -= 1;

console.log(steps + " steps remaining.");
let city = readlineSync.question("You live in: ");
steps -=1;

console.log(steps + " steps remaining.");
let dreamCity = readlineSync.question("What city would you like to visit?");
steps -=1;

console.log(steps + " steps remaining.");
let activity = readlineSync.question("And what would you do there?");
steps -=1;

console.log(steps + " steps remaining.");
let superpower = readlineSync.question("If you could be gifted with one superpower, which one would you choose?");
steps -=1;

console.log(steps + " steps remaining.");
let superpowerUse = readlineSync.question("What would you use said superpower for?");

console.log("Hey there, " + nickName + ".");
console.log("We wish we could grant you such a thing as a trip to " + dreamCity + " with " + favoritePerson
+ " or even grant you such a thing as " + superpower + ".");
console.log("Surely you would do great things like " + activity + " or " + superpowerUse + " but this is no Cinderella story.");
console.log("At least, allow us to wish you a great day in " + city + ". Sorry JavaScript ain't no Aladdin's genius.");
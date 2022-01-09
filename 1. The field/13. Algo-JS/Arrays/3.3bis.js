let mood = ["I", "feel", "exhausted"];
let currentState = mood.map((x) => x);
// It doesn't work here but mood.map((x) => x) is the same thing as mood.map(identity)

console.log(currentState);
// Method found on https://www.freecodecamp.org/news/how-to-clone-an-array-in-javascript-1d3183468f6a/

let renewedState = Array.from(mood);
console.log(renewedState);
// ibid
// Reminder to myself: think of checking what differentiates duplicating and cloning in js
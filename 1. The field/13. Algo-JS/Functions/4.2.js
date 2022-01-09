// Relevant doc on https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Math/random

function rand10(min, max) {
    return parseInt(Math.random() * (11 - 1) + 1);
}
/* function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
} where max is excluded => [1, 11[ interval in this case

Could have used Math.floor() instead of parseInt()
Works just fine if rand10() instead of rand10(min, max)
*/

console.log(rand10(1, 11));
// Same note ==> works just fine if rand10() instead of rand10(1, 11)

/* rand10() documentation
 * Launching node 4.1.js displays a random integer ranking from 1 to 10
*/
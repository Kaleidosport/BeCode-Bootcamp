let array1 = [1, 2, 3, 4, 5];
let array2 = [100, 101, 102];

let sum1 = 0;
for (let i = 0; i < array1.length; i++) {
    sum1 += array1[i];
}
console.log("First array's sum amounts to " + sum1 + ".");

let sum2 = 0;
for (let i = 0; i < array2.length; i++) {
    sum2 += array2[i];
}
console.log("Second array's sum amounts to " + sum2 + ".");
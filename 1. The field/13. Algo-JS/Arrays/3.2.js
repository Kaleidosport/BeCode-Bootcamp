let array1 = [1, 2, 3, 4, 5];
let array2 = [100, 101, 102];

let average1 = 0;
for (let i = 0; i < array1.length; i++) {
    average1 += array1[i] / array1.length;
}
console.log("First array's average amounts to " + average1 + ".");

let average2 = 0;
for (let i = 0; i < array2.length; i++) {
    average2 += array2[i] / array2.length;
}
console.log("Second array's average amounts to " + average2 + ".");
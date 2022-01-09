/* Found on https://www.tutorialspoint.com/sorting-array-without-using-sort-in-javascript
 * Kept as a reminder and a stepping stone
*/

const arr = [4, 56, 14, 3, 34, 28, 89, 21, 64, 86, 5, 23, 10, 11];

const sortWithReduce = arr => {
   return arr.reduce((acc, val) => {
      let i = 0;
      while(i < arr.length && val < arr[i]){
         i++;
      }
      acc.splice(i, 0, val);
      return acc;
   }, []);
};

console.log(sortWithReduce(arr));
function sortWithoutSort(array) { 
    let executed = false; 
    while (!executed) { 
      executed = true; 
      for (let i = 1; i < array.length; i++) { 
        if (array[i - 1] > array[i]) { 
          executed = false; 
          let tmp = array[i - 1]; 
          array[i - 1] = array[i]; 
          array[i] = tmp; 
        } 
      } 
    }    
    return array; 
  } 
   
  let numbers = [7, 14, 21, 28, 23, 8, 13, 4, 3, 10, 11, 5, 86, 64]; 
  sortWithoutSort(numbers); 
  console.log(numbers);
  
  let numbers2 = [77, 56, 4, 89, 61, 17, 39, 12];
  sortWithoutSort(numbers2);
  console.log(numbers2);
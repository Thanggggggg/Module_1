let myArray = [1,2,3,5,6,8,7,4,6]
function findMax(arr) {
    let maxVal = arr[0]; 
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > maxVal) { 
        maxVal = arr[i]; 
      }
    }
    return maxVal;
  }
console.log(findMax);
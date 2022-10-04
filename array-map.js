 // 1. Make an array of numbers that are doubles of the first array
 
 const numbers = [1, 2, 3, 4];
 const doubled = numbers.map(x => x*2);
 console.log(doubled);

// 2. Square the value of every element in the array. Presume that you will only get numbers in the input array.
const input = [ 1, 2, 3, 4, 5 ];
const squared = input.map(x => x **2);
console.log(squared);

// 3. If the given input is an array of numbers, return the sum of all the positives ones. If the array is empty or there aren't any positive numbers, return 0.
const input = [ 1, -4, 12, 0, -3, 29, -150];
const sum = input.filter(x => x >0).reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum);

//4. Calculate the mean and median values of the number elements from the input array.
 const input = [12, 46, 32, 64];
  const sum = input.sort((a, b) => a - b);

  const sum1 = input
  .reduce((accumulator, currentValue, index, array) => {

    accumulator.mean += currentValue /  array.length;

    if(Math.abs(index + 1  - array.length / 2) < 1) { 
      accumulator.median = currentValue 
    }

    return accumulator;
  }, { mean: 0, median: 0});
  
  console.log(sum, sum1);

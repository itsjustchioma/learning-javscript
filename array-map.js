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
const positive = input.filter(x => x > 0);
console.log(positive);

function sum(total, num){
    return total + num;
}

const s = positive.reduce(sum);
console.log(s);

// map ==> loops through each element of the array and do the operation that you passed in the call back function and hold the result from each operation in an array and finally returns you the array.

const numbers=[2,5,7,8,5,9];

function doubleIt(num){
    // console.log('num now', num)
    return num*2
}
const result = numbers.map(doubleIt)
// console.log(result) //[ 4, 10, 14, 16, 10, 18 ]



// shortcut
const double2 = n => n*2;
const output =numbers.map(double2)
console.log(output) //[ 4, 10, 14, 16, 10, 18 ]

// alternative
const output2 =numbers.map(n => n*2);
console.log(output2) //[ 4, 10, 14, 16, 10, 18 ]



// const doubled =[];
// for(const num of numbers){
//     const double =num*2;
//     doubled.push(double)
// }
// console.log(doubled) //[ 4, 10, 14, 16, 10, 18 ]




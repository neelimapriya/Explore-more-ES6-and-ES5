// more-map.js

const numbers =[12, 3, 6, 7, 9];

const doubleIt =numbers.map(num => num*2)
console.log(doubleIt) //[ 24, 6, 12, 14, 18 ]

const fiveBonus =numbers.map(num=> num+5);
console.log(fiveBonus) //[ 17, 8, 11, 12, 14 ]

const halves =numbers.map(num=> num/2);
console.log(halves) //[ 6, 1.5, 3, 3.5, 4.5 ]


const friends =['tom', 'jerry', 'olive', 'oggy'];
const lengths =friends.map(frnd=> frnd.length)
console.log(lengths) //[ 3, 5, 5, 4 ]
const firstLetter =friends.map(friend=> friend[0])
console.log(firstLetter) //[ 't', 'j', 'o', 'o' ]
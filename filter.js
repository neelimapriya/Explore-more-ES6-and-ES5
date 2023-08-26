// filters selects elements based on a condition and return an array with the elements that fulfilled the condition

const numbers = [3, 5, 6, 8, 9];

const players=[75,65,67,98,45,59];
// const selected =players.filter(p => p>70) //[ 75, 98 ]
// const selected =players.filter(p => p>60) //[ 75, 65, 67, 98 ]
// const selected =players.filter(p => p>50)
// [ 75, 65, 67, 98, 59 ]

// const selected =players.filter(p=>p%2===1)
// [ 75, 65, 67, 45, 59 ]
// console.log(selected)

const friends =['tom', 'jerry', 'olive', 'oggy'];
const selectsFriends =friends.filter(f=>f.length>4) //[ 'jerry', 'olive' ]
console.log(selectsFriends)


// reduce diye array er sob elements k sum kora hoy

const numbers = [63, 45, 86, 78, 54, 77, 88, 70];

const total =numbers.reduce((previous, current) => previous + current, 0)
console.log(total) //561

const sum=numbers.reduce((p,c) => p+c,0)
console.log(sum) //561

// array-of-object.js

const products =[
    {id:1, name:'lenovo', price:65000},
    {id:2, name:'hp', price:55000},
    {id:3, name:'dell', price:60000},
    {id:4, name:'mac', price:165000}
]
// map
const names =products.map(product => product.name)
console.log(names) //[ 'lenovo', 'hp', 'dell', 'mac' ]

const prices =products.map(p => p.price)
console.log(prices) //[ 65000, 55000, 60000, 165000 ]


// forEach
products.forEach(p => console.log(p.id))


// filter
const expensive =products.filter(p => p.price > 60000)
console.log(expensive)


// find
const affordable =products.find(p=>p.price <60000)
console.log(affordable)


// reduce
const total =products.reduce((p,c) => p + c.price,0)
console.log(total)
// data access
const data =[{id:1, name:'abul', address:'kochu khet'}];

console.log(data[0].address);


const product ={
    count:390,
    data: [
        {id:1, name:'lenovo', price:65000},
        {id:2, name:'macBook', price:160000}
    ]
}

console.log(product.data[1].price);



const user ={
    id:5001,
    name: 'shoriful',
    address:{
        street:{
            first:'54/1 uttor side',
            second:'poribag er goli',
            third:'no dorai'
        },
        city:'dhaka'
    }
}
console.log(user.address.street.second)




const user2 ={
    id:500,
    name:'poribir mazar',
    address:{
        city:'ctg',
        country:'bangladesh'
    }
}
console.log(user.address.street?.second)
console.log(user2.address.street?.second)
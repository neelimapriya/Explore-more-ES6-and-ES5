const products = [
  { id: 1, name: "lenovo", price: 65000 },
  { id: 2, name: "hp", price: 55000 },
  { id: 3, name: "dell", price: 60000 },
  { id: 4, name: "mac", price: 165000 },
];

//has some properties, method
class product {
    country ='Bangladesh';
    constructor(name){
        this.name=name;
    }
  speak(talk) {
    console.log(`talking about ${talk}`);
  }
}

const lenovo = new product('lenovo pc')
// console.log(lenovo)
// lenovo.speak('something new')




class teacher{
    constructor(name, subject){
        this.name=name;
        this.subject=subject;
    }
    lecture (){
        console.log('sir is teaching math')
    }
}

const tapan =new teacher('tapan sir', 'physics')
console.log(tapan)

const rashid= new teacher('rashid', 'english')
console.log(rashid)
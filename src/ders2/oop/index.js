class BaseCustomer{
    constructor(id,customerNumber){
        this.id=id
        this.customerNumber = customerNumber;
    }
}

let customer= new BaseCustomer(1,"12345");

//prototyping
customer.name = "ABC"
console.log(customer)

BaseCustomer.bisey ="Bişey"
console.log(BaseCustomer.bisey)


class IndividualCustomer extends BaseCustomer{
    constructor(firstname,id,customerNumber){
        super(id,customerNumber)
        this.firstname=firstname
    }

}

class CorporateCustomer extends BaseCustomer{
    constructor(companyName,id,customerNumber){
        super(id,customerNumber)
        this.companyName=companyName
    }
}



let cart = [
    {id:1, productName:"Telefon", quantity:1,unitPrice:4000},
    {id:2, productName:"Bardak", quantity:3,unitPrice:30},
    {id:3, productName:"Kalem", quantity:5,unitPrice:20},
    {id:4, productName:"Şarj Cihazı", quantity:3,unitPrice:100},
    {id:5, productName:"Kitap", quantity:5,unitPrice:30},
    {id:6, productName:"Pot", quantity:1,unitPrice:150},
]

// function addToCart(sepet) {
//     sepet.push({id:7, productName:"Ruhsat", quantity:1,unitPrice:20})
    
// }

// addToCart(cart)

console.log(cart)

let sayi =10

function sayiTopla(number) {
    number+= 1
}
sayiTopla(sayi)

// console.log(sayi)

// console.log("<ul>")
// cart.map(product=>{console.log("<li>"+product.productName +" : " +
//  product.unitPrice * product.quantity + "</li>")
// })
// console.log("</ul>")


let quantityOver2 = cart.filter(product => product.quantity>2)

console.log(quantityOver2)


let total = cart.reduce((acc,product)=> acc + product.unitPrice,0)

console.log("total: " + total)


function addToCart(productName="Elma",quantity){
    console.log("sepete eklendi : " + productName)
}

//fonksiyonda istenen parametreyi vermezsek "undefined" yazar, bunu istemezsek default değer verebiliriz.
// addToCart(  )
// addToCart("Yumurta")

let sayHello = ()=>{
    console.log("Hello")
}

sayHello()

let sayHello2 = function () {
    console.log("hello 2")
}
sayHello2()

function addToCart2(productName, quantity, unitPrice) {
    
}

addToCart2("asd", 2,20)

function addToCart3(product) {
    console.log("Ürün: " + product.productName + " Fiyat: " + product.unitPrice +" Adet: " + product.quantity )
}

let product1 = {productName:"Elma", unitPrice:10,quantity:4}
// addToCart3(product1)


let product2 = {productName:"Elma", unitPrice:10,quantity:4}
let product3 = {productName:"Elma", unitPrice:10,quantity:4}

product2 = product3

product2.productName= "Karpuz"
// console.log(product3.productName)
// objeler referans tipidir!

function addToCart4(products) {
    console.log(products)
}

let products= [
    {productName:"Elma", unitPrice:10,quantity:4   },
    {productName:"Armut", unitPrice:65,quantity:5   },
    {productName:"Karpuz", unitPrice:16,quantity:6   }

]

// addToCart4(products)

function add(number1,number2) {
    console.log(number1+ number2);
}
// add(20,30)

function add(bisey,...numbers) {//rest operatörlerini her zaman en sona yaz
    let total =0;
    for (let i = 0; i < numbers.length; i++) {
        total = total + numbers[i]
    }
    console.log(total)
    console.log(bisey);
}

// add(20,34,54,34,52)
let numbers = [41,75,43,45,79,566]
console.log(numbers);
console.log(...numbers);
console.log(Math.max(...numbers));

//ödev
console.log(numbers);
console.log("------------");

function findPrime(numbers) {
    let primelist = []
    for (let i = 0; i < numbers.length; i++) {
        var asd = isPrime(numbers[i])
        if (asd) {
            console.log(numbers[i])
            primelist.push(numbers[i])
        }
    }
    function isPrime(num) {
        for(var i = 2; i < num; i++)
          if(num % i === 0) return false;
        return num > 1;
      }
    console.log("list: " + primelist);
}

findPrime(numbers)
// let asd = findPrime(numbers)
// console.log(asd);




//   let asd = isPrime(41)
//   console.log(asd);
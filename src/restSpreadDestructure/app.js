console.log("hello world")

let dolarBugun = 9.30

let dolarDun = 9.20

//JS typesafe değildir

{
    let dolarDun = 9.10
}
console.log(dolarDun)

const euroDun =11.2
//euroDun =11 - it is constant!
console.log(euroDun)

let konutKredileri = ["Konut kredisi", "Emlak Konut Kredisi", "Kamu Konut Kredisi"]

console.log(konutKredileri)

let student ={id:1, name:"Ege"}
function save(ogrenci,puan=10) {
    console.log(ogrenci.name+ " : "+ puan)
}
save(student);
save(15);
save(student, 100)



let students = ["A","B","C"]
console.log(students)

let students2 = [student,{id:2, name:"Halit"},"Ankara", {city: "İstanbul"}]
console.log(students2)


//rest
let showProducts =function (id,...products) {
    console.log(id)
    console.log(products)
}

showProducts(10, "domates","biber","patlıcan")

//spread
let points = [1,2,3,4,5,6,14,56]
console.log(...points)
console.log(Math.max(...points))


//destructuring

let populations = [10000,20000,30000,[40000,100000]]
let[small,medium,high,[veryHigh,maximum]]= populations

console.log(small,medium,high,veryHigh,maximum)


function someFunc([small1],number)  {
    console.log(small1)
}

someFunc(populations)


let category ={id:1,name:"İçecek"}
console.log(category.id)
console.log(category["name"])

let {id,name1} = category
console.log(id)
console.log(name1)








// console.log("<ul>")
// for (let i = 0; i < konutKredileri.length; i++) {
//     console.log("<li>"+konutKredileri[i]+"</li>")
// }
// console.log("</ul>")
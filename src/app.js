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












console.log("<ul>")
for (let i = 0; i < konutKredileri.length; i++) {
    console.log("<li>"+konutKredileri[i]+"</li>")
}
console.log("</ul>")
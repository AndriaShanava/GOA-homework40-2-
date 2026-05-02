// .length - ეს გვაძლევს სტრინგის სიმბოლოების რაოდენობას
let str = "hello";
console.log(str.length)  

let name1 = 'andria'
var name2 = 'nika'
const name3 = 'demetre'
console.log(`${name1} ${name2} ${name3}`.length)

let firstName = 'andria'
const lastName = 'shanava'
console.log(`${firstName} ${lastName}`.length)


let x = 'andria'
x = 'nika'
console.log(x)

var y  = 'andria'
y = 'giorgi'
console.log(y)

const z = 'andria'
// z = 'nika'  - const ტიპის ცვლადს არ შეუძლია მნიშვნელობის შეცვლა
console.log(z)

let emptyStr
console.log(emptyStr) 

// let emptyStr2
// var emptyStr3 
// const emptyStr4 
// console.log(emptyStr2)
// console.log(emptyStr3)
// console.log(emptyStr4)


let name = 'andria'
let surname = 'shanava'
let age = 15
let adress = 'Tbilisi'
console.log(`hello, my name is ${name}, my surname is ${surname} and my age is ${age}, i live in ${adress} `)

// += - ეს არის ოპერატორი რომელიც უმატებს ცვლადს მითითებულ რიცხვს
// -= - ეს არის ოპერატორი რომელიც აკლებს ცვლადს მითითებულ რიცხვს
// *= - ეს არის ოპერატორი რომელიც ამრავლებს ცვლადს მითითებულ რიცხვზე
// /= - ეს არის ოპერატორი რომელიც ყოფს ცვლადს მითითებულ რიცხვზე
// ++ (ინკრემენტი): ზრდის ცვლადის მნიშვნელობას 1-ით
// -- (დეკრემენტი): ამცირებს ცვლადის მნიშვნელობას 1-ით


let num1 = 10
num1 += 5
console.log(num1)

let num2 = 20
num2 -= 3
console.log(num2)

let num3 = 4
num3 *= 6
console.log(num3)

let num4 = 50
num4 /= 2
console.log(num4)

let num5 = 10
num5++
console.log(num5)

let num6 = 15
num6--
console.log(num6)   
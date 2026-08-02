// 1)შექმენი რიცხვებით სავსე სია,შენი დავალებაა იპოვო მხოლოდ ლუწი რიცხვების ჯამი

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let sum = 0
for(let i = 0; i < numbers.length; i++){
    if(numbers[i] % 2 === 0)
        sum += numbers[i]
}
console.log(sum)

// 2)შექმენი რიცხვებით სავსე სია,შენი დავალებაა იპოვო მხოლოდ კენტი რიცხვების ჯამი
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let sum = 0
for(let i = 0; i < numbers.length; i++){
    if(numbers[i] % 2 !== 0)
        sum += numbers[i]
}
console.log(sum)

// 3)შექმენი სია სახელებით,შენი დავალებაა იპოვო სიაში მყოფი ელემენტების სიგრძეების ჯამი
const names = ['Andria', 'Giorgi', 'Saba', 'Gela', 'Luka', 'Gio', 'Gigi']
let sum = 0
for(let i = 0; i < names.length; i++){
    sum += names[i].length
}
console.log(sum)

// 4)შენი დავალებაა დაითვალო 1 დან 20 მდე და ყველა ლუწი რიცხვი ჩაამატო ახალ სიაში
// შემდეგ ამ სიასაც გადაუარე და გაიგე სიაში მყოფი ყველა რიცხვის ჯამი
const numbers = []
for(let i = 1; i < 20; i++){
    if(i % 2 === 0){
        numbers.push(i)
    }
}
console.log(numbers)

let sum = 0
for(let i = 0; i < numbers.length; i++){
    sum += numbers[i]
}
console.log(sum)

// 6)შექმენი სტრინგების სია,ასევე შექმენი მეორე რიცხვების სია,
// გააერთიანე ეს ორი სია ერთმანეთში და ამ გაერთიანებული სიის ყველა ელემენტი გამოიტანე ცალ ცალკე
const strings = ['hello', 'world', 'javascript']
const numbers = [1, 2, 3, 4, 5]
const combined = strings.concat(numbers)
for(let i = 0; i < combined.length; i++){
    console.log(combined[i])
}


// 7)შექმენი სია სადაც შეიყვან რიცხვებს,შენი დავალებაა იპოვო სიაში მყოფი რიცცვების კუბების ჯამი
const numbers = [1, 2, 3, 4, 5]
let sum = 0
for(let i = 0; i < numbers.length; i++){
    sum += Math.pow(numbers[i], 3)
}
console.log(sum)
// 1)
// let scores = [45, 67, 32, 89, 54, 71, 38, 90];
// .forEach()-ის გამოყენებით:
// დაბეჭდე თითოეული ქულა;
// თუ ქულა 50-ზე ნაკლებია, დაბეჭდე "Failed";
// თუ 50 ან მეტია, დაბეჭდე "Passed".

let scores = [45, 67, 32, 89, 54, 71, 38, 90]
scores.forEach(score => {
    console.log(score)
    if (score < 50) {
        console.log("Failed")
    } else {
        console.log("Passed")
    }
})

// 2)let names = ["goga", "nika", "luka", "ana", "giorgi"];
// .forEach()-ის გამოყენებით დაბეჭდე თითოეული სახელი ასე:
// 1. GOGA
// 2. NIKA
// 3. LUKA
// ...
// გამოიყენე .toUpperCase().

let names = ["goga", "nika", "luka", "ana", "giorgi"]
names.forEach((name, index) => {
    console.log(`${index + 1}. ${name.toUpperCase()}`)
})
console.log(names)

// 3)let prices = [20, 35, 50, 80, 120, 200];
// .map()-ით შექმენი ახალი მასივი, სადაც ყველა ფასი გაზრდილი იქნება 20-ით.
let newPrices = prices.map(price => price + 20)
console.log(newPrices)

// 4)დავალება 7 — რიცხვების გაფილტვრა
// let numbers = [12, 45, 7, 89, 23, 56, 91, 34, 18];
// .filter()-ის გამოყენებით დატოვე მხოლოდ ის რიცხვები, რომლებიც:
// 20-ზე მეტია და 80-ზე ნაკლები.
let numbers = [12, 45, 7, 89, 23, 56, 91, 34, 18]
let filteredNumbers = numbers.filter(num => num > 20 && num < 80)
console.log(filteredNumbers) 

// 5)let names = ["Giorgi", "Ana", "Alexander", "Nika", "Gabriel", "Luka"];
// .filter()-ით დატოვე მხოლოდ ის სახელები, რომელთა სიგრძეც 5 ან მეტია.
let names = ["Giorgi", "Ana", "Alexander", "Nika", "Gabriel", "Luka"]
let filteredNames = names.filter(name => name.length >= 5)
console.log(filteredNames)

// 6)let words = ["apple", "banana", "avocado", "orange", "apricot", "grape"];
// .filter()-ის გამოყენებით დატოვე მხოლოდ ის სიტყვები, რომლებიც იწყება "a" ასოთი.
let words = ["apple", "banana", "avocado", "orange", "apricot", "grape"]
let filteredWords = words.filter(word => word.startsWith('a'))
console.log(filteredWords)

// 7)let numbers = [12, 18, 25, 31, 45, 60, 72];
// .findIndex()-ით იპოვე პირველი რიცხვის ინდექსი, რომელიც 40-ზე მეტია.
let numbers = [12, 18, 25, 31, 45, 60, 72]
let index = numbers.findIndex(num => num > 40)
console.log(index)

// 8)let names = ["Nika", "Giorgi", "Ana", "Luka", "Saba", "Goga"];
// .findIndex()-ის გამოყენებით იპოვე "Saba"-ს ინდექსი.
// დამატებითი პირობა: თუ ასეთი სახელი არ არსებობს, დაბეჭდე:
// Name not found
let names = ["Nika", "Giorgi", "Ana", "Luka", "Saba", "Goga"]
let index = names.findIndex(name => name === "Saba")
if (index === -1) {
    console.log("Name not found")
}
cosole.log(index)

// 9)let numbers = [15, 22, 8, 4, -3, 17, -9, 30];
// .findIndex()-ით იპოვე პირველი უარყოფითი რიცხვის ინდექსი.
let numbers = [15, 22, 8, 4, -3, 17, -9, 30]
let index = numbers.findIndex(num => num < 0)
console.log(index)

// 10)დავალება 13 — ყველა რიცხვის ჯამი
// let numbers = [15, 8, 23, 42, 7, 19];
// .reduce()-ის გამოყენებით იპოვე ყველა რიცხვის ჯამი.
let numbers = [15, 8, 23, 42, 7, 19]
let sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue)
console.log(sum)

// 11)let numbers = [12, 7, 18, 5, 22, 31, 40, 9];
// .reduce()-ის გამოყენებით დაითვალე მხოლოდ ლუწი რიცხვების ჯამი.
let numbers = [12, 7, 18, 5, 22, 31, 40, 9]
let evenSum = numbers.reduce((accumulator, currentValue) => {
    if (currentValue % 2 === 0) {
        return accumulator + currentValue;
    }
    return accumulator;
});
console.log(evenSum);

// 12)let numbers = [5, 12, 18, 7, 24, 31, 40, 9, 16];
// გამოიყენე .filter() და .map(), რომ:
// დატოვო მხოლოდ ლუწი რიცხვები;
// შემდეგ თითოეული გაამრავლო 3-ზე;
// საბოლოოდ დაბეჭდო ახალი მასივი.
let numbers = [5, 12, 18, 7, 24, 31, 40, 9, 16]
let evenNumbers = numbers.filter(num => num % 2 === 0)
let multipliedNumbers = evenNumbers.map(num => num * 3)
console.log(multipliedNumbers)

// 13)let numbers = [10, 25, 40, 15, 60, 7, 80, 13];
// გამოიყენე .filter() და .reduce():
// დატოვე მხოლოდ 20-ზე მეტი რიცხვები;
// იპოვე მათი ჯამი.
let numbers = [10, 25, 40, 15, 60, 7, 80, 13]
let filteredNumbers = numbers.filter(num => num > 20)
let sum = filteredNumbers.reduce((accumulator, currentValue) => accumulator + currentValue)
console.log(sum)

// 14)let numbers = [5, 12, 7, 20, 33, 40, 15, 8, 50];
// ერთ დავალებაში გამოიყენე:
// .filter()
// .map()
// .reduce()
// პირობები:
// დატოვე მხოლოდ ლუწი რიცხვები;
// თითოეული ლუწი რიცხვი გაამრავლე 2-ზე;
// მიღებული რიცხვების ჯამი დაითვალე.

let numbers = [5, 12, 7, 20, 33, 40, 15, 8, 50]
let sum = numbers.filter(num => num % 2 === 0)
                 .map(num => num * 2)
                 .reduce((accumulator, currentValue) => accumulator + currentValue)
console.log(sum)

// 15)let numbers = [4, 11, 18, 25, 32, 47, 54, 61];
// .findIndex()-ით იპოვე პირველი რიცხვის ინდექსი, რომელიც 30-ზე მეტია.
// .filter()-ით შექმენი ახალი მასივი, სადაც დარჩება მხოლოდ 20-ზე მეტი რიცხვები.
// ორივე შედეგი დაბეჭდე.

let numbers = [4, 11, 18, 25, 32, 47, 54, 61]
let index = numbers.findIndex(num => num > 30)
let filteredNumbers = numbers.filter(num => num > 20)
console.log(index)
console.log(filteredNumbers)

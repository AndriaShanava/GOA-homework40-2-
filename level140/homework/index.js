// 1. ფასების გაზრდა
// მოცემულია:
// let prices = [25, 40, 15, 80, 120, 55];
// map()-ის გამოყენებით შექმენი ახალი მასივი, სადაც:
// 50-ზე ნაკლები ფასი გაიზრდება 10-ით
// 50 ან მეტი ფასი გაიზრდება 20-ით
// კონსოლში გამოიტანე ახალი სია
let price = [25, 40, 15, 80, 120, 55]
let newPrices = price.map(p => p < 50 ? p + 10 : p + 20)
console.log(newPrices)

// 2.
// let scores = [45, 72, 91, 38, 64, 100, 55];
// map()-ით შექმენი ახალი მასივი, სადაც:
// 90–100 → "A"
// 80–89 → "B"
// 70–79 → "C"
// 60–69 → "D"
// 60-ზე ნაკლები → "F"
let scores = [45, 72, 91, 38, 64, 100, 55]
let newScores = scores.map(score => {
    if(score >= 90 && score <= 100) {
        return "A"
    } else if(score >= 80 && score <= 89) {
        return "B"
    } else if(score >= 70 && score <= 79) {
        return "C"
    } else if(score >= 60 && score <= 69) {
        return "D"
    } else {
        return "F"
    }
})
console.log(newScores)

// 3. 
// let numbers = [4, 7, 10, 13, 20, 25];
// map()-ის გამოყენებით შექმენი ახალი მასივი:
// თუ რიცხვი ლუწია → მისი კვადრატი
// თუ კენტია → მისი კუბი
let numbers = [4, 7, 10, 13, 20, 25]
let newNumbers = numbers.map(num => num % 2 === 0 ? num * num : num * num * num)
console.log(newNumbers)

// 4. 
// let names = ["goga", "nika", "luka", "ana", "gio"];
// map()-ით შექმენი ახალი მასივი, სადაც თითოეული სახელი იქნება დიდი ასოებით:
let names = ["goga", "nika", "luka", "ana", "gio"]
let newNames = names.map(name => name.toUpperCase())
console.log(newNames)

// 5)let scores = [55, 82, 47, 91, 68, 73];
// map()-ის გამოყენებით:
// 80 ან მეტი → +10 ქულა
// 60–79 → +5 ქულა
// 60-ზე ნაკლები → +2 ქულა
// შექმენი ახალი მასივი.
let scores = [55, 82, 47, 91, 68, 73]
let updatedScores = scores.map(score => {
    if(score >= 80) {
        return score + 10
    } else if(score >= 60 && score <= 79) {
        return score + 5
    } else {
        return score + 2
    }
})
console.log(updatedScores)

// 6.
// let numbers = [12, 5, 18, 7, 22, 31, 40, 9];
// forEach()-ის გამოყენებით კონსოლში დაბეჭდე მხოლოდ ის რიცხვები, რომლებიც:
// 10-ზე მეტია
// და ლუწია.
let numbers = [12, 5, 18, 7, 22, 31, 40, 9]
numbers.forEach(num => {
    if(num > 10 && num % 2 === 0) {
        console.log(num)
    }
})

// 7)ჯამისა და რაოდენობის დათვლა
// let numbers = [15, 20, 7, 32, 11, 40, 8];
// forEach()-ის გამოყენებით იპოვე:
// ყველა რიცხვის ჯამი
// რამდენი რიცხვია 20-ზე მეტი
// რამდენი რიცხვია ლუწი
// შედეგები ცალკე ცვლადებში შეინახე.
let numbers = [15, 20, 7, 32, 11, 40, 8]
let sum = 0
let countGreaterThan20 = 0
let countEven = 0

numbers.forEach(num => {
    sum += num
    if(num > 20) {
        countGreaterThan20++
    }
    if(num % 2 === 0) {
        countEven++
    }
})

// 8)let numbers = [10, 25, 30, 45, 50];
// forEach()-ის გამოყენებით თითოეულ რიცხვს დაუმატე 5 და მიღებული მნიშვნელობა დაბეჭდე.
let numbers = [10, 25, 30, 45, 50]
numbers.forEach(num => {
    console.log(num + 5)
})

// 9)let scores = [45, 78, 92, 51, 66, 35, 88];
// forEach()-ის გამოყენებით თითოეული ქულისთვის დაბეჭდე:
// 45 → Failed
// 78 → Passed
// 92 → Excellent
// წესი:
// 50-ზე ნაკლები → "Failed"
// 50–79 → "Passed"
// 80–100 → "Excellent"
let scores = [45, 78, 92, 51, 66, 35, 88]
scores.forEach(score => {
    if(score < 50) {
        console.log(`${score} → Failed`)
    } else if(score >= 50 && score <= 79) {
        console.log(`${score} → Passed`)
    } else if(score >= 80 && score <= 100) {
        console.log(`${score} → Excellent`)
    }
})

// 10)let numbers = [3, 6, 9, 12, 15, 18];
// შექმენი ახალი მასივი, სადაც თითოეული რიცხვი გამრავლებული იქნება 3-ზე.
// შემდეგ მიღებული მასივი დაბეჭდე.~
let numbers = [3, 6, 9, 12, 15, 18]
let list = numbers.map(num => num * 3)
console.log(list)

// 11)let students = ["Goga", "Nika", "Luka", "Ana"];
// დავალება:
// კონსოლში გამოიტანე:
// Student 1: Goga
// Student 2: Nika
// Student 3: Luka
// Student 4: Ana

let students = ["Goga", "Nika", "Luka", "Ana"]
students.forEach((student, index) => {
    console.log(`Student ${index + 1}: ${student}`)
})

// 12)let numbers = [12, 5, 20, 7, 30, 11, 40, 8];
// პირველ ეტაპზე map()-ის გამოყენებით შექმენი ახალი მასივი, სადაც:
// ლუწი რიცხვები გამრავლდება 2-ზე
// კენტი რიცხვები გამრავლდება 3-ზე
// შემდეგ forEach()-ის გამოყენებით დაბეჭდე მხოლოდ მიღებული ახალი მასივის ის ელემენტები, რომლებიც 30-ზე მეტია.
let numbers = [12, 5, 20, 7, 30, 11, 40, 8]
let newNumbers = numbers.map(num => num % 2 === 0 ? num * 2 : num * 3)
newNumbers.forEach(num => {
    if(num > 30) {
        console.log(num)
    }
})

// 13)let prices = [25, 60, 120, 45, 200, 80];
// map()-ით შექმენი ახალი მასივი, სადაც თითოეულ ფასს დაემატება 60 ით გადასახადი.
// forEach()-ით დაბეჭდე თითოეული საბოლოო ფასი.
// forEach()-ის გამოყენებით ცალკე დაითვალე საბოლოო ფასების ჯამი.
let prices = [25, 60, 120, 45, 200, 80]
let finalPrices = prices.map(price => price + 60)
let total = 0
finalPrices.forEach(price => {
    console.log(price)
    total += price
})
console.log(total)

// 14)let numbers = [5, 12, 18, 7, 25, 30, 11, 40];
// შექმენი ახალი მასივი map()-ის გამოყენებით, სადაც:
// 10-ზე ნაკლები → რიცხვი * 5
// 10–20 → რიცხვი * 3
// 20-ზე მეტი → რიცხვი * 2
// შემდეგ forEach()-ით:
// დაბეჭდე თითოეული შედეგი
// დაითვალე რამდენი მიღებული რიცხვია 50-ზე მეტი
// დაითვალე მიღებული რიცხვების ჯამი
let numbers = [5, 12, 18, 7, 25, 30, 11, 40]
let newNumbers = numbers.map(num => {
    if(num < 10) {
        return num * 5
    } else if(num >= 10 && num <= 20) {
        return num * 3
    } else {
        return num * 2
    }
})
let countGreaterThan50 = 0
let sum = 0
newNumbers.forEach(num => {
    console.log(num)
    if(num > 50) {
        countGreaterThan50++
    }
    sum += num
})
console.log(countGreaterThan50)
console.log(sum)
// 1)const fruits = ["Apple", "Banana", "Orange", "Mango"];
// მოთხოვნები:
// - გამოიყენე for...of.
const fruits = ["Apple", "Banana", "Orange", "Mango"];
for (let i of fruits) {
    console.log(i);
}

// 2)მოცემულია მასივი:
// const numbers = [12, 5, 8, 21, 3, 16];
// მოთხოვნები:
// - გამოიყენე for...of.
// - გამოიტანე ყველა რიცხვი.
// - თითოეულ რიცხვს მიუწერე ტექსტი: "რიცხვია: ".

const numbers = [12, 5, 8, 21, 3, 16];
for (let i of numbers) {
    console.log("რიცხვია: " + i);
}

// 3)const numbers = [12, 5, 18, 7, 24, 9, 30, 14];
// მოთხოვნები:
// 1. დაითვალე, რამდენი რიცხვია ლუწი.
// 2. დაითვალე, რამდენი რიცხვია კენტი.
// 3. შეკრიბე ყველა რიცხვი, რომელიც 10-ზე მეტია.
// 4. გამოიტანე სამივე შედეგი.
const numbers2 = [12, 5, 18, 7, 24, 9, 30, 14];
let evenCount = 0;
let oddCount = 0;
let sum = 0;
for (let i of numbers2) {
    if (i % 2 === 0) {
        evenCount++;
    } else if (i > 10) {
        sum += i;
    }
    else {
        oddCount++;
    }
}
console.log(evenCount);
console.log(oddCount);
console.log(sum);


// 4)const numbers = [15, -8, 20, -5, 12, -10, 7, 25];
// მოთხოვნები:
// 1. შეკრიბე ყველა დადებითი რიცხვი.
// 2. შეკრიბე ყველა უარყოფითი რიცხვი.
// 3. დაითვალე, რამდენი დადებითი რიცხვია.
// 4. დაითვალე, რამდენი უარყოფითი რიცხვია.
const numbers3 = [15, -8, 20, -5, 12, -10, 7, 25];
let positiveSum = 0;
let negativeSum = 0;
let positiveCount = 0;
let negativeCount = 0;
for (let i of numbers3) {
    if (i > 0) {
        positiveSum += i;
        positiveCount++;
    } else {
        negativeSum += i;
        negativeCount++;
    }
}
console.log(positiveSum);
console.log(negativeSum);
console.log(positiveCount);
console.log(negativeCount);

// 5)მოცემულია მოსწავლეების ქულები:
// const scores = [45, 80, 32, 95, 60, 25, 70, 40];
// მოთხოვნები:
// 1. თუ ქულა 50 ან მეტია, მოსწავლემ გამოცდა ჩააბარა.
// 2. სხვა შემთხვევაში მოსწავლემ გამოცდა ვერ ჩააბარა.
// 3. დაითვალე ჩაბარებული და ჩაჭრილი გამოცდების რაოდენობა.
// 4. შეკრიბე ყველა ჩაბარებული გამოცდის ქულა.

const scores = [45, 80, 32, 95, 60, 25, 70, 40];
let passedCount = 0;
let failedCount = 0;
let passedSum = 0;
for (let i of scores) {
    if (i >= 50) {
        passedCount++;
        passedSum += i;
    } else {
        failedCount++;
    }
}
console.log(passedCount);
console.log(failedCount);
console.log(passedSum);


// 6)const prices = [50, 120, 80, 250, 30, 180, 90];
// მოთხოვნები:
// 1. იპოვე ყველა პროდუქტის საერთო ღირებულება.
// 2. დაითვალე, რამდენი პროდუქტი ღირს 100 ლარზე მეტი.
// 3. თუ პროდუქტი 150 ლარზე მეტი ღირს, მის ფასს დაუკელი 20 ლარი.
// 4. გამოთვალე ფასდაკლებების შემდეგ დარჩენილი საერთო თანხა.

const prices = [50, 120, 80, 250, 30, 180, 90];
let totalCost = 0;
let expensiveCount = 0;
let discountedTotal = 0;
for (let i of prices) {
    totalCost += i;
    if (i > 100) {
        expensiveCount++;
    }
    else if (i > 150) {
        i -= 20;
    }
    discountedTotal += i;
}

// 7)const numbers = [8, 15, 22, 15, 30, 7, 15, 40];
// მოთხოვნები:
// 1. საიდუმლო რიცხვია 15.
// 2. დაითვალე, რამდენჯერ გვხვდება 15.
// 3. შეკრიბე ყველა რიცხვი, რომელიც 15-ზე მეტია.
// 4. დაითვალე, რამდენი რიცხვია 15-ზე ნაკლები.

const numbers4 = [8, 15, 22, 15, 30, 7, 15, 40];
let secretNumber = 15;
let secretCount = 0;
let sumGreaterThanSecret = 0;
let countLessThanSecret = 0;
for (let i of numbers4) {
    if (i === secretNumber) {
        secretCount++;
    }
    else if (i > secretNumber) {
        sumGreaterThanSecret += i;
    }
    else if (i < secretNumber) {
        countLessThanSecret++;
    }
}

// 7)
// შექმენი ობიექტი:
const student = {
    name: "Nika",
    age: 17,
    city: "Tbilisi",
    grade: 10
};
// მოთხოვნები:
// - გამოიყენე for...in.
// - გამოიტანე ობიექტის ყველა თვისების სახელი.
// - გამოიტანე თითოეული თვისების მნიშვნელობა.

for(let i in student){
    console.log(i)
    console.log(student[i])
}

const car = {
    brand: "BMW",
    model: "M5",
    year: 2023,
    color: "Black",
    price: 90000
};
// მოთხოვნები:
// - for...in-ის გამოყენებით დაითვალე, რამდენი თვისება აქვს ობიექტს.
// - გამოიტანე თვისებების საერთო რაოდენობა.

let count = 0
for(let i in car){
    count ++
}

console.log(count)

// 11)
const salaries = {
    Nika: 1200,
    Ana: 1800,
    Goga: 2500,
    Luka: 900,
    Mari: 2100
};
// მოთხოვნები:
// - იპოვე ყველა თანამშრომლის ხელფასების ჯამი.
// - დაითვალე, რამდენი თანამშრომლის ხელფასია 2000-ზე მეტი.
// - გამოიტანე იმ თანამშრომლების სახელები, რომელთა ხელფასიც 2000-ზე მეტია.

let total = 0
let greaterThan2000 = 0
for(let i in salaries){
    total += salaries[i]
    if(salaries[i] > 2000){
        greaterThan2000 ++
        console.log(i)
    }
}

// 13)
const user = {
    username: "Goga",
    age: 20,
    active: true,
    points: 75,
    premium: false
};
// მოთხოვნები:
// - გამოიტანე ყველა თვისების სახელი და მნიშვნელობა.
// - დაითვალე, რამდენი თვისების მნიშვნელობაა რიცხვითი ტიპის.
// - დაითვალე, რამდენი თვისების მნიშვნელობაა boolean ტიპის.
// - რიცხვითი მნიშვნელობები შეკრიბე და გამოიტანე მათი ჯამი.
let numbers = 0
let boolean = 0
let sum = 0
for(let i in user){
    console.log(i, user[i])
    if(typeof user[i] === 'number'){
        numbers ++
        sum += user[i]
    }
    else if(typeof user[i] === 'boolean'){
        boolean ++
    }
}
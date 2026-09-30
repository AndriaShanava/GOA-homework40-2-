// 1)const numbers = [12, 7, 24, 8, 15, 30];
// .some() — შეამოწმე, არის თუ არა ერთი მაინც 20-ზე მეტი.
// .every() — შეამოწმე, არის თუ არა ყველა რიცხვი დადებითი.
// .filter() — დატოვე მხოლოდ 10-ზე მეტი რიცხვები.
// .map() — ყველა რიცხვი გაამრავლე 2-ზე.
const numbers = [12, 7, 24, 8, 15, 30];
const list = numbers.some(num => num > 20)
console.log(list)
const positive = numbers.every(num => num > 0)
console.log(positive)
const filteredNumbers = numbers.filter(num => num > 10)
console.log(filteredNumbers)
const multipliedNumbers = numbers.map(num => num * 2)
console.log(multipliedNumbers)

// 2)const scores = [65, 82, 91, 74, 55, 88];
// .some() — მიიღო თუ არა ვინმემ 90 ან მეტი.
// .every() — ყველა ქულა არის თუ არა 50-ზე მეტი.
// .filter() — დატოვე მხოლოდ 80-ზე მეტი ქულები.
// .reduce() — იპოვე ყველა ქულის ჯამი.
const scores = [65, 82, 91, 74, 55, 88];
const highScore = scores.some(score => score >= 90)
console.log(highScore)
const greaterThan50 = scores.every(score => score > 50)
console.log(greaterThan50)
const filteredScores = scores.filter(score => score > 80)
console.log(filteredScores)
const totalScore = scores.reduce((acc, score) => acc + score)
console.log(totalScore)

// 3)const numbers = [4, 8, 12, 16, 20, 25];
// გამოიტანე:
// არის თუ არა ერთი მაინც კენტი რიცხვი — .some()
// არის თუ არა ყველა რიცხვი ლუწი — .every()
// დატოვე მხოლოდ ლუწი რიცხვები — .filter()
// თითოეული რიცხვი გაამრავლე 3-ზე — .map()
const numbers = [4, 8, 12, 16, 20, 25];
const hasEvenNumber = numbers.some(num => num % 2 !== 0)
console.log(hasEvenNumber)
const allEvenNumbers = numbers.every(num => num % 2 === 0)
console.log(allEvenNumbers)
const evenNumbers = numbers.filter(num => num % 2 === 0)
console.log(evenNumbers)
const multipliedByThree = numbers.map(num => num * 3)
console.log(multipliedByThree)


// 4)const names = ["Giorgi", "Nika", "Ana", "Luka", "Dato"];
// .some() — არის თუ არა "Ana" სიაში.
// .every() — ყველა სახელი იწყება თუ არა დიდი ასოთი.
// .filter() — დატოვე მხოლოდ ის სახელები, რომელთა სიგრძეც 4-ზე მეტია.
// .map() — ყველა სახელი გადაიყვანე uppercase-ში.
const names = ["Giorgi", "Nika", "Ana", "Luka", "Dato"];
const hasAna = names.some(name => name === "Ana")
console.log(hasAna)
const allStartWithUppercase = names.every(name => name[0] === name[0].toUpperCase())
console.log(allStartWithUppercase)
const longNames = names.filter(name => name.length > 4)
console.log(longNames)
const uppercasedNames = names.map(name => name.toUpperCase())
console.log(uppercasedNames)

// 5)const numbers = [5, 12, 18, 3, 25, 40, 7];
// გამოიყენე რამდენიმე iterator:
// შეამოწმე .some()-ით, არის თუ არა 30-ზე მეტი რიცხვი.
// შეამოწმე .every()-ით, არის თუ არა ყველა რიცხვი 3-ზე მეტი.
// .filter()-ით დატოვე მხოლოდ ლუწი რიცხვები.
// .map()-ით ლუწი რიცხვები გაამრავლე 2-ზე.
// .reduce()-ით იპოვე მიღებული რიცხვების ჯამი.
const numbers = [5, 12, 18, 3, 25, 40, 7];
const hasNumberGreaterThan30 = numbers.some(num => num > 30)
console.log(hasNumberGreaterThan30)
const allNumbersGreaterThan3 = numbers.every(num => num > 3)
console.log(allNumbersGreaterThan3)
const evenNumbers = numbers.filter(num => num % 2 === 0)
console.log(evenNumbers)
const multipliedEvenNumbers = evenNumbers.map(num => num * 2)
console.log(multipliedEvenNumbers)
const sumOfMultipliedEvenNumbers = multipliedEvenNumbers.reduce((acc, num) => acc + num)
console.log(sumOfMultipliedEvenNumbers)

// 6)const numbers = [10, 15, 22, 8, 31, 44, 17, 50];
// შექმენი პროგრამა, რომელიც:
// ამოწმებს .some()-ით, არის თუ არა 40-ზე მეტი რიცხვი;
// ამოწმებს .every()-ით, არის თუ არა ყველა რიცხვი დადებითი;
// .filter()-ით იღებს მხოლოდ ლუწ რიცხვებს;
// .map()-ით თითოეულ ლუწ რიცხვს უმატებს 10-ს;
// .reduce()-ით ითვლის საბოლოო array-ს ჯამს.
const numbers = [10, 15, 22, 8, 31, 44, 17, 50];
const hasNumberGreaterThan40 = numbers.some(num => num > 40)
console.log(hasNumberGreaterThan40)
const allNumbersPositive = numbers.every(num => num > 0)
console.log(allNumbersPositive)
const evenNumbers = numbers.filter(num => num % 2 === 0)
console.log(evenNumbers)
const Numbers = evenNumbers.map(num => num + 10)
console.log(Numbers)
const evenNumbers1 = Numbers.reduce((acc, num) => acc + num)
console.log(evenNumbers1)

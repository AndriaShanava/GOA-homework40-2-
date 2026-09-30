// 1)შექმენით სია სადაც მოათავსებთ რიცხვებს,
// შენი დავალებაა რომ გაფილრო ეს სია და მიიღო ამ სიიდან 
// ისეთი სია სადაც მხოლოდ იქნებან ისეთი რიცხვები რომლებიც არიან ლუწი და 50 ზე მეტი ერთად
const nums = [30, 10, 78, 57, 65, 90]
const filteredList = nums.filter(item => item % 2 === 0 && item > 50)
console.log(filteredList)
// 2)შექმენი სია სადაც მპათავსებთ სტრინგებს,შენი დავალებაა რომ გაფილტრო ეს სია და ამ სიიდან მიიღო
//  ახალი სია სადაც იქნება ისეთი ელემენტები რომლებიც იწყებიან ასო გ ზე და ასევე მათი სიგრძე მეტია 4 ზე
const list = ['Andria', 'Merabi', 'Goga', 'Nika']
const filtered = list.filter(item => item.startsWith('g') && item.length > 4)
console.log(filtered)

// 3)შექმენით სია სადაც იქნება სახელები , 
// შენი დავალებაა findIndex() ის გამოყენებით იპოვო იმ ელემენტის 
// ინდექსი რომელიც იწყება ასო გ ზე და გამოიტანო კონსოლში მისი ისდექსი

const list1 = ['Andria', 'Merabi', 'Goga', 'Nika']
const result = list1.findIndex(item => item.startsWith('g'))
console.log(result)

// 4)let scores = [45, 78, 32, 90, 56, 88, 41, 73, 95, 27, 64];
// შეასრულე შემდეგი:
// 1. .forEach()
// ყველა ქულა გამოიტანე კონსოლში ასეთი ფორმატით:
// Score: 45
// Score: 78
// Score: 32
// ...
// 2. .filter()
// შექმენი ახალი მასივი, რომელშიც მოხვდება მხოლოდ 60-ზე მეტი ან ტოლი ქულები.
// [78, 90, 88, 73, 95, 64]
// 3. .map()
// ამ გაფილტრული ქულებიდან შექმენი ახალი მასივი, სადაც თითოეულ ქულას დაემატება 5 ქულა.
// მაგალითად:
// [83, 95, 93, 78, 100, 69]
// 4. .findIndex()
// მოცემულია:
// let searchScore = 88;
// იპოვე 88-ის ინდექსი თავდაპირველ scores მასივში.
// =============დამატებითი პირობა
// თუ searchScore მასივში არ არსებობს, გამოიტანე:
// Score not found
// თუ არსებობს:
// Score found at index: 5

let scores = [45, 78, 32, 90, 56, 88, 41, 73, 95, 27, 64]
scores.forEach(item => {
    console.log(`Score: ${item}`)
}) 
const filteredScores = scores.filter(item => item >= 60)
const mappedScores = filteredScores.map(item => item + 5)
const searchScore = 88
const index = scores.findIndex(item => item === searchScore)
if(index === -1) {
    console.log('Score not found')
} else {
    console.log(`Score found at index: ${index}`)
}

console.log(filteredScores)
console.log(mappedScores)

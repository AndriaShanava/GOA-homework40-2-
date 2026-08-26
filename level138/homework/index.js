// 1)შექმენი while ციკლი, რომელიც 1-დან 20-მდე რიცხვების ჯამს იპოვის.
let i = 1
while(i < 20){
    console.log(i)
    i++
}

// 2)while-ის გამოყენებით დაბეჭდე 1-დან 30-მდე ყველა ლუწი რიცხვი.
let i = 1
while(i < 30){
    if(i % 2 === 0){
        console.log(i)
    }
    i++
}

// 3)შექმენი ცვლადი:
// let number = 15;
// while-ის გამოყენებით დაბეჭდე რიცხვები 15-დან 1-მდე უკუსვლით.
let number = 15
while(number > 0){
    console.log(number)
    number--
}

// 4)შექმენით სია და გამოიტანეთ სიის ყველა ელემენტი წაილ ლუპით
let list = [1, 2, 3, 4, 5]
let i = 0
while(i < list.length){
    console.log(list[i])
    i++
}

// 5)შექმენით სია სადაც იქნება როგორც სტრინგები ასევე რიცხვები , 
// თქვენი დავალებაა გამოიტანოთ მხოლოდ სტრინგ ტიპის მონაცემები
let mixedList = [1, 'hello', 2, 'world', 3, 'javascript']
let i = 0
while(i < mixedList.length){
    if(typeof mixedList[i] === 'string'){
        console.log(mixedList[i])
    }
    i++
}

// 6)შექმენით სია სადაც იქნება როგორც სტრინგები ასევე რიცხვები , 
// თქვენი დავალებაა გამოიტანოთ მხოლოდ ის ელემენტები რომლები არიან სტრინგები და ასევე მათ სიგრძე ნაკლებია 5 ზე
let mixedList = [1, 'hi', 2, 'world', 3, 'js']
let i = 0
while(i < mixedList.length){
    if(typeof mixedList[i] === 'string' && mixedList[i].length < 5){
        console.log(mixedList[i])
    }
    i++
}

// 7)do...while-ის გამოყენებით დაბეჭდე 1-დან 10-მდე რიცხვები.
let i = 1
do {
    console.log(i)
    i++
} while (i <= 10)

// 8)do...while-ის გამოყენებით გააკეთე უკუთვლა:
// 10
// 9
// 8
// ...
// 1

let i = 10
do {
    console.log(i)
    i--
}
while (i > 0)

// 9)do...while-ის გამოყენებით იპოვე 1-დან 50-მდე ყველა კენტი რიცხვი
let i = 1
do {
    if(i % 2 !== 0){
        console.log(i)
    }
    i++
} while (i <= 50)

// 10)შექმენი while ციკლი, რომელიც დაბეჭდავს 1-დან 20-მდე რიცხვებს, მაგრამ როდესაც მივა 13-ზე, გამოიყენოს break.

// შედეგი უნდა იყოს:

// 1 2 3 4 5 6 7 8 9 10 11 12
let i = 1
while(i < 20){
    if(i === 13){
        break
    }
    console.log(i)
    i++
}

// 13)while + break გამოყენებით იპოვე 1-დან 100-მდე პირველი რიცხვი, რომელიც 7-ზე იყოფა.
let i = 1
while(i <= 100){
    if(i % 7 === 0){
        console.log(i)
        break
    }
    i++
}

// 14)მოცემულია:
// let number = 1;
// while ციკლით შეამოწმე რიცხვები 1-დან 100-მდე.
// როგორც კი იპოვი რიცხვს, რომელიც 3-ზეც იყოფა და 5-ზეც, დაბეჭდე ის და გააჩერე ციკლი break-ით.

let number = 1
while(number <= 100){
    if(number % 3 === 0 && number % 5 === 0){
        console.log(number)
        break
    }
    number++
}

// 15)დაიწყე:
// let sum = 0;
// let number = 1;
// while-ის გამოყენებით დაამატე რიცხვები sum-ში.
// როგორც კი sum გახდება 100-ზე მეტი, გამოიყენე break.
// ბოლოს დაბეჭდე sum.
let sum = 0
let number = 1
while(true){
    sum += number
    if(sum > 100){
        break
    }
    number++
}
console.log(sum)
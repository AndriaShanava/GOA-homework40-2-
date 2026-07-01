// 1)შექმენი სია:
let fruits = ["Apple", "Banana", "Orange", "Kiwi", "Mango"];
// დაბეჭდე:
// პირველი ელემენტი
// ბოლო ელემენტი
// მესამე ელემენტი
console.log(fruits[0])
console.log(fruits[4])
console.log(fruits[2])

// 2)მოცემულია:
let numbers = [12, 45, 67, 89, 23];
// დაბეჭდე მეორე და მეოთხე ელემენტები.
console.log(numbers[1])
console.log(numbers[3])

// 3)მოცემულია:
let colors = ["Red", "Blue", "Green"];
// შეცვალე:
// "Blue" → "Yellow"
// "Green" → "Black"
colors[1] = "Yellow";
colors[2] = "Black";
// შემდეგ დაბეჭდე მთელი სია.
console.log(colors);

// 4)მოცემულია:
let ages = [12, 15, 18, 21];
// პირველი ელემენტი შეცვალე 10-ით, ბოლო კი 30-ით.

ages[0] = 10;
ages[3] = 30;
console.log(ages);

// 5)მოცემულია:
let cities = ["Tbilisi", "Batumi", "Kutaisi", "Rustavi"];
// დაბეჭდე მესამე ქალაქი.
// შემდეგ შეცვალე "Kutaisi" → "Zugdidi".
// დაბეჭდე განახლებული სია.
console.log(cities[2]);
cities[2] = "Zugdidi";
console.log(cities);

// 6)მოცემულია:
let animals = ["Cat", "Dog", "Lion", "Tiger"];
// დაბეჭდე ბოლო ელემენტი.
// შეცვალე პირველი "Elephant"-ით.
// დაბეჭდე მთელი სია.

console.log(animals[3]);
animals[0] = "Elephant";
console.log(animals);

// 7)შექმენი 5 სახელის სია.
// დაბეჭდე მეორე სახელი.
// შეცვალე ბოლო სახელი "Nika"-ით.
// დაბეჭდე შედეგი.

let name = ["Andria", "Dato", "Nika", "Sandro", "Merabi"];
console.log(name[1]);
name[4] = "Nika";
console.log(name);

// 8)მოცემულია:
let scores = [50, 60, 70, 80, 90];
// დაბეჭდე პირველი და ბოლო ქულა.
// მეორე ქულა შეცვალე 100-ით.
// მეოთხე ქულა შეცვალე 75-ით.
// დაბეჭდე განახლებული სია.
console.log(scores[0]);
console.log(scores[4]);
scores[1] = 100;
scores[3] = 75;
console.log(scores);

// 9)მოცემულია:
let nums = [3, 6, 9, 12, 15];
// გააორმაგე პირველი ელემენტი.
// მესამე ელემენტს დაუმატე 5.
// ბოლო ელემენტი შეცვალე 0-ით.
// დაბეჭდე შედეგი.
nums[0] *= 2;
nums[2] += 5;
nums[4] = 0;
console.log(nums);

// 10)შექმენი ფუნქცია printFirst(arr), რომელიც მიიღებს სიას და დაბეჭდავს პირველ ელემენტს.
// მაგალითი:
// printFirst(["Apple", "Banana", "Orange"]);

function printFirst(arr) {
    console.log(arr[0]);
}

printFirst(["Apple", "Banana", "Orange"]);

// 11)შექმენი ფუნქცია printLast(arr), რომელიც დაბეჭდავს სიის ბოლო ელემენტს.
function printLast(arr) {
    console.log(arr[arr.length - 1]);
}
printLast(["Apple", "Banana", "Orange"]);


// 12)შექმენი ფუნქცია printSecond(arr), რომელიც დაბეჭდავს მეორე ელემენტს.

function printSecond(arr) {
    console.log(arr[1]);
}

// 13)შექმენი ფუნქცია changeFirst(arr), რომელიც პირველ ელემენტს შეცვლის "Hello"-ით და დაბეჭდავს სიას.
function changeFirst(arr) {
    arr[0] = "Hello";
    console.log(arr);
}

// 14)შექმენი ფუნქცია changeLast(arr), რომელიც ბოლო ელემენტს შეცვლის "Goodbye"-ით.
function changeLast(arr) {
    arr[arr.length - 1] = "Goodbye";
    console.log(arr);
}  

// 15)შექმენი ფუნქცია რომელსაც გადაეცემა სია და დაბეჭდავს სიის სიგრძეს
function printLength(arr) {
    console.log(arr.length);
}

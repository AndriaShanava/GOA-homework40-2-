// 1)შექმენი ფუნქცია greet(name = "Guest"), რომელიც აბრუნებს:
// "Hello Guest"
// თუ არგუმენტი გადაეცა:
// "Hello Giorgi"

function greet(name = "Guest") {
  return `Hello ${name}`;
}

greet("Giorgi")

// 2)შექმენი ფუნქცია favoriteColor(color = "blue").
// ფუნქციამ უნდა დააბრუნოს:
// "My favorite color is blue"
// ან გადაცემული ფერი.

function favoriteColor(color = "blue") {
    return `My favorite color is ${color}`;
}

// 3)შექმენი ფუნქცია:
// multiply(a = 1, b = 1)
// რომელიც დააბრუნებს ნამრავლს.
// გამოსცადე:
// multiply()
// multiply(5)
// multiply(5, 4)

function multiply(a = 1, b = 1) {
    return a * b;
}

multiply()
multiply(5) 
multiply(5, 4) 

// 5)შექმენი ფუნქცია toUpper(text), რომელიც დააბრუნებს ტექსტის დიდ ასოებად გადაყვანილ ვერსიას. გამოიძახე სხვდადასხვაარგუმენტებით

function toUpper(text) {
    return text.toUpperCase();
}

toUpper("hello")
toUpper("world") 

// 6)შექმენი ფუნქცია joinWords(word1, word2), რომელიც return-ით დააბრუნებს ორივე სიტყვის შეერთებულ ვერსიას. გამოიძახე სხვადასხვა არგ ებით

function joinWords(word1, word2) {
    return word1 + word2;
}

joinWords("Hello", "World")

// 7)შექმენი ფუნქცია getLength(text), რომელიც დააბრუნებს გადმოცემული ტექსტის სიმბოლოების რაოდენობას.,გამოიძახე რამდენჯერმე სხვადასხვა სიგრძის ტექსტებით

function getLength(text) {
    return text.length;
}

getLength("hello") 
getLength("world") 


// 8)შექმენი ფუნქცია checkNum(num = 5)
// ფუნქციამ უნდა დააბრუნოს "even" თუ რიცხვი ლუწია , "odd" თუ რიცხვი კენტია
// გამოძახე ფუნქცია არგუმენტითაც და მის გარეშეც 

function checkNum(num = 5) {
    if (num % 2 === 0) {
        return "even";
    } else {
        return "odd";
    }
}

checkNum(4)
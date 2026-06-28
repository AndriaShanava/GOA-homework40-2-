// 1)შექმენი Function Expression --> square, რომელიც მიიღებს რიცხვს და დააბრუნებს მის კვადრატს.გამოიყენე Math
// გამოიძახე ფუნქცია რამდენჯერმე სხვადასხვა არგუმენტებით და ნახე შედეგი

const square = function(num) {
    return Math.pow(num, 2);
}

// 2)შექმენი Function Expression --> maxNumber, რომელიც მიიღებს ოთხ რიცხვს და დააბრუნებს მათგან დიდს.
// გამოიძახე ფუნქცია რამდენჯერმე სხვადასხვა არგუმენტებით და ნახე შედეგი

const maxNumber = function(a, b, c, d) {
    return Math.max(a, b, c, d);
}

// 3)პაროლის შემოწმება
// შექმენი Function Expression --> checkPassword, რომელიც დააბრუნებს true თუ პაროლი:
// მინიმუმ 8 სიმბოლოა და მთავრდება ასო "a" ზე
// სხვა შემთხვევაში დააბრუნოს false.

const checkPassword = function(password) {
    return password.length >= 8 && password.endsWith('a') ? true : false;
}

// 4)შექმენი Function Expression --> isLuckyNumber, რომელიც დააბრუნებს true თუ რიცხვი:
// იყოფა 3-ზე
// და იყოფა 5-ზე
// სხვა შემთხვევაში დააბრუნოს false.(use ternary)
// გამოიძახე ფუნქცია რამდენჯერმე სხვადასხვა არგუმენტებით და ნახე შედეგი
const isLuckyNumber = function(num) {
    return num % 3 === 0 && num % 5 === 0 ? true : false;
}

// 5)შექმენი Function Expression--> checkWord, რომელიც მიიღებს სიტყვას.
// თუ სიტყვა არის "javascript" დააბრუნოს:
// "Access Granted"
// სხვა შემთხვევაში:
// "Access Denied"

const checkWord = function(word) {
    return word === "javascript" ? "Access Granted" : "Access Denied";
}

// 6)შექმენი Arrow Function --> isAdult, რომელიც მიიღებს ასაკს და დააბრუნებს:
// "Adult" თუ ასაკი 18 ან მეტია
// "Minor" სხვა შემთხვევაში
// ternary
// გამოიძახე ფუნქცია რამდენჯერმე სხვადასხვა არგუმენტებით და ნახე შედეგი

const isAdult = (age) => {
    return age >= 18 ? "Adult" : "Minor";
}

isAdult(20);
isAdult(15);


// 7)შექმენი Arrow Function --> rectangleArea, რომელიც მიიღებს სიგრძეს და სიგანეს და დააბრუნებს ფართობს.
// გამოიძახე ფუნქცია რამდენჯერმე სხვადასხვა არგუმენტებით და ნახე შედეგი

const rectangleArea = (length, width) => {
    return length * width;
} 

rectangleArea(5, 10);
rectangleArea(7, 3);

// 8)შექმენი Arrow Function -->  passwordStrength, რომელიც მიიღებს პაროლს:
// თუ პაროლის სიგრძე 8-ზე ნაკლებია და პაროლი მთავრდება ასო "ი" თი→ "Weak"
// თუ 8 ან მეტია და იწყება ასო "გ" თი → "Strong"

const passwordStrength = (password) => {
    return password.length < 8 && password.endsWith('ი') ? "Weak" : password.length >= 8 && password.startsWith('გ') ? "Strong" : "Moderate";
}

// 9)შექმენი Arrow Function -->  startsWith რომელიც მიიღებს რაიმე სტრინგს
// თუ სტრინგი იწყება "გ" თი და მთავრდება "ო" თი და სიგრძე trim() ით მეტია 8 ზე დააბრუნე --> რთული სახელი , სხვა შემთხვევაში მარტივი სახელი
let startsWith = (str) => {
    return str.trim().length > 8 && str.startsWith('გ') && str.endsWith('ო') ? "რთული სახელი" : "მარტივი სახელი";
}

// 10)შექმენი formatUsername, რომელიც ერთ ხაზში დააბრუნებს username-ს პატარა ასოებით.
const formatUsername = username => username.toLowerCase()

// 11)შექმენი checkCode, რომელიც ერთ ხაზში დააბრუნებს:
// "Access Granted" თუ კოდი არის "1234"
// "Access Denied" სხვა შემთხვევაში
const checkCode = code => code === "1234" ? "Access Granted" : "Access Denied";


// 12)შექმენი isLongText, რომელიც ერთ ხაზში დააბრუნებს true, თუ ტექსტის სიგრძე 10-ზე მეტია. 
const isLongText = text => text.length > 10;

// 13)შექმენი passedExam, რომელიც ერთ ხაზში დააბრუნებს:
// "Passed" თუ ქულა 51 ან მეტია
// "Failed" სხვა შემთხვევაში

const passedExam = score => score >= 51 ? "Passed" : "Failed";


// 14)შექმენი freeDelivery, რომელიც ერთ ხაზში დააბრუნებს true, თუ შეკვეთის ფასი 100₾-ზე მეტია. სხვა შემთხვევაში false
let freeDelivery = price => price > 100 ? true : false;
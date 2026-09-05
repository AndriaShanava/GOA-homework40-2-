// 1)შექმენი ფუნქცია greet, რომელიც ბეჭდავს "Hello!".
// შექმენი ფუნქცია process, რომელსაც პარამეტრად გადაეცემა ფუნქცია და შიგნით გამოიძახებს მას.
function greet() {
  console.log("Hello!");
}

function process(callback) {
  callback()
}
process(greet)

// 2)შექმენი:
// sayHello()
// sayBye()
// process ფუნქციას(პირველ დავალებაში შექმნილი) გადაეცი ერთ-ერთი მათგანი და გამოატანინე შესაბამისი ტექსტი.
// მაგალითად:
// process(sayHello);

function sayHello() {
  console.log("Hello!");
}

function sayBye() {
  console.log("Bye!");
} 

function process(callback) {
  callback();
}
process(sayHello)
process(sayBye)

// 3)შექმენი ფუნქცია showNumber, რომელსაც პარამეტრად გადაეცემა რიცხვი და ბეჭდავს მას.
// შექმენი processNumber, რომელსაც გადაეცემა:
// რიცხვი
// callback ფუნქცია
// და შიგნით callback-ს გადასცეს ეს რიცხვი.
// მაგალითად:
// processNumber(10, showNumber);
function showNumber(num) {
  console.log(num);
}

function processNumber(num, callback) {
  callback(num);
}
processNumber(10, showNumber)

// 4)საშუალო — Callback + მონაცემის გადაცემა
// ორი მოქმედება რიცხვზე
// შექმენი ორი ფუნქცია:
// double(number)
// square(number)
// პირველმა რიცხვი გააორმაგოს, მეორემ კვადრატში აიყვანოს.
// შექმენი:
// calculate(number, callback)
// რომელიც მიღებულ რიცხვზე შეასრულებს callback-ს.
// მაგალითად:
// calculate(5, double);
// calculate(5, square);

function double(number) {
  return number * 2;
}

function square(number) {
  return number * number;
}

function calculate(number, callback) {
  return callback(number);
}
calculate(5, double)
calculate(5, square)

// 5)შექმენი ორი ფუნქცია:
// toUpper(text)
// toLower(text)
// ერთი ტექსტს გადაიყვანს დიდ ასოებში, მეორე — პატარა ასოებში.
// შემდეგ შექმენი:
// processText(text, callback)
// და გამოიყენე ორივე callback-თან.
function toUpper(text) {
  return text.toUpperCase();
}

function toLower(text) {
  return text.toLowerCase();
}

function processText(text, callback) {
  callback(text);
}
processText('Andria', toUpper)
// 6)შექმენი:
// formal(name)
// friendly(name)
// formal უნდა აბრუნებდეს:
// Good evening, Goga
// friendly:
// Hey Goga!
// შემდეგ შექმენი:
// greetUser(name, callback)
// რომელიც callback-ის საშუალებით განსაზღვრავს, როგორ მივესალმოთ მომხმარებელს.

function formal(name) {
  return `Good evening, ${name}`;
}

function friendly(name) {
  return `Hey ${name}!`;
}

function greetUser(name, callback) {
  callback(name);
}
greetUser('goga', formal)
// 7)შექმენი:
// isEven(number)
// isPositive(number)
// ორივე ფუნქციამ უნდა დააბრუნოს true ან false.
// შემდეგ შექმენი:
// checkNumber(number, callback)
// რომელიც callback-ის შედეგს დაბეჭდავს.
// მაგალითად:
// checkNumber(8, isEven);
// checkNumber(8, isPositive);

function isEven(number) {
  return number % 2 === 0;
}

function isPositive(number) {
  return number > 0;
}

function checkNumber(number, callback) {
  callback(number);
}

console.log(checkNumber(4, isEven))
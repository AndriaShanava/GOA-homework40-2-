// 1)
a = 10
b = 20
console.log(a > b)
console.log(a < b)
console.log(a >= b)
console.log(a <= b)

// 2)შექმენი ორი რიცხვი და შეამოწმე ტოლი არიან თუ არა == ოპერატორით.
let num1 = 5;
let num2 = 5;
console.log(num1 == num2);

// 3)ექმენი ორი განსხვავებული რიცხვი და შეამოწმე !== ოპერატორით განსხვავდებიან თუ არა.
let num3 = 5;
let num4 = 10;
console.log(num3 !== num4);

// 4)მომხმარებელს შემოატანინე ასაკი prompt-ით.
// შეამოწმე:
// არის თუ არა 18-ზე მეტი
// არის თუ არა 18-ის ტოლი
let age = Number(prompt("Enter your age:"));
console.log(age > 18);
console.log(age === 18);

// 5)მომხმარებელს შემოატანინე პაროლი.
// შეამოწმე ტოლია თუ არა "admin123"-ის.
let password = prompt("Enter your password:");
console.log(password === "admin123");

// 6)შექმენი ცვლადი temperature.
// შეამოწმე:
// მეტია თუ არა 30-ზე
// ნაკლებია თუ არა 0-ზე
let temperature = 25;
console.log(temperature > 30);
console.log(temperature < 0);

// 7)მომხმარებელს შემოატანინე რიცხვი.
// შეამოწმე:
// არის თუ არა 100-ზე დიდი
// არის თუ არა 50-ზე ნაკლები

let number = Number(prompt("Enter a number:"));
console.log(number > 100);
console.log(number < 50);

// 8)შექმენი ორი სტრინგი:
// let name1 = "Goga"
// let name2 = "goga"
// შეამოწმე ტოლი არიან თუ არა.

let name1 = "Goga";
let name2 = "goga";
console.log(name1 === name2);

// 9)შექმენი ორი რიცხვი და გამოიტანე რომელია უფრო დიდი მხოლოდ შედარების ოპერატორებით.
let num5 = 15;
let num6 = 25;
console.log(num5 > num6);

// 10)შექმენი ცვლადი:

// let x = "5"
// let y = 5
// შეამოწმე:
// x == y
// x === y

let x = "5";
let y = 5;
console.log(x == y);
console.log(x === y);

// 11)მომხმარებელს შემოატანინე სახელი.

// თუ სახელის სიგრძე (length) მეტია 5-ზე:
// გამოიტანე "გრძელი სახელია"
// სხვა შემთხვევაში:
// "მოკლე სახელია"
let name = prompt("Enter your name:");
if (name.length > 5) {
    console.log("გრძელი სახელია");
} 
else {
    console.log("მოკლე სახელია");
}

// 12)მომხმარებელს შემოატანინე ტექსტი.

// თუ ტექსტი მთლიანად პატარა ასოებითაა:
// გამოიტანე "პატარა ასოებია"
// სხვა შემთხვევაში:
// "არის დიდი ასოებიც"

let text = prompt("Enter some text:");
if (text === text.toLowerCase()) {
    console.log("პატარა ასოებია");
} 
else {
    console.log("არის დიდი ასოებიც");
}

// 13)მომხმარებელს შემოატანინე პაროლი.
// თუ პაროლის სიგრძე მინიმუმ 8-ია:
// "ძლიერი პაროლი"
// სხვა შემთხვევაში:
// "სუსტი პაროლი"

let password2 = prompt("Enter your password:");
if (password2.length >= 8) {
    console.log("ძლიერი პაროლი");
}
else {
    console.log("სუსტი პაროლი");
}

// 14)მომხმარებელს შემოატანინე username.
// თუ username-ის სიგრძე 4-ზე ნაკლებია:
// "ძალიან მოკლე username"
// სხვა შემთხვევაში:
// "username სწორია"
let username = prompt("Enter your username:");
if (username.length < 4) {
    console.log("ძალიან მოკლე username");
}
else {
    console.log("username სწორია");
}

// 15)მომხმარებელს შემოატანინე ტექსტი.
// თუ ტექსტი ტოლია თავის toUpperCase() ვერსიის:
// "ყველა ასო დიდია"
// სხვა შემთხვევაში:
// "ყველა ასო დიდი არაა"
let text2 = prompt("Enter some text:");
if (text2 === text2.toUpperCase()) {
    console.log("ყველა ასო დიდია");
}
else {
    console.log("ყველა ასო დიდი არაა");
}
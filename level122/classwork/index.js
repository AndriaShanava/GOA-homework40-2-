// შექმენით ფუნქცია function expression ით რომელსაც გადაეცემა პარამეტრად num რიცხვი
// შენი დავალებაა რომ გაიგო ეს რიცხვი ლუწია თუ კენტია და დააბრუნო შესაბამისი სტრინგი --> "even" თუ ლუწია "odd" თუ კენტია
// გააკეთე ternary ოპერატორით
// გამოიძახე ფუნქცია რამდენჯერმე სხვადასხვა არგუმენტით

const number = function(num) {
    return num % 2 === 0 ? "even" : "odd";
}
number(4);
number(7);

// შექმენით ARROW FUNCTION რომელსაც არგუმენტად გადაეცემა 4 რიცხვი
// შენი დავალებაა დააბრუნო ამ 4 რიცხვიდან მაქსიმალური რიცხვი
// გამოიძახე ფუნქცია რამდენჯერმე სხვადასხვა არგუმენტებით

let maxNumber = (a, b, c, d) => {
    return Math.max(a, b, c, d);
}

maxNumber(1, 2, 3, 4);
maxNumber(10, 20, 30, 40);

// function greet(name , age , sunrame){
//   return  `Hello my name is ${name} , my surname is ${surname} and age is ${age}`
// }

// console.log(greet("giorgi" , 20 , "miribiani")
// გადააკეთეთ ზემოთ მოცემული ფუნქცია ჯერ function expression შემდეგ arrow ფუნქციად

const greet = function(name, age, surname) {
    return `Hello my name is ${name} , my surname is ${surname} and age is ${age}`;
}

let greetArrow = (name, age, surname) => {
    return `Hello my name is ${name} , my surname is ${surname} and age is ${age}`;
}


// 1)კომენტარის სახით ახსენით თუ რა არის typeof და რაში გვეხმარება ის
// typeof არის ოპერატორი რომელიც გვიბრუნებს მონაცემის ტიპს, ის გვეხმარება იმის გასაგებად თუ რა ტიპის მონაცემი გვაქვს.

// 2)შექმენი ცვლადი და შეინახე რაიმე რიცხვი,შენი დავალებაა გამოიტანო ამ ცვლადში შენახული ელემენტის მონაცემთა ტიპი
let number = 5;
console.log(typeof number);

// 3)შექმენი ცვლადი და შეინახე რაიმე სტრინგი,შენი დავალებაა გამოიტანო ამ ცვლადში შენახული ელემენტის მონაცემთა ტიპი
let string = 'Hello';
console.log(typeof string);

// 4)შექმენი ცვლადი და შეინახე boolean ტიპის მონაცემი,შენი დავალებაა გამოიტანო ამ ცვლადში შენახული ელემენტის მონაცემთა ტიპი
let boolean = true; 
console.log(typeof boolean);

// 5)შექმენი ცვლადი და შეინახე undefined,შენი დავალებაა გამოიტანო ამ ცვლადში შენახული ელემენტის მონაცემთა ტიპი
let empty;
console.log(typeof empty);

// 6)შექმენი ცვლადი სადაც შეინახავ სტრინგს,შემდეგ დაბეჭდე ამ ცვლადში შენახული ელემენტის ტიპი,
//შემდეგ განაახლე ამ ცვლადის მნიშვნელობა და შეინახე რაიმე რიცხვი,შემდეგ გამოიტანე განახლებული ცვლადს მონაცემთა ტიპი
let variable = 'Hello';
console.log(typeof variable);
variable = 10;
console.log(typeof variable);

// 7)
let name = 'Goga'
let age = '16'
console.log(`My name is ${name} and I am ${age} years old.`)

// 8)
let a = 5
let b = 3
console.log(`The sum of ${a} and ${b} is ${a + b}.`)

// 9)
let name = 'andria'
let surname = 'shanava'
let age = 15
let adress = 'Tbilisi'
console.log(`hello, my name is ${name}, my surname is ${surname} and my age is ${age}, i live in ${adress} `)

// 10)კომანტარის სახით ახსენით თუ რისი მეთოდებია --> .toUpperCase() , .toLowerCase() , .startsWith() , .trim() თითოეულ მათგანს მიუწერე თუ რომელი რაში გამოიყენება.
// .toUpperCase() - ეს მეთოდი ცვლის სტრინგის ყველა ასოს დიდ ასოდ.
// .toLowerCase() - ეს მეთოდი ცვლის სტრინგის ყველა ასოს პატარა ასოდ.
// .startsWith() - ეს მეთოდი შეამოწმებს იწყება თუ არა სტრინგი მითითებული სიმბოლოთი ან სიტყვით და აბრუნებს true ან false.
// .trim() - ეს მეთოდი ამოჭრის სტრინგის დასაწყისში და ბოლოს არსებულ ცარიელ ადგილებს (whitespace) და აბრუნებს ახალ სტრინგს.

// 11)
let str = 'HELLO'
console.log(str.toLowerCase())

// 12)
let name1 = 'GoGa'
console.log(name1.toLowerCase()) 

// 13)
let word = 'javascript'
console.log(word.toUpperCase())

// 14)
let city = 'tbilisi'
console.log(city.toUpperCase())

// 15)
let str1 = 'Hello World'
console.log(str1.startsWith('Hello'))

// 16)
let email = 'test@gmail.com'
console.log(email.startsWith('test'))

// 17)
let name2 = 'giorgi'
console.log(name2.startsWith('g'))

// 18)
let str2 = '   hello   '
console.log(str2.trim())

// 19)
let userame = '   goga123   '
comsole.log(userame.trim())

// 20)
let str3 = "   HeLLo WoRLd   "
console.log(str3.trim().toLowerCase())

// 21)
let word1 = '   javascript'
console.log(word1.trim().startsWith('java'))

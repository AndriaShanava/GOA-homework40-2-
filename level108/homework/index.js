// 1)კომენტარის სახით ახსენით თუ რა ფუნქციები ვისწავლეთ მონაცემთა ტიპის შესაცვლელად ,ჩამოწერე ყველა მათგანი
let name = "60";
let age = 30;
let isStudent = 20;
console.log(parseInt(name), age.toString(), parseFloat(isStudent));

// 2) 
let user = prompt("Enter something:");
console.log(Number(user), parseInt(user), String(user), user.toString());

// 3)
let a = prompt("Enter a number:");
let b = prompt("Enter another number:");
console.log(a + b);

// 4)
let name = prompt('Enter your name:')
let surname = prompt('Enter yout surname:')
let age = prompt('Enrter your age:')
let adress = prompt('Enter your adress:')
console.log(`hello, my name is ${name}, my surname is ${surname} and my age is ${age}, i live in ${adress} `)

// 5)
let string1 = prompt("Enter a number:");
console.log(typeof parseInt(string1));

// 6)
let string2 = Number(prompt("Enter a number:"))
console.log(typeof string2);

// 7)მომხმარებელს შემოატანინე 4 ნამბერ ტიპის მონაცემი,შენი დავალებაა რომ მოახდინო ამ რიცხვების კონკატინაცცია,გამოიყენე შესაბამისი მეთოდები
let num1 = Number(prompt("Enter a number:"));
let num2 = Number(prompt("Enter a number:"));
let num3 = Number(prompt("Enter a number:"));
let num4 = Number(prompt("Enter a number:"));
console.log(num1.toString() + num2.toString() + num3.toString() + num4.toString());

// 8)მომხმარებელს შემოატანინე ორი რიცხვი, შენი დავალებაა კონსოლში გამოიტანო რამდენია პირველი ამ
// ორი რიცხვის გაყოფისას მიღებული ნნაშთი(გამოიყენე შესაბამისი ფუნქცია და მათემატიკური ოპეტაროტი-->გადახედეთ გავლილს)
let number1 = Number(prompt("Enter a number:"));
let number2 = Number(prompt("Enter another number:"));
console.log(number1 % number2);

// 9)მომხმარებელს შემოატანინე ორი რიცხვი,შენი დაალებაა გაიგო ამ ორი რიცხვის ნამრავლი
let number3 = Number(prompt("Enter a number:"));
let number4 = Number(prompt("Enter another number:"));
console.log(number3 * number4);

// 10)მომხმარებელს შემოატანინე 5 რიცხვი,შენი დავალებაა გაიგო რამდენია ამ რიცხვების საშვალო არითმეტიკული(მოიძიეთ თუ არ იცით რა არის საშვალო არითმეტიკული)
let num5 = Number(prompt("Enter a number:"));
let num6 = Number(prompt("Enter a number:"));
let num7 = Number(prompt("Enter a number:"));
let num8 = Number(prompt("Enter a number:"));
let num9 = Number(prompt("Enter a number:"));
console.log((num5 + num6 + num7 + num8 + num9) / 5);

// 11)შექმენი ცვლადი სადაც მომხმარებელი შემოტანს სტრინგს,შემდეგ დაბეჭდე მისი ტიპი
// შემდეგ შენი დავალებაა ეს ცვლადი განაახლო ახალი მომხმარებლის მიერ შემოყვანილო მნიშვნელობით რომელიც იქნება უკვე რიცხვი,შემდეგ დაბეჭდე მისი ტიპიც
let userInput = prompt("Enter something:");
console.log(typeof userInput);
userInput = Number(prompt("Enter a number:"));
console.log(typeof userInput);

// 12)მომხმარებელს შემოატანინე რაიმე სახელი,შენი დავალებაა რომ გადაიყვანო ეს სახელი დიდ ასოებში და გამოიტანო კონსოლში
let userName = prompt("Enter your name:");
console.log(userName.toUpperCase());

// 13)მომხმარებელს შემოაყვანინე რაიმე სახელი,შემდეგ შემოატანინე რაიმე ასო
// შენი დავალებაა გაიგო იწყება თუ არა მომხმარებლის მიერ შემოტანილის სახელი მის მიერ შემოყვანილ ასოზე
let userName2 = prompt("Enter your name:");
let letter = prompt("Enter a letter:");
console.log(userName2.startsWith(letter));

// 14)მომხმარებელს შემოატანინე რაიმე სახელი ოღონდ დიდი ასოებით,შენი დავალებაა გადააქციო ეს სახელი პატარა ასოებად და გამოიტანო კონსოლში
let userName3 = prompt("Enter your name in uppercase:").toUpperCase();
console.log(userName3.toLowerCase());

// 15)მომხმარებელს შემოატანინე რაიმე სტრინგი რასაც გარშემო ექნება სფეისები,შენი დავალებაა დააკონსოლლოგო ეს სტრინგი სფეისების გარეშე
let userString = prompt("Enter a string with spaces around it:");
console.log(userString.trim());
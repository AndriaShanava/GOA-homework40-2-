// 1)შექმენი ფუნქცია greet(name), რომელიც დაბეჭდავს: Hello, name!
// გამოიძახე ფუნქცია რამდენჯერმე განსხვავებული არგუმენტებით
function greet(name){
    console.log(`Hello, ${name}!`)
}
greet('Andria')
greet('Dato')
greet('Goga')

// 2)შექმენი ფუნქცია showAge(age), რომელიც დაბეჭდავს: You are age years old.
// გამოიძახე ფუნქცია რამდენჯერმე განსხვავებული არგუმენტებით
function showAge(age){
    console.log(`You are ${age} years old.`)
}
showAge(25)
showAge(30)
showAge(18)

// 3)შექმენი ფუნქცია sum(a, b), რომელიც დაბეჭდავს ორი რიცხვის ჯამს.
// გამოიძახე ფუნქცია რამდენჯერმე განსხვავებული არგუმენტებით
function sum(a, b){
    console.log(a + b)
}
sum(5, 10)
sum(20, 30)
sum(7, 3)

// 4)შექმენი ფუნქცია multiply(a, b), რომელიც დაბეჭდავს ორი რიცხვის ნამრავლს.
// გამოიძახე ფუნქცია რამდენჯერმე განსხვავებული არგუმენტებით

function multiply(a, b){
    console.log(a * b)
}
multiply(5, 10)
multiply(20, 30)
multiply(7, 3)

// 5)შექმენი ფუნქცია fullName(firstName, lastName), რომელიც დაბეჭდავს სრულ სახელს ერთ სტრინგად.
// გამოიძახე ფუნქცია რამდენჯერმე განსხვავებული არგუმენტებით
function fullName(firstName, lastName){
    console.log(`${firstName} ${lastName}`)
}
fullName('Andria', 'shanva')
fullName('oto ghambashidze')
fullName('goga', 'kapanadze')

// 6)შექმენი ფუნქცია isAdult(age).
// თუ ასაკი(პარამეტი) 18 ან მეტია, დაბეჭდოს Adult, სხვა შემთხვევაში Minor.(გამოიყენე ternary)
// გამოიძახე ფუნქცია რამდენჯერმე განსხვავებული არგუმენტებით

function isAdult(age){
    console.log(age >= 18 ? 'Adult' : 'Minor')
}
isAdult(25)
isAdult(15)
isAdult(18)

// 7)შექმენი ფუნქცია checkNumber(num).
// თუ რიცხვი(პარამეტრი) დადებითია — დაბეჭდოს Positive, უარყოფითია — Negative, ხოლო 0-ზე — Zero , გამოიყენე ternary
// გამოიძახე ფუნქცია რამდენჯერმე განსხვავებული არგუმენტებით
function checkNumber(num){
    console.log(num > 0 ? 'Positive' : num < 0 ? 'Negative' : 'Zero')
}
checkNumber(10)
checkNumber(-5)
checkNumber(0)

// 8)შექმენი ფუნქცია rectangleInfo(width, height), რომელიც დაბეჭდავს მართკუთხედის ფართობს: width * height.
// გამოიძახე ფუნქცია რამდენჯერმე განსხვავებული არგუმენტებით

function rectangleInfo(width, height){
    console.log(`Rectangle area: ${width * height}`)
}
rectangleInfo(5, 10)
rectangleInfo(7, 3)
rectangleInfo(4, 6)

// 9)შექმენი ფუნქცია greetUser(name, time).
// თუ time არის "morning", დაბეჭდოს Good morning, ${name}!
// თუ time არის "evening" — Good evening, ${name}!
// სხვა შემთხვევაში — Hello, name!
// გამოძახე ფუნქცია რამდენჯერმე სხვადასხვა არგუმენტებით

function greetUser(name, time){
    if(time === 'morning'){
        console.log(`Good morning, ${name}!`)
    } else if(time === 'evening'){
        console.log(`Good evening, ${name}!`)
    } else {
        console.log(`Hello, ${name}!`)
    }
}
greetUser('Andria', 'morning')
greetUser('Dato', 'evening')
greetUser('Goga', 'afternoon')

// 10)შექმენი ფუნქცია checkPassword(password).
// თუ პაროლის სიგრძე 8-ზე ნაკლებია, დაბეჭდოს Password is too short, სხვა შემთხვევაში Password accepted.(ternary)
// გამოძახე ფუნქცია რამდენჯერმე სხვადასხვა არგუმენტებით

function checkPassword(password){
    console.log(password.length < 8 ? 'Password is too short' : 'Password accepted')
}
checkPassword('12345')
checkPassword('mysecretpassword')
checkPassword('pass123')

// 11)შექმენი ფუნქცია checkName(name).
// თუ სახელი იწყება ასო "G"-ზე, დაბეჭდოს Starts with G, სხვა შემთხვევაში Does not start with G. (გამოიყენე startsWith() და (if else)

function checkName(name){
    if(name.startsWith('G')){
        console.log('Starts with G')
    } else {
        console.log('Does not start with G')
    }
}
checkName('Andria')
checkName('Goga')

// 12)შექმენი ფუნქცია lower(word) რომელიც არგუმენტად გადაცემულ სიტყვას გადაიყვანს მთლიანად აფერქეისში
// გამოძახე ფუნქცია რამდენჯერმე სხვადასხვა არგუმენტებით

function lower(word){
    console.log(word.toUpperCase())
}
lower('HELLO')
lower('WORLD')
lower('JavaScript')
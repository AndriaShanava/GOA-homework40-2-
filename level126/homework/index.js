// 1)შექმენი Function Declaration, რომელიც მასივში ამატებს ახალ ელემენტს push()-ის გამოყენებით.
// პარამეტრები:
// array (სადაც ემატება ელემენტი)
// value (რაც ემატება)
// ფუნქცია უნდა გამოიძახო და გადასცე შესაბამისი არგუმენტები 

function addElement(array, value) {
    array.push(value);
    return array;
}

// 2)შექმენი Arrow Function, რომელიც მასივიდან ბოლო ელემენტს შლის pop()-ით და აბრუნებს მიღებულ მასივს.
// გამოიძახე ფუნქცია.
const removeLastElement = (array) => {
    array.pop();
    return array;
}

// 3)შექმენი Function Expression, რომელიც მასივიდან პირველ ელემენტს შლის shift()-ის გამოყენებით.
// გამოიძახე ფუნქცია.
const removeFirstElement = function(array) {
    array.shift();
    return array;
}

// 4)შექმენი Arrow Function, რომელიც მასივის დასაწყისში ამატებს ელემენტს unshift()-ით.
// ფუნქციას გადაეცეს:
// array
// value
// შემდეგ გამოიძახე.
const addFirstElement = (array, value) => {
    array.unshift(value);
    return array;
}

// 5)შექმენი Function Declaration, რომელიც პარამეტრად მიიღებს მასივს და დააბრუნებს მის სიგრძეს (length).
// გამოიძახე ფუნქცია.

function getArrayLength(array) {
    return array.length;
}

// 6)შექმენი Function Expression, რომელიც შეამოწმებს გადაცემული მნიშვნელობა მასივია თუ არა Array.isArray()-ის გამოყენებით.
// გამოიძახე ფუნქცია:
// მასივზე
// სტრინგზე
// რიცხვზე

const isArray = function(value) {
    return Array.isArray(value);
}
isArray([1, 2, 3])
isArray("hello")
isArray(123)

// 7)შექმენი Function Expression.
// ფუნქციამ:
// დაამატოს ახალი ელემენტი push()-ით;
// დაბეჭდოს ახალი მასივი;
// დაბეჭდოს მასივის სიგრძე (length).

const addElementAndLog = function(array, value) {
    array.push(value);
    console.log(array);
    console.log(array.length);
}

// 8)შექმენი Arrow Function.
// ფუნქციამ:
// ჯერ დაამატოს ელემენტი unshift()-ით;
// შემდეგ წაშალოს პირველი ელემენტი shift()-ით;
// დაბეჭდოს საბოლოო მასივი.
const addFirstRemoveFirstAndLog = (array, value) => {
    array.unshift(value);
    array.shift();
    console.log(array);
}

// 9)შექმენი Function Expression, რომელიც:
// იღებს მასივს;
// ამატებს ერთ ელემენტს push()-ით;
// ამატებს ერთ ელემენტს unshift()-ით;
// შლის ბოლო ელემენტს pop()-ით;
// შლის პირველ ელემენტს shift()-ით;
// ბოლოს ბეჭდავს:
// საბოლოო მასივს;
// მის length-ს;
// Array.isArray()-ის შედეგს.
// გამოიძახე ფუნქცია.

const manipulateArray = function(array, pushValue, unshiftValue) {
    array.push(pushValue);
    array.unshift(unshiftValue);
    array.pop();
    array.shift();
    console.log(array);
    console.log(array.length);
    console.log(Array.isArray(array));
}



// 1)შექმენი ფუნქცია addNumber(arr, num), რომელიც მასივის ბოლოში დაამატებს გადაცემულ
// რიცხვს და დააბრუნებს განახლებულ მასივს.
// const numbers = [5, 10, 15];

function addNumber(arr, num){
    arr.push(num)
    return arr
}

// 2. pop()
// შექმენი ფუნქცია removeLast(arr), რომელიც წაშლის ბოლო ელემენტს და დააბრუნებს მასივს.
function removeLast(arr){
    arr.pop()
    return arr
}

// 3. shift()
// შექმენი ფუნქცია removeFirst(arr), რომელიც წაშლის პირველ ელემენტს და დააბრუნებს მასივს.
function removeFirst(arr){
    arr.shift()
    return arr
}

// 4. unshift()
// შექმენი ფუნქცია addFirst(arr, value), რომელიც მასივის დასაწყისში დაამატებს ახალ ელემენტს.
function addFirst(arr, value){
    arr.unshift(value)
    return arr
}

// 5. push() + pop()
// შექმენი ფუნქცია replaceLast(arr, value), რომელიც:
// წაშლის ბოლო ელემენტს.
// მის ნაცვლად დაამატებს ახალ მნიშვნელობას.
// const numbers = [10, 20, 30, 40];

function replaceLast(arr, value){
    arr.pop()
    arr.push(value)
    return arr
}

// 6. shift() + unshift()
// შექმენი ფუნქცია replaceFirst(arr, value), რომელიც:
// წაშლის პირველ ელემენტს.
// მის ნაცვლად ჩასვამს ახალ ელემენტს.
// const animals = ["cat", "dog", "bird"];

function replaceFirst(arr, value){
    arr.shift()
    arr.unshift(value)
    return arr
}

// 7. splice()
// შექმენი ფუნქცია removeMiddle(arr), რომელიც წაშლის შუა ელემენტს.
// const numbers = [10, 20, 30, 40, 50]

function removeMiddle(arr){
    arr.splice(2, 1);
    return arr;
}

// 8)splice()
// შექმენი ფუნქცია insertElement(arr, index, value), რომელიც ჩასვამს value-ს გადაცემულ ინდექსზე.
// const letters = ["A", "B", "D", "E"];
// შედეგი (index = 2, value = "C"):
// ["A", "B", "C", "D", "E"]

function insertElement(arr, index, value){
    arr.splice(index, 0, value);
    return arr;
}

// 9. slice()
// შექმენი ფუნქცია copyPart(arr), რომელიც დააბრუნებს მხოლოდ მეორე, მესამე და მეოთხე ელემენტებს.
// const arr = [1, 2, 3, 4, 5, 6];

function copyPart(arr){
    return arr.slice(1, 4);
}

// 10)შექმენი ფუნქცია mergeArrays(arr1, arr2), რომელიც გააერთიანებს ორ მასივს.
// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];

function mergeArrays(arr1, arr2){
    return arr1.concat(arr2);
}

// 11)შექმენი ფუნქცია makeSentence(arr), რომელიც სიტყვების მასივიდან შექმნის წინადადებას.
// const words = ["JavaScript", "is", "awesome"];
// შედეგი:
// "JavaScript is awesome"

function makeSentence(arr){
    return arr.join(' ');
}

// 12)შექმენი ფუნქცია removeByValue(arr, value), რომელიც:
// იპოვის ელემენტის ინდექსს indexOf()-ით.
// წაშლის მას splice()-ის გამოყენებით.
// const numbers = [5, 10, 15, 20, 25];

function removeByValue(arr, value){
    const index = arr.indexOf(value);
    arr.splice(index, 1);
    return arr;
}

// 13)შექმენი ფუნქცია splitWords(text), რომელიც წინადადებას დაყოფს სიტყვების მასივად.
// const text = "JavaScript is awesome";
// შედეგი:
// ["JavaScript", "is", "awesome"]

function splitWords(text){
    return text.split(' ');
}


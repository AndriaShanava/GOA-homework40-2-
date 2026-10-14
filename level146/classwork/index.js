// 1)მოცემულია:

// let student = {
//   name: "Nika",
//   age: 20,
//   city: "Tbilisi",
//   course: "JavaScript",
//   score: 92
// };
// დავალება:
// გამოიყენე Object.keys() და:
// დაბეჭდე ობიექტის ყველა key.
// დაბეჭდე რამდენი key აქვს ობიექტს.
// თუ key-ების რაოდენობა 4-ზე მეტია, დაბეჭდე:
// "Student has many properties"
// წინააღმდეგ შემთხვევაში:
// "Student has few properties".
 let student = {
    name: "Nika",
    age: 20,
    city: "Tbilisi",
    course: "JavaScript",
    score: 92
 }

 let result = list => {
    let keys = Object.keys(list);
    console.log(keys);
    console.log(keys.length);
    if (keys.length > 4) {
        console.log("Student has many properties");
    } else {
        console.log("Student has few properties");
    }
 }

//2)მოცემულია:
// let product = {
//   name: "Laptop",
//   price: 1500,
//   brand: "Lenovo",
//   inStock: true
// };
// დავალება:
// გამოიყენე Object.values() და:
// დაბეჭდე ობიექტის ყველა value.

let product = {
    name: "Laptop",
    price: 1500,
    brand: "Lenovo",
    inStock: true
};

console.log(Object.values(product))

// 1)შექმენით ობიექტი თქვენს შესახებ  ,იქნება name  , 
// surname , age , adress და ასევე იქნება მეთოდი რომელიც გამოიტანს ინფორმაციას თქვენს შესახებ , 
// გამოიძახეთ მეთოდი რომ ნახოთ შედეგი
let person = {
    name: "Andria",
    surname: "Shanava",
    age: 25,
    address: "Tbilisi",
    information(){
        console.log(person.name);
        console.log(person.surname);
        console.log(person.age);
        console.log(person.addres);
    }
};

person.information();

// 2)შექმენით ობიექტი car სადაც იქნება model , color , year 
// ასევე მეთოდი სახელად carSound რომელიც კონსოლში გამოიტანს  --> 
// "ეს მანქანა რომელსაც ქვია ... გამოსცემს შემდეგ ხმას :wroom wroom wroom" გამოიძახე ეს მეთოდი რომ ნახო შედეგი
let car = {
    model: "BMW",
    color: "Black",
    year: 2020,
    carSound() {
        console.log(`ეს მანქანა რომელსაც ქვია ${car.model} გამოსცემს შემდეგ ხმას : wroom wroom wroom`);
    }
};

car.carSound();
// 1)let user = {
//   name: "Nika",
//   age: 22,
//   city: "Tbilisi",
//   isStudent: true
// };
// დავალება:
// დაბეჭდე name
// დაბეჭდე city
// შეცვალე age 25-ზე
// დაამატე ახალი property job მნიშვნელობით "Developer"
// დაბეჭდე საბოლოოდ მთელი ობიექტი
let user = {
    name: "Nika",
    age: 22,
    city: "Tbilisi",
    isStudent: true
};

console.log(user.name);
console.log(user.city);
user.age = 25;
user.job = "Developer";
console.log(user);

// 2)შექმენი product ობიექტი შემდეგი ინფორმაციით:
// name → "Laptop"
// price → 1500
// brand → "Lenovo"
// inStock → true
// შემდეგ:
// დაბეჭდე პროდუქტის სახელი და ფასი.
// შეცვალე ფასი 1700-ზე.
// დაამატე discount property მნიშვნელობით 10.
// discount property წამოიღე bracket notation-ით.
// დაბეჭდე საბოლოო ობიექტი.
let product = {
    name: "Laptop",
    price: 1500,
    brand: "Lenovo",
    inStock: true
};
console.log(product.name);
console.log(product.price);
product.price = 1700;
product.discount = 10;
console.log(product["discount"]);
console.log(product);

// 3)მოცემულია:
// let student = {
//   name: "Giorgi",
//   age: 18,
//   grade: 85
// };
// შეცვალე:
// age → 19
// grade → 92
// შემდეგ დაამატე:
// status: "active"
// ბოლოს დაბეჭდე:
// Giorgi is 19 years old and has 92 points.

let student = {
    name: "Giorgi",
    age: 18,
    grade: 85
};

student.age = 19;
student.grade = 92;
student.status = "active";
console.log(`${student.name} is ${student.age} years old and has ${student.grade} points.`);

// 4)მოცემულია:
// let car = {
//   brand: "BMW",
//   model: "M5",
//   year: 2023,
//   color: "Black"
// };
// შექმენი ცვლადები:
// let property1 = "brand";
// let property2 = "model";
// let property3 = "color";
// გამოიყენე მხოლოდ bracket notation და დაბეჭდე შესაბამისი მნიშვნელობები.
// მაგალითად:
// BMW
// M5
// Black
// შემდეგ property3-ის საშუალებით შეცვალე მანქანის ფერი "White"-ზე.
let car = {
    brand: "BMW",
    model: "M5",
    year: 2023,
    color: "Black"
};
let property1 = "brand";
let property2 = "model";
let property3 = "color";
console.log(car[property1]);
console.log(car[property2]);
console.log(car[property3]);
car[property3] = "White";
console.log(car[property3]);

// 5)შექმენი:
// let person = {
//   name: "Nika",
//   age: 20,
//   greet: function() {
//     // აქ იმუშავე
//   }
// };
// greet() მეთოდმა უნდა დაბეჭდოს:
// Hello, my name is Nika.
// შემდეგ გამოიძახე მეთოდი.
let person = {
    name: "Nika",
    age: 20,
    greet() {
        console.log(`Hello, my name is ${person.name}.`);
    }
};
person.greet();

// 6)მოცემულია:
// let car = {
//   brand: "Toyota",
//   model: "Camry",
//   year: 2022,
//   showInfo: function() {
//     // აქ იმუშავე
//   }
// };
// showInfo() მეთოდმა უნდა დაბეჭდოს:
// Toyota Camry - 2022

let car = {
    brand: "Toyota",
    model: "Camry",
    year: 2022,
    showInfo() {
        console.log(`${car.brand} ${car.model} - ${car.year}`);
    }
};
car.showInfo();

// 7)let account = {
//   owner: "Gio",
//   balance: 1000,
//   showBalance: function() {
//     // აქ იმუშავე
//   },
//   deposit: function() {
//     // აქ იმუშავე
//   }
// };
// დავალება:
// showBalance()-მა დაბეჭდოს ანგარიშის მფლობელი და ბალანსი.
// deposit()-მა ბალანსს დაუმატოს 500.
// გამოიძახე ორივე მეთოდი და ნახე როგორ შეიცვალა balance.
// საბოლოოდ:
// Owner: Gio
// Balance: 1500

let account = {
    owner: "Gio",
    balance: 1000,
    showBalance() {
        console.log(`Owner: ${account.owner}`);
        console.log(`Balance: ${account.balance}`);
    },
    deposit() {
        account.balance += 500;
    }
};
account.showBalance();
account.deposit();

// 8)შექმენი:
// let movie = {
//   title: "Interstellar",
//   genre: "Sci-Fi",
//   year: 2014,
//   rating: 9,
//   showInfo: function() {
//     // აქ იმუშავე
//   }
// };
// showInfo() მეთოდმა უნდა დაბეჭდოს ფილმის ყველა ძირითადი ინფორმაცია:
// Title: Interstellar
// Genre: Sci-Fi
// Year: 2014
// Rating: 9

let movie = {
    title: "Interstellar",
    genre: "Sci-Fi",
    year: 2014,
    rating: 9,
    showInfo() {
        console.log(`Title: ${movie.title}`);
        console.log(`Genre: ${movie.genre}`);
        console.log(`Year: ${movie.year}`);
        console.log(`Rating: ${movie.rating}`);
    }
};
movie.showInfo();

// 9)მოცემულია:
// let product = {
//   name: "Headphones",
//   price: 200,
//   inStock: true,
//   checkProduct: function() {
//     // აქ იმუშავე
//   }
// };
// checkProduct() მეთოდმა უნდა შეამოწმოს:
// თუ inStock არის true, დაბეჭდოს:
// Headphones is available.
// თუ inStock არის false, დაბეჭდოს:
// Headphones is not available.
// გამოიძახე მეთოდი

let product = {
    name: "Headphones",
    price: 200,
    inStock: true,
    checkProduct() {
        if (product.inStock) {
            console.log(`${product.name} is available.`);
        } else {
            console.log(`${product.name} is not available.`);
        }
    }
};
product.checkProduct();

// 10)let character = {
//   name: "Knight",
//   health: 100,
//   power: 30,
//   attack: function() {
//     // აქ იმუშავე
//   },
//   showInfo: function() {
//     // აქ იმუშავე
//   }
// };
// showInfo() აჩვენებს პერსონაჟის ინფორმაციას.
// attack()-მა უნდა შეამოწმოს health:
// თუ health მეტია 0-ზე → დაბეჭდოს "Knight is alive!"
// წინააღმდეგ შემთხვევაში → "Knight is defeated!"
// შემდეგ ხელით შეცვალე health 0-ზე და კიდევ ერთხელ გამოიძახე attack()

let character = {
    name: "Knight",
    health: 100,
    power: 30,
    attack() {
        if (character.health > 0) {
            console.log(`${character.name} is alive!`);
        } else {
            console.log(`${character.name} is defeated!`);
        }
    },
    showInfo() {
        console.log(`Name: ${character.name}`);
        console.log(`Health: ${character.health}`);
        console.log(`Power: ${character.power}`);
    }
};
character.showInfo();
character.attack();
character.health = 0;
character.attack();

// 11)let student = {
//   name: "Ana",
//   age: 17,
//   score: 85,

//   showInfo: function() {
//     // აქ იმუშავე
//   },
//   checkResult: function() {
//     // აქ იმუშავე
//   }
// };
// showInfo()
// უნდა დაბეჭდოს:
// Student: Ana
// Age: 17
// Score: 85
// checkResult()
// თუ score >= 50:
// Ana passed!
// წინააღმდეგ შემთხვევაში:
// Ana failed!
// შემდეგ:
// შეცვალე score 45-ზე.
// კიდევ ერთხელ გამოიძახე checkResult().
// დაამატე ახალი property school.
// school წამოიღე bracket notation-ით და დაბეჭდე.

let student = {
    name: "Ana",
    age: 17,
    score: 85,
    showInfo() {
        console.log(`Student: ${student.name}`);
        console.log(`Age: ${student.age}`);
        console.log(`Score: ${student.score}`);
    },
    checkResult() {
        if (student.score >= 50) {
            console.log(`${student.name} passed!`);
        } else {
            console.log(`${student.name} failed!`);
        }
    }
};
student.showInfo();
student.checkResult();
student.score = 45;
student.checkResult();
student.school = "High School";
console.log(student["school"]);

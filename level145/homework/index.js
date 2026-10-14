// 1)ექმენი ობიექტი student, რომელსაც ექნება შემდეგი properties:
// name: "Nika"
// age: 20
// course: "JavaScript"
// city: "Tbilisi"
// შემდეგ:
// name გამოიტანე dot notation-ით.
// age გამოიტანე bracket notation-ით.
// დაამატე ახალი property email მნიშვნელობით "nika@gmail.com".
// დაამატე ახალი property grade მნიშვნელობით 95.
// city შეცვალე "Batumi"-თ.
// წაშალე age.
// ბოლოს console.log()-ით გამოიტანე მთელი ობიექტი.
let student = {
    name: "Nika",
    age: 20,
    course: "JavaScript",
    city: "Tbilisi"
}
console.log(student.name)
console.log(student["age"])
student.email = "nika@gmail.com";
student.grade = 95;
student.city = "Batumi";
delete student.age;
console.log(student);


// 2)შექმენი ობიექტი product:
// {
//     name: "Laptop",
//     price: 2500,
//     brand: "Lenovo",
//     category: "Electronics"
// }
// შეასრულე შემდეგი:
// გამოიტანე name dot notation-ით.
// გამოიტანე price bracket notation-ით.
// შეცვალე price და გახადე 2200.
// შეცვალე brand და გახადე "Asus".
// დაამატე stock property მნიშვნელობით 15.
// დაამატე "product color" property მნიშვნელობით "Black".
// გამოიტანე "product color" მხოლოდ bracket notation-ით.
// წაშალე category.
// ბოლოს გამოიტანე მთელი product ობიექტი.

let product = {
    name: "Laptop",
    price: 2500,
    brand: "Lenovo",
    category: "Electronics"
}
console.log(product.name)
console.log(product["price"])
product.price = 2200;
product.brand = "Asus";
product.stock = 15;
product["product color"] = "Black";
console.log(product["product color"])
delete product.category;
console.log(product)

// 3)შექმენი ობიექტი car შემდეგი მონაცემებით:
// {
//     brand: "BMW",
//     model: "X5",
//     year: 2020,
//     price: 45000
// }
// შემდეგ:
// გამოიტანე brand dot notation-ით.
// გამოიტანე model bracket notation-ით.
// year შეცვალე 2024-ით.
// price შეცვალე 50000-ით.
// დაამატე color property მნიშვნელობით "Black".
// დაამატე "engine type" property მნიშვნელობით "Diesel".
// გამოიტანე "engine type" bracket notation-ით.
// წაშალე price.
// დაამატე ახალი property isNew მნიშვნელობით true.
// საბოლოოდ გამოიტანე მთელი ობიექტი.

let car = {
    brand: "BMW",
    model: "X5",
    year: 2020,
    price: 45000
}
console.log(car.brand)
console.log(car["model"])
car.year = 2024
car.price = 50000
car.color = "Black"
car["engine type"] = "Diesel"
console.log(car["engine type"])
delete car.price
car.isNew = true
console.log(car)

// 4)შექმენი ობიექტი character:
// {
//     name: "Knight",
//     level: 10,
//     health: 100,
//     weapon: "Sword"
// }
// შეასრულე:
// გამოიტანე პერსონაჟის name.
// გამოიტანე health bracket notation-ით.
// პერსონაჟის level გაზარდე 1-ით.
// health შეცვალე 80-ით.
// დაამატე armor property მნიშვნელობით "Steel Armor".
// დაამატე "favorite weapon" property მნიშვნელობით "Sword".
// გამოიტანე "favorite weapon" bracket notation-ით.
// წაშალე weapon.
// დაამატე ახალი weapon მნიშვნელობით "Axe".

let character = {
    name: "Knight",
    level: 10,
    health: 100,
    weapon: "Sword"
}
console.log(character.name)
console.log(character["health"])
character.level += 1
character.health = 80
character.armor = "Steel Armor"
character["favorite weapon"] = "Sword"
console.log(character["favorite weapon"])
delete character.weapon
character.weapon = "Axe"
console.log(character)


// 5)შექმენი ტელეფონის ობიექტი:
// {
//     brand: "Apple",
//     model: "iPhone 15",
//     price: 3000,
//     storage: "128GB"
// }
// შემდეგ ტელეფონი "განაახლე":
// გამოიტანე brand dot notation-ით.
// გამოიტანე model bracket notation-ით.
// ფასი შეცვალე 2700-ით.
// storage შეცვალე "256GB"-ით.
// დაამატე color → "Black".
// დაამატე "screen size" → 6.1.
// გამოიტანე "screen size" bracket notation-ით.
// წაშალე price.
// დაამატე ახალი price → 2800.
// ბოლოს გამოიტანე მთელი ობიექტი.

let phone = {
    brand: "Apple",
    model: "iPhone 15",
    price: 3000,
    storage: "128GB"
}
console.log(phone.brand)
console.log(phone["model"])
phone.price = 2700
phone.storage = "256GB"
phone.color = "Black"
phone["screen size"] = 6.1
console.log(phone["screen size"])
delete phone.price
phone.price = 2800
console.log(phone)

// 6)let item = {
//     name: "Magic Sword",
//     damage: 50,
//     price: 300,
//     rarity: "Rare"
// }
// თამაშში ნივთის მონაცემები უნდა განაახლო:
// damage გახადე 75
// price გახადე 500
// დაამატე level → 10
// დაამატე "special ability" → "Fire Attack"
// გამოიტანე "special ability" bracket notation-ით
// წაშალე rarity
// დაამატე ახალი rarity → "Epic"
// დაამატე isAvailable → true
// ბოლოს გამოიტანე მთელი ობიექტი.


let item = {
    name: "Magic Sword",
    damage: 50,
    price: 300,
    rarity: "Rare"
}
item.damage = 75
item.price = 500
item.level = 10
item["special ability"] = "Fire Attack"
console.log(item["special ability"])
delete item.rarity
item.rarity = "Epic"
item.isAvailable = true
console.log(item)


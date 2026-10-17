// 1)შექმენით სია სადაც იქნება მხოლოდ რიცხვები , 
// თქვენი დავალებაა კონსოლში გამოიტანოთ მხოლოდ 
// ისეთი რიცხვები რომელიც არის ლუწი და ასევე მეტი 10 ზე --> for of

let numbers = [0, 1, 2, 3, 4, 5, 6, 7]
for(let i of numbers){
    if(i % 2 === 0 && i > 10){
        console.log(i);
    }
}

// 2)შექმენით მასივი სტრინგებით,გამოიტანე მხოლოდ ის ელემენტბეი რომლის სიგრძე მეტია 5 ზე --> for of
let names = ["Goga", "Nika", "Tamar", "Lasha", "Sandro", "Keti"];
for(let i of names){
    if(i.length > 5){
        console.log(i);
    }
}


// 3)const products = [
//     { name: "Laptop", price: 1500, quantity: 5, rating: 4.8 },
//     { name: "Phone", price: 900, quantity: 10, rating: 4.5 },
//     { name: "Headphones", price: 250, quantity: 15, rating: 4.2 },
//     { name: "Keyboard", price: 120, quantity: 8, rating: 4.6 },
//     { name: "Monitor", price: 700, quantity: 3, rating: 4.9 }
// ]
// გადაუარე ამ მასივს forEach იტერატორით გა გამოიტანეთ მხოლოდ ისეთი ფასი რომელიც მეტია 800 ზე
// გადაუარე კიდევ მეორედ ამ მასივს და გამოიტანე მხოლოდ პეოდუქტის სახელები

const product = [
    { name: "Laptop", price: 1500, quantity: 5, rating: 4.8 },
    { name: "Phone", price: 900, quantity: 10, rating: 4.5 },
    { name: "Headphones", price: 250, quantity: 15, rating: 4.2 },
    { name: "Keyboard", price: 120, quantity: 8, rating: 4.6 },
    { name: "Monitor", price: 700, quantity: 3, rating: 4.9 }
]

product.forEach((i) => {
    if(i.price > 800){
        console.log(i.price);
    }
})

product.forEach((i) => {
    console.log(i.name);
})
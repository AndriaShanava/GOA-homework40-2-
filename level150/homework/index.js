// 1)
let products = [
    { name: "Laptop", price: 2000 },
    { name: "Mouse", price: 80 },
    { name: "Phone", price: 1200 },
    { name: "Keyboard", price: 150 },
    { name: "Monitor", price: 700 }
];
// მოთხოვნები:
// 1. forEach()-ით გამოიტანე თითოეული პროდუქტის სახელი და ფასი.
// 2. filter()-ით მიიღე პროდუქტები, რომელთა ფასი 500-ზე მეტია.
// 3. map()-ით შექმენი ახალი მასივი, რომელიც მხოლოდ პროდუქტების სახელებს შეიცავს.
// 4. find()-ით იპოვე პირველი პროდუქტი, რომლის ფასიც 100-ზე ნაკლებია.

products.forEach(product => {
    console.log(product.name, product.price);
});
let filtered = products.filter(product => product.price > 500);
let product1 = products.map(product => product.name);
let product2 = products.find(product => product.price < 100);

// 2)
let users = [
    { name: "Nika", age: 17 },
    { name: "Ana", age: 22 },
    { name: "Gio", age: 15 },
    { name: "Mariam", age: 30 },
    { name: "Luka", age: 19 }
];
// მოთხოვნები:
// 1. filter()-ით მიიღე 18 წლის ან უფროსი მომხმარებლები.
// 2. map()-ით შექმენი ახალი მასივი, რომელშიც თითოეული მომხმარებლის ასაკი 1-ით იქნება გაზრდილი.
// 3. some()-ით შეამოწმე, არის თუ არა რომელიმე მომხმარებელი 30 წლის ან უფროსი.
// 4. every()-ით შეამოწმე, ყველა მომხმარებელი 14 წელზე უფროსია თუ არა.
let names = users.filter(user => user.age >= 18);
let ages = users.map(user => user.age + 1);
let hasAdult = users.some(user => user.age >= 30);
let allAdult = users.every(user => user.age > 14);

// 3)
let students = [
    { name: "Goga", score: 85 },
    { name: "Nika", score: 62 },
    { name: "Ana", score: 95 },
    { name: "Luka", score: 48 },
    { name: "Mariam", score: 76 }
];
// მოთხოვნები:
// 1. filter()-ით მიიღე მოსწავლეები, რომელთა ქულაც 70 ან მეტია.
// 2. find()-ით იპოვე პირველი მოსწავლე, რომელსაც 90 ან მეტი ქულა აქვს.
// 3. map()-ით შექმენი მასივი, სადაც თითოეული ელემენტი იქნება ამ ფორმატის სტრიქონი: "Goga - 85 points".
// 4. reduce()-ით გამოთვალე ყველა ქულის ჯამი.
// საშუალო სირთულის დავალებები

let filtered = students.filter(student => student.score >= 70);
let found = students.find(student => student.score >= 90);
let mapped = students.map(student => `${student.name} - ${student.score} points`);
let totalScore = students.reduce((acc, student) => acc + student.score);

// 5)4)
let products = [
    { name: "Laptop", price: 2500, stock: 3 },
    { name: "Phone", price: 1000, stock: 8 },
    { name: "Mouse", price: 50, stock: 20 },
    { name: "Monitor", price: 800, stock: 0 },
    { name: "Tablet", price: 600, stock: 5 }
];
// მოთხოვნები:
// 1. filter()-ით მიიღე პროდუქტები, რომლებიც მარაგშია.
// 2. map()-ით შექმენი ახალი მასივი, სადაც თითოეული ელემენტი პროდუქტის სრული ღირებულება იქნება (price * stock).
// 3. reduce()-ით გამოთვალე ყველა პროდუქტის მარაგის საერთო ღირებულება.
// 4. find()-ით იპოვე პირველი პროდუქტი, რომლის მარაგიც 10-ზე მეტია.
// 5. some()-ით შეამოწმე, არის თუ არა პროდუქტი, რომლის მარაგიც 0-ის ტოლია.
let filtered = products.filter(product => product.stock > 0);
let mapped = products.map(product => product.price * product.stock);
let totalValue = products.reduce((acc, product) => acc + (product.price * product.stock));
let found = products.find(product => product.stock > 10);
let hasOutOfStock = products.some(product => product.stock === 0);

// 6)
let employees = [
    { name: "Nika", salary: 1800, department: "IT" },
    { name: "Ana", salary: 2500, department: "HR" },
    { name: "Gio", salary: 3200, department: "IT" },
    { name: "Mariam", salary: 2100, department: "Design" },
    { name: "Luka", salary: 2800, department: "IT" }
];
// მოთხოვნები:
// 1. filter()-ით მიიღე IT განყოფილების თანამშრომლები.
// 2. reduce()-ით გამოთვალე ყველა თანამშრომლის ხელფასების ჯამი.
// 3. map()-ით შექმენი ახალი მასივი, რომელშიც თითოეული თანამშრომლის ხელფასი 200 ლარით მეტი იქნება. თავდაპირველი ობიექტები არ შეცვალო.
// 4. find()-ით იპოვე პირველი თანამშრომელი, რომლის ხელფასიც 3000-ზე მეტია.
let filtered = employees.filter(employee => employee.department === "IT");
let totalSalary = employees.reduce((acc, employee) => acc + employee.salary);
let increasedSalaries = employees.map(employee => employee.salary + 200);
let found = employees.find(employee => employee.salary > 3000);

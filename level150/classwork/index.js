// 2)
let employee = {
    name: "Giorgi",
    age: 28,
    salary: 2500,
    experience: 5,
    department: "IT",
    isActive: true,
    bonus: 500
};
// მოთხოვნები:
// 1. for...in-ის გამოყენებით გამოიტანე ყველა თვისების სახელი და მნიშვნელობა.
// 2. იპოვე ყველა რიცხვითი მნიშვნელობის ჯამი.
// 3. თუ age-ის მნიშვნელობა 30-ზე ნაკლებია, გაზარდე 1-ით.
// 4. თუ salary 2000-ზე მეტია, დაუმატე 300.
// 5. თუ isActive-ის მნიშვნელობა true-ა, გამოიტანე "Employee is active!".
// 6. ბოლოს გამოიტანე განახლებული ობიექტი.

let total = 0
for(let i in employee){
    console.log(i, employee[i])
    if(typeof employee[i] === 'number'){
        total += employee
    }
}

employee.age < 30 ? employee.age += 1 : null
employee.salary > 2000 ? employee.salary += 300 : null
console.log(employee.isActive === true ? 'Employee is active!' : null)
console.log(employee)



// 1)
// let students = [
//     { name: "Nika", age: 17, score: 85 },
//     { name: "Ana", age: 19, score: 95 },
//     { name: "Gio", age: 16, score: 72 },
//     { name: "Mariam", age: 20, score: 88 },
//     { name: "Luka", age: 18, score: 60 }
// ];
// მოთხოვნები:
// 1. გამოიყენე ციკლი და გამოიტანე თითოეული მოსწავლის სახელი, ასაკი და ქულა.
// 2. გამოიტანე მხოლოდ იმ მოსწავლეების ინფორმაცია, რომელთა ქულაც 80-ზე მეტია.
// 3. დაითვალე, რამდენი მოსწავლეა 18 წლის ან უფროსი.
// 4. გამოთვალე ყველა მოსწავლის ქულების ჯამი.
// 5. იპოვე ყველაზე მაღალი ქულის მქონე მოსწავლე და გამოიტანე მისი სახელი და ქულა.
// let students1 = 0
// let totalScore = 0
// let bestScore = students[0]

// for(let i of students){
//     console.log(i)
//     if(i.score > 80){
//         console.log(i)
//     }
//     if(i.age >= 18){
//         students1 ++
//     }
//     totalScore += i.score
//     if(i.score > bestScore.score){
//         bestScore = i.score
//     }
// }

// console.log(bestScore)



let students = [
    { name: "Nika", age: 17, score: 85 },
    { name: "Ana", age: 19, score: 95 },
    { name: "Gio", age: 16, score: 65 },
    { name: "Mariam", age: 20, score: 90 },
    { name: "Luka", age: 18, score: 72 }
];
// მოთხოვნები:
// 1. filter()-ის გამოყენებით მიიღე 80-ზე მეტი ქულის მქონე მოსწავლეები.
// 2. map()-ით შექმენი ახალი მასივი, რომელიც მხოლოდ მოსწავლეების სახელებს შეიცავს.
// 3. find()-ით იპოვე პირველი მოსწავლე, რომლის ასაკიც 18 ან მეტია.
// 4. some()-ით შეამოწმე, არსებობს თუ არა მოსწავლე, რომელსაც 60-ზე ნაკლები ქულა აქვს.
// 5. every()-ით შეამოწმე, ყველა მოსწავლე 15 წელზე უფროსია თუ არა.

let filtered = students.filter(student => student.score > 80)
console.log(filtered)

let maped = students.map(student => student.name)
console.log(maped)

let finded = students.find(student => student.age > 18)
console.log(finded)

let some = students.some(student => student.score < 60)
console.log(some)

let every = students.every(student => student.age > 15)
console.log(every)
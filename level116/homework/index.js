// 1)prompt()-ით მიიღე ასაკი.
// თუ 18 ან მეტია, დაბეჭდე "შეგიძლია ხმის მიცემა", წინააღმდეგ შემთხვევაში "ჯერ ვერა".
let age = prompt("შეიყვანეთ თქვენი ასაკი")
age >= 18 ? console.log("შეგიძლია ხმის მიცემა") : console.log("ჯერ ვერა")

// 2)მომხმარებელს შეაყვანინე რიცხვი.
// Ternary-ით განსაზღვრე ლუწია თუ კენტი.
let number = prompt("შეიყვანეთ რიცხვი")
number % 2 === 0 ? console.log("ლუწია") : console.log("კენტია")

// 3)მომხმარებელს შეაყვანინე პაროლი.
// თუ მისი .length არის 8 ან მეტი, გამოიტანე "ძლიერი პაროლი", სხვა შემთხვევაში "სუსტი პაროლი".
let password = prompt("შეიყვანეთ პაროლი")
password.length >= 8 ? console.log("ძლიერი პაროლი") : console.log("სუსტი პაროლი")

// 4)მომხმარებელმა შეიძლება შეიყვანოს:
// "    admin    "
// trim() გამოიყენე და ternary-ით შეამოწმე, არის თუ არა "admin".
let value = prompt("შეიყვანეთ ტექსტი")
value.trim() === "admin" ? console.log("თქვენი ტექსტი არის admin") : console.log("თქვენი ტექსტი არ არის admin")

// 5)რიცხვის მიხედვით გამოიტანე:
// "დადებითი"
// "უარყოფითი"
// "ნულია"
// გამოიყენე მხოლოდ ternary.
let num = prompt("შეიყვანეთ რიცხვი")
num > 0 ? console.log("დადებითი") : num < 0 ? console.log("უარყოფითი") : console.log("ნულია")

// 6)ორი სახელი შეაყვანინე.
// თუ პირველის .length მეტია, გამოიტანე პირველი, წინააღმდეგ შემთხვევაში მეორე.
let name1 = prompt("შეიყვანეთ პირველი სახელი")
let name2 = prompt("შეიყვანეთ მეორე სახელი")
name1.length > name2.length ? console.log(name1) : console.log(name2)

// 7)შეიყვანე ორი რიცხვი prompt()-ით.
// თუ პირველი მეტია მეორეზე, დაბეჭდე "პირველი დიდია", სხვა შემთხვევაში "მეორე ტოლია ან დიდია".
let num1 = prompt("შეიყვანეთ პირველი რიცხვი")
let num2 = prompt("შეიყვანეთ მეორე რიცხვი")
num1 > num2 ? console.log("პირველი დიდია") : console.log("მეორე ტოლია ან დიდია")

// 8)შექმენი ცვლადი:
// let data = "25";
// Ternary-ით შეამოწმე:
// თუ typeof data === "string" გამოიტანე "სტრინგია", სხვა შემთხვევაში "სტრინგი არაა".
let data = "25"
typeof data === "string" ? console.log("სტრინგია") : console.log("სტრინგი არაა")

// 9)მომხმარებლის როლი
// let role = prompt("შეიყვანე როლი").trim().toLowerCase();
// თუ role არის "admin" → "სრული წვდომა"
// თუ "moderator" → "შეზღუდული წვდომა"
// დანარჩენ შემთხვევაში → "მომხმარებელი"
// (გამოიყენე nested ternary.)
let role = prompt("შეიყვანე როლი").trim().toLowerCase()
role === "admin" ? console.log("სრული წვდომა") : role === "moderator" ? console.log("შეზღუდული წვდომა") : console.log("მომხმარებელი")

// 10)მომხმარებელი წერს ქულას (0-100).
// გამოიტანე:
// 90+ → "A"
// 80+ → "B"
// 70+ → "C"
// 60+ → "D"
// დანარჩენი → "F"
// მხოლოდ ternary-ებით.

let score = prompt("შეიყვანეთ ქულა")
score >= 90 ? console.log("A") : score >= 80 ? console.log("B") : score >= 70 ? console.log("C") : score >= 60 ? console.log("D") : console.log("F")

// 10)მომხმარებელი წერს თვის ნომერს (1-12).
// switch-ით განსაზღვრე სეზონი:
// 12, 1, 2 → ზამთარი
// 3, 4, 5 → გაზაფხული
// 6, 7, 8 → ზაფხული
// 9, 10, 11 → შემოდგომა
let month = prompt("შეიყვანეთ თვის ნომერი")
switch(month){
    case "12":  
    case "1":
    case "2":
        console.log("ზამთარი")
        break
    case "3":   
    case "4":
    case "5":
        console.log("გაზაფხული")
        break
    case "6":
    case "7":
    case "8":   
        console.log("ზაფხული")
        break
    case "9":
    case "10":
    case "11":
        console.log("შემოდგომა")
        break   
    default:
        console.log("არასწორი თვის ნომერი")
        break
}

// 11)მომხმარებელი წერს ფერს:
// "red"
// "yellow"
// "green"
// switch-ით გამოიტანე:
// red → "გაჩერდი"
// yellow → "მოემზადე"
// green → "იარე"
let color = prompt("შეიყვანეთ ფერი")
switch(color){
    case "red":
        console.log("გაჩერდი")
        break
    case "yellow":
        console.log("მოემზადე")
        break
    case "green":
        console.log("იარე")
        break
    default:
        console.log("არასწორი ფერი")
        break
}

// 12)შეიყვანე ცხოველის სახელი:
// dog
// cat
// cow
// sheep
// switch-ით გამოიტანე შესაბამისი ხმა.
let animal = prompt("შეიყვანეთ ცხოველის სახელი")
switch(animal){
    case "dog":
        console.log("woof")
        break
    case "cat":
        console.log("meow")
        break
    case "cow":
        console.log("moo")
        break
    case "sheep":
        console.log("baa")
        break
}

// 13)მომხმარებელი წერს სიმბოლოს:
// A
// B
// C
// D
// F
// switch-ით გამოიტანე შესაბამისი ტექსტი:
// A → შესანიშნავი
// B → ძალიან კარგი
// C → კარგი
// D → დამაკმაყოფილებელი
// F → ჩაჭრილი

let grade = prompt("შეიყვანეთ სიმბოლო")
switch(grade){
    case "A":
        console.log("შესანიშნავი")
        break
    case "B":
        console.log("ძალიან კარგი")
        break
    case "C":
        console.log("კარგი")
        break
    case "D":
        console.log("დამაკმაყოფილებელი")
        break
    case "F":
        console.log("ჩაჭრილი")
        break
    default:
        console.log("არასწორი სიმბოლო")
        break
}

// 14)შეიყვანე ბრაუზერის სახელი:
// chrome
// firefox
// edge
// safari
// გამოიტანე მცირე აღწერა თითოეულზე.

let browser = prompt("შეიყვანეთ ბრაუზერის სახელი")
switch(browser){
    case "chrome":
        console.log("Google-ის ბრაუზერი, სწრაფი და პოპულარული.")
        break
    case "firefox":
        console.log("Mozilla-ის ბრაუზერი, უსაფრთხო და მოწყვეტილი.")
        break
    case "edge":
        console.log("Microsoft-ის ბრაუზერი, სწრაფი და პოპულარული.")
        break
    case "safari":
        console.log("Apple-ის ბრაუზერი, სწრაფი და პოპულარული.")
        break
    default:
        console.log("არასწორი ბრაუზერი")
        break
}

// 15)შეიყვანე:
// admin
// moderator
// user
// guest
// გამოიტანე მათი უფლებები.
let userRole = prompt("შეიყვანეთ როლი")
switch(userRole){
    case "admin":
        console.log("სრული წვდომა")
        break
    case "moderator":
        console.log("შეზღუდული წვდომა")
        break
    case "user":
        console.log("მომხმარებელი")
        break
    case "guest":
        console.log("სტუმარი")
        break
    default:
        console.log("არასწორი როლი")
        break
}



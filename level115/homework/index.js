// 1)მომხმარებელს შემოატანინე მნიშვნელობა prompt()-ით.
// თუ მნიშვნელობა არის truthy, დაბეჭდე "მნიშვნელობა არსებობს",
// ხოლო თუ falsy არის → "მნიშვნელობა ცარიელია".
let value = prompt("შეიყვანეთ მნიშვნელობა:");
if (value) {
    console.log("მნიშვნელობა არსებობს");
}
else {
    console.log("მნიშვნელობა ცარიელია");
}

// 2)შექმენი ცვლადი nickname.
// თუ მომხმარებელმა არაფერი შეიყვანა, გამოიყენე "Guest" მნიშვნელობა || ოპერატორით.
// ბოლოში დაბეჭდე nickname.
let nickname = prompt("შეიყვანეთ თქვენი მეტსახელი:");
nickname = nickname || "Guest";
console.log(nickname);

// 3)მომხმარებელს შემოატანინე ტექსტი.
// თუ ტექსტი არსებობს და .trim() შემდეგ სიგრძე 5-ზე მეტია → "გრძელი ტექსტია"
// სხვა შემთხვევაში → "მოკლე ტექსტია".
let text = prompt("შეიყვანეთ ტექსტი:");
if (text && text.trim().length > 5) {
    console.log("გრძელი ტექსტია");
}
else{
    console.log("მოკლე ტექსტია");
}

// 4)მომხმარებელს შემოატანინე ასაკი.
// თუ ასაკი truthy-ა და 18-ზე მეტია → "სრულწლოვანი"
// თუ ასაკი falsy-ა → "ასაკი არ არის შეყვანილი".
let age = Number(prompt("შეიყვანეთ თქვენი ასაკი:"));
if (age && age > 18) {
    console.log("სრულწლოვანი");
}
else {
    console.log("ასაკი არ არის შეყვანილი");
}

// 5)ომხმარებელს შემოატანინე ორი მნიშვნელობა.
// თუ ორივე truthy-ა → "ორივე სწორია"
// თუ ერთ-ერთი falsy-ა → "რომელიღაც ცარიელია".
let value1 = prompt("შეიყვანეთ პირველი მნიშვნელობა:");
let value2 = prompt("შეიყვანეთ მეორე მნიშვნელობა:");
if (value1 && value2) {
    console.log("ორივე სწორია");
}
else {
    console.log("რომელიღაც ცარიელია");
}

// 6) დაბეჭდე result და ახსენი რატომ მიიღო ეს მნიშვნელობა.
let isNum = 0;
let result = isNum || "other nym";

console.log(result);
// result მიიღებს "other nym" მნიშვნელობას, რადგან isNum არის falsy, ამიტომ || ოპერატორი გადადის  "other nym" მნიშვნელობაზე.

// 7)მომხმარებელს შემოატანინე ტექსტი.
// თუ:
// typeof არის "string"
// და ტექსტი არ არის ცარიელი
// და length 3-ის ჯერადია
// დაბეჭდე "Special string"
// სხვა შემთხვევაში → "Normal string"
let text = prompt("შეიყვანეთ ტექსტი:");
if (typeof text === "string" && text.trim() !== "" && text.length % 3 === 0) {
    console.log("Special string");
}
else {
    console.log("Normal string");
}

// 8)მომხმარებელს შემოატანინე ორი username.
// თუ:
// ორივე იწყება "go"-თი
// და ერთნაირი არ არის(!==)
// და ორივეს length მინიმუმ 6 აქვს
// დაბეჭდე "Matching users"
// სხვა შემთხვევაში → "Users failed"
let username1 = prompt("შეიყვანეთ პირველი username:");
let username2 = prompt("შეიყვანეთ მეორე username:");
if (username1.startsWith("go") && username2.startsWith("go") && username1 !== username2 && username1.length >= 6 && username2.length >= 6) {
    console.log("Matching users");
}
else {
    console.log("Users failed");
}

// 9)მომხმარებელს შემოატანინე 2 პაროლი.
// თუ:
// ორივე პაროლი ერთმანეთს ემთხვევა
// და პირველი პაროლის length მეტია 8-ზე
// და პაროლი uppercase-ში არ უდრის ორიგინალს
// დაბეჭდე "Passwords match"
// სხვა შემთხვევაში → "Passwords do not match"
let password1 = prompt("შეიყვანეთ პირველი პაროლი:");
let password2 = prompt("შეიყვანეთ მეორე პაროლი:");
if (password1 === password2 && password1.length > 8 && password1.toUpperCase() !== password1) {
    console.log("Passwords match");
}
else {
    console.log("Passwords do not match");
}

// 10)მომხმარებელს შემოატანინე ტექსტი.
// თუ:
// ტექსტი იწყება "java"-თი 
// ან length მეტია 20-ზე
// დაბეჭდე "Programming text"
// თუ length ნაკლებია 5-ზე → "Too short"
// სხვა შემთხვევაში → "Unknown text"
let text = prompt("შეიყვანეთ ტექსტი:");
if (text.startsWith("java") || text.length > 20) {
    console.log("Programming text");
}
else if(text.length < 5){
    console.log("Too short");
}
else {
    console.log("Unknown text");
}

// 11)მომხმარებელს შემოატანინე username და role.
// თუ:
// username იწყება "user"-ით
// და role lowercase-ში უდრის "admin"
// დაბეჭდე "Fake admin"
// თუ:
// username იწყება "admin"-ით
// და role lowercase-ში უდრის "admin"
// დაბეჭდე "Real admin"
// სხვა შემთხვევაში → "Normal user"
let username = prompt("შეიყვანეთ username:");
let role = prompt("შეიყვანეთ role:");
if (username.startsWith("user") && role.toLowerCase() === "admin") {
    console.log("Fake admin");
}
else if (username.startsWith("admin") && role.toLowerCase() === "admin") {
    console.log("Real admin");
}
else {
    console.log("Normal user");
}
                                                                   
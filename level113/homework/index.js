// 1)მომხმარებელს შემოატანინე პაროლი prompt()-ით.
// თუ:
// პაროლი trim() შემდეგ იწყება "GOA"-თი
// და მისი სიგრძე (length) მეტია 10-ზე
// და მთლიანად uppercase არ არის
// დაბეჭდე: "Strong password"
// სხვა შემთხვევაში: "Weak password"

let password = prompt("შეიყვანეთ პაროლი:").trim();
if (password.startsWith("GOA") && password.length > 10 && password !== password.toUpperCase()) {
    console.log("Strong password");
}
else {
    console.log("Weak password");
}

// 2)მომხმარებელს შემოატანინე ასაკი და სახელი.
// თუ:
// ასაკი მეტია 18-ზე
// და სახელი იწყება "g"-ზე
// თუ ასაკი 18-ზე ნაკლებია → "Too young"
// სხვა შემთხვევაში → "Wrong username"
let age = Number(prompt("შეიყვანეთ თქვენი ასაკი:"));
let name = prompt("შეიყვანეთ თქვენი სახელი:"); 
if (age > 18 && name.startsWith("g")) {
    console.log("Welcome!");
}
else if (age < 18) {
    console.log("Too young");
}
else {
    console.log("Wrong username");
}

// 3)მომხმარებელს შემოატანინე ტექსტი.
// შეამოწმე:
// არის თუ არა ტიპი (typeof) string და
// აქვს თუ არა მინიმუმ 5 სიმბოლო
// და იწყება თუ არა "hello"-თი 

// თუ ყველა პირობა შესრულდა → "Valid text"

// სხვა შემთხვევაში → "Invalid text"

let text = prompt("შეიყვანეთ ტექსტი:");
if (typeof text === "string" && text.length >= 5 && text.startsWith("hello")) {
    console.log("Valid text");
}
else {
    console.log("Invalid text");
}

// 4)მომხმარებელს შემოატანინე ორი სიტყვა.
// თუ:
// ორივე სიტყვის სიგრძეების ჯამი მეტია 12-ზე
// და პირველი სიტყვა uppercase-ში არ უდრის მეორეს uppercase-ში
// დაბეჭდე "Different long words"
// სხვა შემთხვევაში → "Failed"

let word1 = prompt("შეიყვანეთ პირველი სიტყვა:");
let word2 = prompt("შეიყვანეთ მეორე სიტყვა:");
if ((word1.length + word2.length) > 12 && word1.toUpperCase() !== word2.toUpperCase()) {
    console.log("Different long words");
}
else {
    console.log("Failed");
}

// 5)მომხმარებელს შემოატანინე ქვეყანა.
// თუ:
// ტექსტი uppercase-ში უდრის "GEORGIA"
// ან lowercase-ში უდრის "sakartvelo"
// დაბეჭდე "Correct country"
// სხვა შემთხვევაში → "Unknown country"

let country = prompt("შეიყვანეთ ქვეყანა:");
if (country.toUpperCase() === "GEORGIA" || country.toLowerCase() === "sakartvelo") {
    console.log("Correct country");
}
else {
    console.log("Unknown country");
} 

// 6)
// მომხმარებელს შემოატანინე password.
// თუ:
// length არის 8-დან 15-მდე
// და იწყება uppercase ასოთი
// დაბეჭდე "Good password"
// სხვა შემთხვევაში → "Bad password"

let password = prompt("შეიყვანეთ პაროლი:");
if (password.length >= 8 && password.length <= 15 && password[0] === password[0].toUpperCase()) {
    console.log("Good password");
}
else {
    console.log("Bad password");
} 

// 7)მომხმარებელს შემოატანინე ტექსტი.
// თუ:
// ტექსტის length ლუწია
// და lowercase ტექსტი არ იწყება "x"-ზე
// და uppercase ტექსტი არ უდრის ორიგინალს
// დაბეჭდე "Accepted"
// სხვა შემთხვევაში → "Rejected"

let text = prompt("შეიყვანეთ ტექსტი:");
if (text.length % 2 === 0 && !text.toLowerCase().startsWith("x") && text.toUpperCase() !== text) {
    console.log("Accepted");
}
else {
    console.log("Rejected");
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
else if (text.length < 5) {
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
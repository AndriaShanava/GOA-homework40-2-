let text = prompt("შეიყვანეთ რაიმე სტრინგი:");
if (text.startsWith("g") && text.length >= 6) {
    console.log("იწყება გ ასოზე და არის გრძელი სიტყვა");
}
else if (text.startsWith("a") && text.length < 6) {
    console.log("იწყება ა ასოზე და არის მოკლე სიტყვა");
}
else {
    console.log("ამოუცნობი სიტყვა");
}


let number = Number(prompt("შეიყვანეთ რაიმე რიცხვი:"))
if (number > 50 || number % 2 === 0) {
    console.log("more than 50 or even")
}
else if (number < 50 && number % 2 !== 0) {
    console.log("less than 50 and odd")
}
else {
    console.log("other number")
}
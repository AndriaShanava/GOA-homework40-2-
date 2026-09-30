// 1)შექმენით ობიექტი სახელად Person , შეინახეთ 5 property თქვენს შესახებ მაგალითად
// -->name ,age ... ამ 5 დან ორი უნდა იყოს რთული key მაგალითად living adress ან რაიმე თქვენ მოიფიქრეთ სახელები ,
// თქვენი დავალებაა რომ გამოიტანოთ 5 ივე value ცალ ცალკე ,
// ბოლოდ დაბეჭდეთ მთლიანი ობიექტიც, გამოიყენეთ . notation იც და [] bracket notation იც(რთული კიებისთვის)

let person = {
    name: "Andria",
    age: 15,
    livingAddress: "Tbilisi",
    phoneNumber: "555-1234",
    favoriteColor: "Blue"
}
console.log(person.name)
console.log(person.age)
console.log(person["livingAddress"])
console.log(person["phoneNumber"])
console.log(person.favoriteColor)
console.log(person)

let user = {
    username: "goga",
    age: 25,
    email: "goga@gmail.com",
    country: "Georgia"
}
// შეასრულე:
// username გამოიტანე dot notation-ით.
// email გამოიტანე bracket notation-ით.
// age გაზარდე 1-ით.
// country შეცვალე "Germany"-თ.
// დაამატე isAdmin property მნიშვნელობით false.
// დაამატე "favorite color" property მნიშვნელობით "Blue".
// გამოიტანე "favorite color" bracket notation-ით.
// წაშალე email.
// შეცვალე isAdmin და გახადე true.
// ბოლოს გამოიტანე მთელი ობიექტი.

console.log(user.username)
console.log(user["email"])
console.log(user.age += 1)
console.log(user.country = "Germany")
console.log(user.isAdmin = false)
console.log(user["favorite color"] = "Blue")
delete user.email
console.log(user.isAdmin = true)
console.log(user)
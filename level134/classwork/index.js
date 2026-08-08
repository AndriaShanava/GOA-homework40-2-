// შექმენით ორი სია სადაც მოათავსებთ სახელებს
// თქვენი დავალებააა რომ გამოიტანოთ სიიდან ისეთი სახელები რომელი სახელების სიგრძეც არის ტოლი
// გამოიყენეთ nested loops
const list1 = ['Andria', 'Goga', 'Natia', 'Anastasia', 'Sandro']
const list2 =['Anastasia', 'Andria', 'Nika', 'Dato', 'Merabi']
for(let i = 0; i < list1.length; i++){
    for(let j = 0; j < list2.length; j++){
        if(list1[i].length === list2[j].length){
            console.log(list1[i])
        }
    }
}

// 2) მოცემულია:
// let arr1 = [2, 4, 6];
// let arr2 = [3, 5];
// Nested Loop-ის გამოყენებით დაბეჭდე ყველა შესაძლო ნამრავლი.
// შედეგი:
// 2 * 3 = 6
// 2 * 5 = 10
// 4 * 3 = 12
// 4 * 5 = 20
// 6 * 3 = 18
// 6 * 5 = 30

let arr1 = [2, 4, 6];
let arr2 = [3, 5];
for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
        console.log(`${arr1[i]} * ${arr2[j]} = ${arr1[i] * arr2[j]}`);
    }
}
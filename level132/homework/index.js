// 1)გაქვს
// const numbers = [2,5,8,10,13,20]
// for ციკლით შექმენი ახალი მასივი, სადაც მხოლოდ 10-ზე დიდი რიცხვები იქნება.
const newArray = [];
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 10) {
    newArray.push(numbers[i]);
  }
}


// 2)შექმენი 10 რიცხვისგან შემდგარი მასივი.
// დაბეჭდე მხოლოდ ის ელემენტები, რომლებიც კენტია.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 !== 0) {
        console.log(numbers[i]);
    }
}

// 3)შექმენით სახელების სია , ასევე შექმენით ცარიელი სია ,სახელების სიიდან ცარიელ სიაში გადაიტანეთ
// ისეთი ელემენტები რომებიც იწყება "g" ზე და ასევე მისი სიგრძე მეტია 5 ზე
const names = ['Andria', 'Giorgi', 'Saba', 'Gela', 'Luka', 'Gio', 'Gigi'];
const new_list = [];
for (let i = 0; i < names.length; i++) {
    if (names[i].startsWith('G') && names[i].length > 5) {
        new_list.push(names[i]);
    }
}
console.log(new_list);


// 4)შექმენით რიცხვების სია და ასევე ცარიელი სია,
// შენი დავალებაა რომ სიიდან ამოშალო ლუწი რიცხვები და დატოვომხოლოდ კენტი რიცხვები , გამოგადგებათ splice() მეთოდი, და ახსენით
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        numbers.splice(i, 1);
    }
  }

// 5)შექმენით სია სადაც ერთად იქნება როგორც ნამბერ ტიპის მოანცემებ ი ასევ სტრინგ ტიპის მონაცემებიც ,
// შენი დავალებაა დაბეჭდო მხოლოდ სტრინგ ტიპის მოანცემები კონსოლში (გამოგადგებთ typeof მეთოდი)

const list = [1, "hello", 2, "world", 3, "javascript"];
for (let i = 0; i < list.length; i++) {
    if (typeof list[i] === "string") {
        console.log(list[i]);
    }
}

// 6)შექმენით სახელების სია ,ასევე ცარიელი სია , 
// შენი დავალებაა სახელების სიიდან ცარიელ სიაში ჩაამატო ის ელემენტები რომელში მყოფი ყველა ასო არის დიდი
const list = ['ANDRIA', 'giorgi', 'SABA', 'GELA', 'LUKA', 'gio', 'GIGI'];
const new_list = [];
for (let i = 0; i < list.length; i++) {
    if (list[i] === list[i].toUpperCase()) {
        new_list.push(list[i]);
    }
}
console.log(new_list);
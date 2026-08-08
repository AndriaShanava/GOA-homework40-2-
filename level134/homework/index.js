// 1)მოცემულია ორი სია:
// let arr1 = [1, 2, 3, 4];
// let arr2 = [3, 4, 5, 6];
// დავალება: Nested loop-ის გამოყენებით დაბეჭდე მხოლოდ ის რიცხვები, რომლებიც ორივე სიაშია.
let arr1 = [1, 2, 3, 4];
let arr2 = [3, 4, 5, 6];
for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
        if (arr1[i] === arr2[j]) {
            console.log(arr1[i]);
        }
    }
}

// 2)მოცემულია:
// let colors = ["Red", "Blue", "Green"];
// let sizes = ["S", "M", "L"];
// დავალება: დაბეჭდე ყველა შესაძლო კომბინაცია.
let colors = ["Red", "Blue", "Green"];
let sizes = ["S", "M", "L"];
for (let i = 0; i < colors.length; i++) {
    for (let j = 0; j < sizes.length; j++) {
        console.log(`${colors[i]} - ${sizes[j]}`); 
    } 
}

// 3)დუბლიკატების პოვნა
// მოცემულია:
// let numbers = [5, 2, 7, 5, 9, 2];
// დავალება: Nested loop-ის გამოყენებით იპოვე და დაბეჭდე დუბლირებული რიცხვები.
let numbers = [5, 2, 7, 5, 9, 2];
for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
        if (numbers[i] === numbers[j]) {
            console.log(numbers[i]);
        }
    }
}

// 4) ერთნაირი სახელების პოვნა
// მოცემულია:
// let names = ["Nika", "Gio", "Ana", "Nika", "Ana"];
// დავალება: დაბეჭდე მხოლოდ ის სახელები, რომლებიც მეორდება.
let names = ["Nika", "Gio", "Ana", "Nika", "Ana"];
for (let i = 0; i < names.length; i++) {
    for (let j = i + 1; j < names.length; j++) {
        if (names[i] === names[j]) {
            console.log(names[i]);
        }
    }
}

// 5)ყველა მოსწავლისა და საგნის დაწყვილება
// მოცემულია:
// let students = ["Nika", "Ana", "Gio"];
// let subjects = ["Math", "English"];
// დავალება: დაბეჭდე ყველა შესაძლო წყვილი.
let students = ["Nika", "Ana", "Gio"];
let subjects = ["Math", "English"];
for (let i = 0; i < students.length; i++) {
    for (let j = 0; j < subjects.length; j++) {
        console.log(`${students[i]} - ${subjects[j]}`);
    }
}


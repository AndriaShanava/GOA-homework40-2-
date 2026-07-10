// კომენტარის სახით ახსენით თუ რას აკეთებენ დღევანდელი ნასწავლი სიის მეთოდები ასევე მოიყვენთ თითო სიის მეთოდზე ორ ორი განახვავებული მაგალითი.concat, flat, slice, splice, toSpliced

// concat() - ეს მეთოდი გამოიყენება ორ ან მეტ სიას შორის გაერთიანებისათვის. იგი ქმნის ახალ სიას, რომელიც შეიცავს ყველა ელემენტს გაერთიანებული სიებიდან.
// მაგალითი 1:
let array1 = [1, 2, 3]
let array2 = [4, 5, 6]
let combinedArray = array1.concat(array2)
console.log(combinedArray)

// მაგალითი 2:
let array3 = ['a', 'b']
let array4 = ['c', 'd']
let combinedArray2 = array3.concat(array4)
console.log(combinedArray2)

// flat() - სიაში მყოფ პატარა სიებს აერთიანებს ერთ დიდ სიად. 
// მაგალითი 1:
let array5 = [[1, 2], [3, 4], [5, 6]]
let flat = array5.flat()
console.log(flat);

// მაგალითი 2:
let array6 = [['x', 'y'], ['z']]
let flat2 = array6.flat()
console.log(flat2);

// slice() - ამ მეთოდის საშუალებით შეგვიძლია სიიდან კონკრეტული ელემენტების ამოღება და ახალი სიის შექმნით.
// მაგალითი 1:
let array7 = [10, 20, 30, 40, 50]
let slicedArray = array7.slice(1, 4)
console.log(slicedArray)

// მაგალითი 2:
let array8 = ['apple', 'banana', 'cherry', 'date']
let slicedArray2 = array8.slice(0, 2)
console.log(slicedArray2) 

// splice() - ამ მეთოდის საშუალებით შეგვიძლია სიიდან ელემენტების ამოღება და ახალი ელემენტების დამატება.
// მაგალითი 1:
let array9 = [1, 2, 3, 4, 5]
array9.splice(2, 2, 'a', 'b')
console.log(array9)
// მაგალითი 2:
let array10 = ['x', 'y', 'z']
array10.splice(1, 1, 'm', 'n')
console.log(array10)

// toSpliced() - ეს მეთოდი იგივე ფუნქციას ასრულებს, რაც splice(), მაგრამ იგი არ ცვლის ორიგინალ სიას, არამედ ქმნის ახალ სიას.
// მაგალითი 1:
let array11 = [1, 2, 3, 4, 5]
let newArray = array11.toSpliced(1, 2, 'a', 'b')
console.log(newArray)
console.log(array11) 
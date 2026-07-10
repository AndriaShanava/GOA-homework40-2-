// შექმენით სამი თქვენთვის სასურველი სია და ამ სამი სიიდან მიიღეთ ერთ მთლიანი სია,გამოიიტანეთ კონსოლში გაერთანებული სია.
let list1 = [1, 2, 3, 4, 5]
let list2 = ['andria', 'nika', 'goga']
let list3 = [true, false]

console.log(list1.concat(list2, list3))

// 2)const fruits = [["Banana", "Orange"], ["Apple", "Mango" , "Pineapple"], ["Onion" , "Garlic"]];
// პირველ რიგში დაშალეთ ეს პატარა სიები და გააერთიანეთ ერთ დიდ სიად შესაბამისი მეთდის გამოყენებით(შეინახეთ ცვლადში)
// შენი დავალებაა წინა სიიდან რომელიც fruits სიიდან მიიღე და დაშალეთ -->
// ახალი სიის სახით მიიღო სია შემდეგი ელემენტებით -->  "Apple", "Mango" , "Pineapple", "Onion"
// გამოიყენე slice() და დააკონსოლლოგე ახალი სია
// ასევე დააკონსოლე ძველი სიაც რადგან ნახოთ რომ ძველ სიას არაფერი მოსდის და იგივე რჩება

const fruits = [["Banana", "Orange"], ["Apple", "Mango" , "Pineapple"], ["Onion" , "Garlic"]]
let newFruits = fruits.flat()
console.log(newFruits)
console.log(newFruits.slice(2, 6))


// 3)let arr = [ 'goga', "LEVANI" , 70 , "GIO" , true, false ] მოცემულია სია
// თქვენი დავალებაა ამ სიიდან ამოშალოთ 70 ,GIO , true და ამ სამი ელემენტის ადგილზე დაამატოთ --> "გელა" , "საბა"
// დააკონსოლლოგე სია რომ ნახო შედეგი
let arr = [ 'goga', "LEVANI" , 70 , "GIO" , true, false ]
arr.splice(2, 3, "გელა", "საბა")
console.log(arr)

// 4)let arr = [ 'goga', "LEVANI" , 70 , "GIO" , true, false ] მოცემულია სია
// თქვენი დავალებაა ამ სიიდან ამოშალოთ 'goga', "LEVANI" , 70 , "GIO" და ამათ მაგივრად დაამატოთ 
// რიცხვი 100 ისე რომ ორიგინალი სია არ შეიცვალოს, დააკონსოლლოგე ახალი სია

let arr = [ 'goga', "LEVANI" , 70 , "GIO" , true, false ]
let newArr = arr.toSpliced(0, 4, 100)
console.log(newArr)
console.log(arr)

// 1)დაითვალე 1 დან 20 მდე while loop ის გამოყენებით]
let i = 1
while(i < 20){
    console.log(i)
    i++
}

// 2)შექმენი სია სადაც ჩაწერთ რაიმე სახელებს,თქვენი დავალებაა გამოიტანოთ სიის ყველა ელემენტი while loop ით
let names = ['Andria', 'merabi', 'Nino', 'Giorgi', 'Lasha']
let i = 0
while(i < names.length){
    console.log(names[i])
    i++
}

// 3)შექმენით სია სადაც იქნება მხოლოდ რიცხვები დადებითიც და უარყოფითიც ,
// თქვენი დავალებაა გამოიტანოთ კონსოლში მხოლოდ დადებით რიუცხვები
let numbers = [-3, -2, -1, 0, 1, 2, 3]
let i = 0
while(i < numbers.length){
    if(numbers[i] > 0){
        console.log(numbers[i])
    }
    i++
}

// 4)თქვენი დავალებაა do while ის მეშვეობით დაითვალოთ 1 დან 20 მდე
let i = 1
do{
    i++
    console.log(i)
}
while(i < 20)

// 5)თქვენი დავალებაა რომ  შექმნათ სია და გამოიტანოთ სიის ყველა ის ელემენტი რომლის სიგრძე ნაკლებია 5 ზე do while ის დახმარებით
let names = ['Andria', 'Nika', 'Merabi', 'Sandro', 'Goga']
let i = 0
do{
    if(names[i].length < 5){
        console.log(names[i])
    }
    i++
} while(i < names.length)
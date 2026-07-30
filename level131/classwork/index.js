// 1)გამოიტანეთ თქვენი სახელი და გვარი 15 ჯერ კონსოლში
for(let i = 0; i < 15; i++){
    console.log('andri shanava')
}

// 2) გამოიტანეთ რიცხვები 10 დან 25 ის "ჩათვლით" კონსოლში

for(let i = 10; i <= 25; i++){
    console.log(i)
}

// 3)შექმენი სია სადაც შეიყვათ ქვეყნის სახელებს ,თქვენი დავალებაა რომ კონსოლში გამოიტანოთ სიის თითოეული ელემენტი ცალ ცალკე

let countries = ['Georgia', 'USA', 'Germany', 'France', 'Italy']
for(let i = 0; i < countries.length; i++){
    console.log(countries[i])
}

// 4)შექმენით სია სადაც მხოლოდ რაღაც მთელ რიცხვებს შეიყვანთ , თქვენი დავალებაა რომ თითოეული რიცხვი გაამრავლოთ 2 ზე და ისე გამოიტანეთ

let numbers = [1, 2, 3, 4, 5]
for(let i = 0; i < numbers.length; i++){
    console.log(numbers[i] * 2)
}

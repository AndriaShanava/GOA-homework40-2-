// 1)დაბეჭდე ყველა რიცხვი 1-დან 20-მდე.
for(let i = 1; i < 20; i++){
    console.log(i)
}

// 2)დაბეჭდე ყველა რიცხვი 30-დან 10-მდე.
for(let i = 30; i > 10; i--){
    console.log(i)
}

// 3)დაბეჭდე 10, 20, 30, ..., 100. (for loop ში i++ ის მაგივრად იქნება i+=10)
for(let i = 10; i <= 100; i+=10){
    console.log(i)
}

// 4)მოცემულია მასივი:
// let fruits = ["Apple", "Banana", "Orange", "Kiwi", "Mango"];
// დაბეჭდე ყველა ელემენტი for ციკლის გამოყენებით.
for(let i = 0; i < fruits.length; i++){
    console.log(fruits[i])
}

// 5)let numbers = [4, 8, 15, 16, 23, 42];
// დაბეჭდე ყველა რიცხვი.
for(let i = 0; i < numbers.length; i++){
    console.log(numbers[i])
}

// 6)let colors = ["Red", "Green", "Blue", "Black", "White"];
// დაბეჭდე ელემენტები ბოლოდან დასაწყისისკენ.
for(let i = colors.length - 1; i >= 0; i--){
    console.log(colors[i])
}


// 7)let animals = ["Dog", "Cat", "Lion", "Tiger"];
// დაბეჭდე ასე:
// 0 Dog
// 1 Cat
// 2 Lion
// 3 Tiger

for(let i = 0; i < animals.length; i++){
    console.log(i, animals[i])
}

// 8)დაბეჭდე ყველა რიცხვი 50-დან 100-მდე.
for(let i = 50; i <= 100; i++){
    console.log(i)
}

// 9)დაბეჭდე:
// 3
// 6
// 9
// 12
// ...
// 60

for(let i = 3; i <= 60; i+=3){
    console.log(i)
}

// 10)let countries = ["Georgia", "Italy", "Japan", "Brazil", "Spain"];
// დაბეჭდე ყველა ქვეყანა.
for(let i = 0; i < countries.length; i++){
    console.log(countries[i])
}


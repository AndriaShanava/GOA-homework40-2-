// შექმენთ ფუნქცია სახელად --> displayCarInfo() რომელსაც გადაეცემა პარამეტრი სახელად callback ,
// ამ ფუნქციამ უნდა დააბრუნოს ტექსტი ავტომობილის შესახებ მაგ:this car is new car and its model is ...
// შექმენით მეორე ფუნქცია სახელად sayCarName() რომელიც აბრუნებს რაიმე ავტომობილის სახელს 
// თქვენი დავალებაა რომ გამოიძახოთ პირველი ფუნქცია და მას არგუმენტად გადასცეთ მეორე ფუნქცია , 
// პირველ ფუნქციაში კი სამი წერტილი შეცვალეთ მეორე ფუნქციის დაბრუნებული შედ

function displayCarInfo(callback){
    return 'this car is new car and its model is ' + callback();
}

function sayCarName(){
    return 'Toyota';
}
displayCarInfo(sayCarName);

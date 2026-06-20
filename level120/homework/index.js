// 1)რიცხვის დამრგვალება
// შექმენი ფუნქცია, რომელიც მიიღებს ათწილად რიცხვს და დააბრუნებს:
// Math.round() შედეგს
// Math.floor() შედეგს
// Math.ceil() შედეგს

function roundNumber(num) {
    return Math.round(num), Math.floor(num), Math.ceil(num);
}

// 2)უდიდესი და უმცირესი რიცხვის პოვნა
// ფუნქციამ უნდა მიიღოს 5 რიცხვი და დააბრუნოს:
// ყველაზე დიდი
// ყველაზე პატარა

function findMinMax(a, b, c, d, e) {
    return Math.max(a, b, c, d, e), Math.min(a, b, c, d, e);
}


// 3)ფუნქციამ უნდა მიიღოს ორი რიცხვი:
// პირველი რიცხვი
// და
// ხარისხი
// და დააბრუნოს პირველი რიცხვი მეორის ხარისხში აყვანილი.

function power(num1, num2) {
    return Math.pow(num1, num2);
}

// 4)ფუნქციამ უნდა მიიღოს რიცხვი და დააბრუნოს მისი კვადრატული ფესვი.
function sqrt(num) {
    return Math.sqrt(num);
}

// 5)დაწერე ფუნქცია, რომელიც დააბრუნებს შემთხვევით მთელ რიცხვს 0-დან 1-მდე.
function random() {
    return Math.random();
}

// 6)ფუნქციამ უნდა მიიღოს რიცხვი და დააბრუნოს მისი დადებით მნიშვნელობა 

function abs(num) {
    return Math.abs(num);
}

// 7)მომხმარებლის მიერ გადმოცემული რიცხვი დაამრგვალე უახლოეს ათეულამდე.

function trunc(num) {
    return Math.round(num);
}


// 7)შექმენი ფუნქცია ultimateMath(a, b, c)
// იპოვე:
// ყველაზე დიდი რიცხვი
// ყველაზე პატარა რიცხვი
// ყველაზე დიდი რიცხვის კვადრატი
// ყველაზე პატარა რიცხვის კვადრატული ფესვი
// სხვაობა მათ შორის

function ultimateMath(a, b, c) {
    let max = Math.max(a, b, c);
    let min = Math.min(a, b, c);
    let maxSquare = Math.pow(max, 2);
    let minSqrt = Math.sqrt(min);
    let difference = max - min;
    return max, min, maxSquare, minSqrt, difference;
}

// 8)შექმენი ფუნქცია checkSign(num)
// გამოიყენე Math.sign() და დაბეჭდე:
// Positive
// ან
// Negative
// ან
// Zero
function checkSign(num) {
    return Math.sign(num) === 1 ? "Positive" : Math.sign(num) === -1 ? "Negative" : "Zero";
}


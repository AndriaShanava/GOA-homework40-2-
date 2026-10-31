// 1)შექმენი ობიექტი student შემდეგი თვისებებით:
let student = {
    name: "Goga",
    surname: "Chalauri",
    age: 20,
    score: 75,
    showInfo(){
        console.log(this.name, this.surname, this.age, this.score)
    },
    checkScore(){
        console.log(this.score >= 90 ? "Shesanishnavia": this.score >= 70 ? 'kargi shedegi': 'meti imecadine')
    }
};

student.checkScore()
student.showInfo()
// მოთხოვნები:
// 1. შექმენი showInfo() მეთოდი, რომელიც this-ის გამოყენებით გამოიტანს მოსწავლის სახელს, გვარს, ასაკსა და ქულას.
// 2. შექმენი checkScore() მეთოდი:
//    - თუ ქულა 90 ან მეტია, გამოიტანე "შესანიშნავი შედეგი!".
//    - თუ ქულა 70 ან მეტია, გამოიტანე "კარგი შედეგი!".
//    - სხვა შემთხვევაში გამოიტანე "მეტი მეცადინეობაა საჭირო!".
// 3. გამოიძახე ჯერ checkScore() მეთოდი და ბოლოს showInfo()-ით გამოიტანე ინფორმაცია.

// 2)
let player = {
    name: "Shadow",
    _health: 100,
    _energy: 80,
    level: 1,
    getHealth(){
        console.log(this._health)
    },
    getEnergy(){
        console.log(this._energy)
    },
    showInfo(){
        console.log(this._health, this.name, this._energy, this.level)
    }
};

player._energy = 50
player._health = 20
showInfo()
// 1)შექმენი getHealth() მეთოდი, რომელიც დააბრუნებს მოთამაშის ჯანმრთელობას (_health).
// 2)შექმენი getEnergy() მეთოდი, რომელიც დააბრუნებს მოთამაშის ენერგიას (_energy).
// 3)შექმენი showInfo() მეთოდი, რომელიც გამოიტანს მოთამაშის სახელს, ჯანმრთელობას, ენერგიასა და დონეს.
// 4)სცადე ობიექტის გარედან _health-ისა და _energy-ის შეცვლა. შემდეგ გამოიძახე showInfo() და დააკვირდი შედეგს.


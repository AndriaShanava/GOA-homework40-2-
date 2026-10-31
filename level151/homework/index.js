// 1)შექმენი ობიექტი car, რომელსაც ექნება შემდეგი თვისებები:
// - _brand — "BMW"
// - _model — "M5"
// - _year — 2023
// მოთხოვნები:
// 1. შექმენი showInfo() მეთოდი.
// 2. მეთოდმა this-ის გამოყენებით გამოიტანოს მანქანის ბრენდი, მოდელი და გამოშვების წელი.
// 3. ინფორმაცია გამოიტანე console.log()-ით.

let car = {
    _brand: "BMW",
    _model: "M5",
    _year: 2023,
    showInfo(){
        console.log(this._brand, this._model, this._year)
    }
}

// 2)შექმენი ობიექტი player შემდეგი თვისებებით:
// - _name — "Shadow"
// - _health — 100
// - _level — 5
// მოთხოვნები:
// 1. შექმენი showStats() მეთოდი, რომელიც გამოიტანს მოთამაშის ყველა მონაცემს.
// 2. შექმენი takeDamage() მეთოდი, რომელიც მოთამაშის ჯანმრთელობას 20-ით შეამცირებს.
// 3. ჯანმრთელობის შესაცვლელად გამოიყენე this._health.
// 4. გამოიძახე ორივე მეთოდი და შეამოწმე შედეგი.
let player = {
    _name: "Shadow",
    _health: 100,
    _level: 5,
    showStats(){
        console.log(this._name, this._health, this._level)
    },
    takeDamage(){
        this._health -= 20
    }
}

console.log(player.showStats())
console.log(player.takeDamage())

// 3)შექმენი ობიექტი bankAccount:
// - _owner — "Goga"
// - _balance — 500
// - _accountNumber — "123456"
// მოთხოვნები:
// 1. შექმენი showBalance() მეთოდი, რომელიც ანგარიშის მფლობელსა და ბალანსს გამოიტანს.
// 2. შექმენი deposit(amount) მეთოდი, რომელიც ბალანსს მითითებული თანხით გაზრდის.
// 3. შექმენი withdraw(amount) მეთოდი, რომელიც ბალანსს მითითებული თანხით შეამცირებს.
// 4. თანხის შესაცვლელად გამოიყენე this._balance.
// მაგალითად, deposit(200)-ის შემდეგ ბალანსი უნდა იყოს 700.
let bankAccount = {
    _owner: "Goga",
    _balance: 500,
    _accountNumber: "123456",
    showBalance(){
        console.log(this._owner, this._balance)
    },
    deposit(amount){
        this._balance += amount
    },
    withdraw(amount){
        this._balance -= amount
    }
}

console.log(bankAccount.showBalance())
console.log(bankAccount.deposit(200))
console.log(bankAccount.withdraw(100))

// 4)შექმენი ობიექტი character:
// - _name — "Knight"
// - _health — 100
// - _strength — 25
// - _level — 1
// - _experience — 0
// მოთხოვნები:
// 1. შექმენი attack() მეთოდი, რომელიც გამოიტანს ტექსტს, მაგალითად: "Knight attacks with 25 strength!".
// 2. შექმენი takeDamage(damage) მეთოდი, რომელიც ჯანმრთელობას შეამცირებს მითითებული ზიანის ოდენობით.
// 3. შექმენი gainExperience(points) მეთოდი, რომელიც გამოცდილებას გაზრდის.
// 4. თუ გამოცდილება 100 ან მეტს მიაღწევს, მოთამაშის დონე 1-ით გაზარდე და გამოცდილებას 100 გამოაკელი.
// 5. ყველა თვისებაზე წვდომისთვის და მნიშვნელობების შესაცვლელად გამოიყენე this.

let character = {
    _name: "Knight",
    _health: 100,   
    _strength: 25,
    _level: 1,
    _experience: 0,
    attack(){
        console.log(`${this._name} attacks with ${this._strength} strength!`)
    },
    takeDamage(damage){
        this._health -= damage
    },
    gainExperience(points){
        this._experience += points
        if(this._experience >= 100){
            this._level += 1
            this._experience -= 100
        }
    }
}

console.log(character.attack())
console.log(character.takeDamage(30))
console.log(character.gainExperience(120))

// 5)შექმენი ობიექტი product:
// - _name — "Keyboard"
// - _price — 150
// - _quantity — 10
// მოთხოვნები:
// 1. showProduct() — გამოიტანს პროდუქტის სახელს, ფასსა და რაოდენობას.
// 2. sell(amount) — შეამცირებს რაოდენობას გაყიდული ერთეულების მიხედვით.
// 3. თუ გასაყიდი რაოდენობა მარაგზე მეტია, გამოიტანე შეტყობინება "Not enough products!".
// 4. restock(amount) — გაზრდის პროდუქტის რაოდენობას.
// 5. showTotalValue() — გამოიტანს დარჩენილი პროდუქციის საერთო ღირებულებას.
// მაგალითად, თუ ფასი არის 150 და რაოდენობა — 10, საერთო ღირებულება იქნება 1500.
let product = {
    _name: "Keyboard",
    _price: 150,
    _quantity: 10,
    showProduct(){
        console.log(this._name, this._price, this._quantity)
    },
    sell(amount){
        if(amount > this._quantity){
            console.log("Not enough products!")
        } else {
            this._quantity -= amount
        }
    },
    restock(amount){
        this._quantity += amount
    },
    showTotalValue(){
        console.log(this._price * this._quantity)
    }
}

console.log(product.showProduct())
console.log(product.sell(5))
console.log(product.restock(3))
console.log(product.showTotalValue())

// 6)შექმენი ობიექტი user:
// - _firstName — "Goga"
// - _lastName — "Chalauri"
// - _age — 20
// - _password — "abc123"
// მოთხოვნები:
// 1. შექმენი showFullName() მეთოდი, რომელიც სახელსა და გვარს გააერთიანებს.
// 2. შექმენი changeAge(newAge) მეთოდი, რომელიც ასაკს შეცვლის მხოლოდ იმ შემთხვევაში, თუ ახალი ასაკი 0-ზე მეტია.
// 3. შექმენი checkPassword(password) მეთოდი, რომელიც შეამოწმებს, ემთხვევა თუ არა მიღებული პაროლი ობიექტში შენახულ პაროლს.
// 4. პაროლის დამთხვევისას გამოიტანე "Access granted!", სხვა შემთხვევაში — "Access denied!".
// დამატებითი პირობა: ყველა მონაცემი შეინახე _-ით დაწყებულ თვისებებში, ხოლო მეთოდებში მათთან წვდომისთვის გამოიყენე this.

let user = {
    _firstName: "Goga",
    _lastName: "Chalauri",
    _age: 20,
    _password: "abc123",
    showFullName(){
        console.log(`${this._firstName} ${this._lastName}`)
    },
    changeAge(newAge){
        if(newAge > 0){
            this._age = newAge
        }
    },
    checkPassword(password){
        if(password === this._password){
            console.log("Access granted!")
        } else {
            console.log("Access denied!")
        }
    }
}

console.log(user.showFullName())
console.log(user.changeAge(25))
console.log(user.checkPassword("abc123"))
console.log(user.checkPassword("wrongpass"))

// 7)შექმენი ობიექტი hero შემდეგი თვისებებით:
// - _name — "DragonSlayer"
// - _health — 100
// - _mana — 50
// - _attackPower — 30
// - _potions — 3
// მოთხოვნები:
// 1. attack() — გამოიტანს შეტევის შეტყობინებას და შეტევის ძალას.
// 2. castSpell() — გამოიყენებს 20 მანას. თუ მანა საკმარისი არ არის, გამოიტანე შესაბამისი შეტყობინება.
// 3. drinkPotion() — თუ წამლები დარჩენილია, ჯანმრთელობას 30-ით გაზრდის და წამლების რაოდენობას 1-ით შეამცირებს.
// 4. ჯანმრთელობა 100-ზე მეტი არ უნდა გახდეს.
// 5. showStatus() — გამოიტანს ყველა მიმდინარე მონაცემს.
// გამოიძახე მეთოდები სხვადასხვა თანმიმდევრობით და შეამოწმე, სწორად იცვლება თუ არა ობიექტის თვისებები.

let hero = {
    _name: "DragonSlayer",
    _health: 100,
    _mana: 50,
    _attackPower: 30,
    _potions: 3,
    attack(){
        console.log(`${this._name} attacks with ${this._attackPower} power!`)
    },
    castSpell(){
        if(this._mana >= 20){
            this._mana -= 20 
            console.log(`${this._name}, ${this._mana}`)
        } else {
            console.log("Not enough mana!")
        }
    },
    drinkPotion(){
        if(this._potions > 0){
            this._health += 30
            this._potions -= 1
            if(this._health > 100) {
                this._health = 100
            
        }
    } else {
        console.log("No potions left!")

    }
    },
    showStatus(){
        console.log(`Name: ${this._name}, Health: ${this._health}, Mana: ${this._mana}, Attack Power: ${this._attackPower}, Potions: ${this._potions}`)
    }
}

console.log(hero.attack())
console.log(hero.castSpell())
console.log(hero.drinkPotion())
console.log(hero.showStatus())

// 8)8)შექმენი ობიექტი car:
// - _brand — "Mercedes"
// - _fuel — 60
// - _fuelConsumption — 10
// - _distance — 0
// - _isRunning — false
// მოთხოვნები:
// 1. start() — ჩართავს ავტომობილს, თუ საწვავი აქვს.
// 2. drive(kilometers) — იმუშავებს მხოლოდ მაშინ, თუ ავტომობილი ჩართულია.
// 3. ყოველ 100 კილომეტრზე ავტომობილი 10 ლიტრ საწვავს მოიხმარს.
// 4. გავლილი მანძილი შეინახე _distance თვისებაში.
// 5. თუ საწვავი საკმარისი არ არის, ავტომობილი დარჩენილი საწვავის შესაბამისად იმოძრავებს და საწვავი 0-მდე შემცირდება.
// 6. stop() — გამორთავს ავტომობილს.
// 7. showInfo() — გამოიტანს ბრენდს, დარჩენილ საწვავს, გავლილ მანძილსა და ჩართულია თუ არა ავტომობილი.

let car = {
    _brand: "Mercedes",
    _fuel: 60,
    _fuelConsumption: 10,
    _distance: 0,
    _isRunning: false,
    start(){
        if(this._fuel > 0){
            this._isRunning = true;
        }
    },
    drive(kilometers){
        if(this._isRunning){
            let fuelneed = (kilometers * this._fuelConsumption) / 100 
            this._fuel -= fuelneed
            this._distance += kilometers
        }
    }, 
    stop(){
        this._isRunning = false
    }

// 9)შექმენი ობიექტი shop:
// - _name — "Tech Store"
// - _balance — 1000
// - _products — []
// მოთხოვნები:
// 1. addProduct(name, price, quantity) — დაამატებს პროდუქტს _products მასივში ობიექტის სახით. თითოეულ პროდუქტს უნდა ჰქონდეს name, price და quantity.
// 2. sellProduct(name, quantity) — მოძებნის პროდუქტს სახელით და გაყიდის მითითებულ რაოდენობას, თუ საკმარისი მარაგია.
// 3. გაყიდვისას მაღაზიის ბალანსი შესაბამისი თანხით გაზარდე.
// 4. showProducts() — გამოიტანს ყველა პროდუქტს და მათ მონაცემებს.
// 5. showBalance() — გამოიტანს მაღაზიის ბალანსს.
// დამატებითი პირობა: მეთოდებში გამოიყენე this._products და this._balance. პროდუქტების ძებნა და მათი მონაცემების შეცვლა თავად უნდა განახორციელო.

// 1)
let student = {
    _name: "Nika",
    _surname: "Beridze",
    _age: 17,
    get fullName() {
        return `${this._name} ${this._surname}`
    }
};

console.log(student.fullName)
student._name = "Giorgi"
console.log(student.fullName)
// მოთხოვნები:
// 1. შექმენი fullName getter, რომელიც აბრუნებს მოსწავლის სახელსა და გვარს შორის გამოტოვებით გაერთიანებულ ტექსტს.
// 2. fullName-ის გამოძახებისას უნდა მიიღო Nika Beridze.
// 3. კონსოლში გამოიტანე student.fullName.
// 4. ობიექტის _name შეცვალე "Giorgi"-თ და ხელახლა გამოიტანე student.fullName


// 2)
let book = {
    _title: "Harry Potter",
    _author: "J.K. Rowling",
    _pages: 350,

    get bookInfo() {
        return `${this._title} by ${this._author} has ${this._pages} pages.`
    }
};
book.bookInfo
book._title = "The Hobbit"
book._pages = 310
book.bookInfo


// მოთხოვნები:
// 1. შექმენი bookInfo getter, რომელიც აბრუნებს წიგნის სრულ ინფორმაციას.
// 2. ინფორმაცია უნდა შეიცავდეს სათაურს, ავტორსა და გვერდების რაოდენობას.
// 3. კონსოლში გამოიტანე book.bookInfo.
// 4. შეცვალე წიგნის სათაური და გვერდების რაოდენობა.
// 5. ხელახლა გამოიტანე book.bookInfo.


// 3)
let player = {
    _name: "Shadow",
    _level: 5,
    _health: 80,
    _experience: 450,

    get status() {
        return `${this._name} is at level ${this._level} with ${this._health} health and ${this._experience} experience points.`
    }
};

player.status
player._level = 6
player._health = 90
player.status
// მოთხოვნები:
// 1. შექმენი status getter, რომელიც აბრუნებს მოთამაშის შესახებ სრულ ინფორმაციას.
// 2. ინფორმაციაში უნდა ჩანდეს სახელი, დონე, ჯანმრთელობა და გამოცდილების ქულები.
// 3. გამოიტანე player.status.
// 4. შეცვალე მოთამაშის დონე და ჯანმრთელობა.
// 5. ხელახლა გამოიტანე player.status.

// 4)
let student = {
    _name: "Ana",
    _surname: "Maisuradze",
    _math: 90,
    _english: 85,
    _programming: 95,

    get fullName() {
        return `${this._name} ${this._surname}`;
    },

    get averageScore() {
        return (this._math + this._english + this._programming) / 3;
    }
};

// student.fullName
// student.averageScore
// student._math = 95
// student.averageScore
// მოთხოვნები:
// 1. fullName getter-მა უნდა დააბრუნოს სტუდენტის სახელი და გვარი.
// 2. averageScore getter-მა უნდა გამოთვალოს სამ საგანში მიღებული ქულების საშუალო არითმეტიკული.
// 3. გამოიტანე ორივე getter-ის შედეგი.
// 4. შეცვალე რომელიმე საგნის ქულა.
// 5. ხელახლა გამოიტანე საშუალო ქულა.

// 5)
let employee = {
    _firstName: "Giorgi",
    _lastName: "Kapanadze",
    _position: "Developer",
    _projectsCompleted: 12,
    _isActive: true,

    get fullName() {
        return `${this._firstName} ${this._lastName}`;
    },

    get employeeInfo() {
        return `${this.fullName} is a ${this._position} who has completed ${this._projectsCompleted} projects.`;
    },

    get employeeStatus() {
        return this._isActive ? "Employee is active" : "Employee is inactive";
    }
};
employee.fullName
employee.employeeInfo
employee.employeeStatus
employee._position = "Senior Developer"
employee._isActive = false
employee.employeeInfo
employee.employeeStatus
// მოთხოვნები:
// 1. fullName getter-მა უნდა დააბრუნოს თანამშრომლის სახელი და გვარი.
// 2. employeeInfo getter-მა უნდა დააბრუნოს თანამშრომლის სრული ინფორმაცია: სახელი, გვარი, პოზიცია და დასრულებული პროექტების რაოდენობა.
// 3. employeeStatus getter-მა უნდა შეამოწმოს _isActive:
//    - თუ true არის, დააბრუნოს "Employee is active".
//    - თუ false არის, დააბრუნოს "Employee is inactive".
// 4. გამოიტანე სამივე getter-ის შედეგი.
// 5. შეცვალე თანამშრომლის პოზიცია და _isActive მნიშვნელობა.
// 6. ხელახლა გამოიტანე შესაბამისი getter-ების შედეგები.
// მთავარი პირობა: ყველა getter უნდა გამოიძახონ თვისებასავით, მაგალითად, employee.fullName და არა employee.fullName().

// 6)
let character = {
    _name: "Dragon",
    _health: 75,
    _attack: 40,
    _defense: 25,
    _level: 8,

    get characterInfo() {
        return `${this._name} is at level ${this._level} with ${this._health} health, ${this._attack} attack, and ${this._defense} defense.`;
    },

    get power() {
        return this._attack + this._defense;
    },

    get isAlive() {
        return this._health > 0 ? "Alive" : "Defeated";
    }
};
character.characterInfo
character.power
character.isAlive
character._health = 0
character.isAlive
// მოთხოვნები:
// 1. characterInfo getter-მა უნდა დააბრუნოს პერსონაჟის ყველა თვისება.
// 2. power getter-მა უნდა დააბრუნოს თავდასხმისა და დაცვის ჯამი.
// 3. isAlive getter-მა უნდა დააბრუნოს:
//    - "Alive", თუ _health მეტია 0-ზე.
//    - "Defeated", თუ _health არის 0 ან ნაკლები.
// 4. გამოიტანე სამივე getter-ის შედეგი.
// 5. შეცვალე _health მნიშვნელობა 0-ით და ხელახლა გამოიტანე character.isAlive.
// მინიშნება: getter-ები ყოველთვის ახლანდელ მნიშვნელობებზე უნდა მუშაობდნენ. თუ ობიექტის თვისებას შეცვლი, getter-ის ხელახლა გამოძახებისას ახალი შედეგი უნდა მიიღო.
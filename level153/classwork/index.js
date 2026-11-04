// 1)
let student = {
    _name: "Giorgi",
    _surname: "Beridze",
    _score: 85,
    _attendance: 90,

    get fullName() {
        return `${this._name} ${this._surname}`
    },

    get result() {
        if (this._score >= 90){
            return "Excelent"
        } else if (this._score >= 70){
            return "Good"
        } else if (this._score >= 50){
            return "Average"
        } else {
            return "Failed"
        }
    },

    get studentInfo() {
        let info = `${this.fullName}, ${this._score}, ${this._attendance}`
        if (this._attendance < 80){
            info += "Low attendance!"
        }
        return info
    }
};




// მოთხოვნები:
// 1. fullName Getter-მა უნდა დააბრუნოს სახელი და გვარი ერთად.
// 2. result Getter-ში შეამოწმე ქულა:
//    - თუ ქულა 90 ან მეტია — "Excellent".
//    - თუ ქულა 70-დან 89-მდეა — "Good".
//    - თუ ქულა 50-დან 69-მდეა — "Average".
//    - სხვა შემთხვევაში — "Failed".
// 3. studentInfo Getter-მა უნდა დააბრუნოს მოსწავლის სრული ინფორმაცია.
// 4. თუ დასწრება 80-ზე ნაკლებია, ინფორმაციას დაამატე "Low Attendance!".
// 5. გამოიყენე უკვე შექმნილი Getter-ები.


let product = {
    _name: "Laptop",
    _price: 2500,
    _quantity: 3,
    _rating: 4.7,

    get stockStatus() {
        return this._quantity > 0 ? "Available" : "Out of Stock"
    },

    get productQuality() {
        return this._rating >= 4.5 ? "Excellent Product" : this._raiting > 3 && this._raiting < 4.4 ? "Good Product" : "Poor Product"
    },

    get orderStatus() {
        if(this.stockStatus === "Available"){
            if (this._price > 1000){
                return "Premium Product Available"
            } else {
                return "Budget Product Available"
            }
        } else{
            return "Currently Unavailable"
        }
    }
};


// მოთხოვნები:
// 1. stockStatus:
//    - თუ რაოდენობა 0-ზე მეტია — "Available".
//    - თუ რაოდენობა 0-ის ტოლია — "Out of Stock".
// 2. productQuality:
//    - თუ რეიტინგი 4.5 ან მეტია — "Excellent Product".
//    - თუ რეიტინგი 3-დან 4.4-მდეა — "Good Product".
//    - სხვა შემთხვევაში — "Poor Product".
// 3. orderStatus:
//    - თუ პროდუქტი ხელმისაწვდომია და მისი ფასი 1000-ზე მეტია — "Premium Product Available".
//    - თუ პროდუქტი ხელმისაწვდომია, მაგრამ ფასი 1000 ან ნაკლებია — "Budget Product Available".
//    - თუ პროდუქტი არ არის მარაგში — "Currently Unavailable".

// 3)
let employee = {
    _name: "Nika",
    _salary: 3500,
    _experience: 4,
    _projectsCompleted: 12,
    _isActive: true,

    get experienceLevel() {
        return this._experience >= 5 ? "Senior" : this._experience >= 2 ? "Middle" : "Junior"
    },

    get performance() {
        return this._projectsCompleted >= 10 ? "High Performer": this._projectsCompleted >= 5 ? "Average Performer": "Low Performer"
    },

    get employeeInfo() {
        if(this._isActive){
            return `${this._name} ${this._experience} ${this.performance}`
        } else{
            return "Employee is not active!"
        }
    }
};


// მოთხოვნები:
// 1. experienceLevel:
//    - 5 ან მეტი წელი — "Senior".
//    - 2-დან 4 წლამდე — "Middle".
//    - 2 წელზე ნაკლები — "Junior".
// 2. performance:
//    - თუ დასრულებული პროექტების რაოდენობა 10 ან მეტია — "High Performer".
//    - თუ 5-დან 9-მდეა — "Average Performer".
//    - სხვა შემთხვევაში — "Low Performer".
// 3. employeeInfo:
//    - თუ თანამშრომელი აქტიურია, დააბრუნე მისი სახელი, გამოცდილების დონე და შედეგიანობა.
//    - თუ არა — დააბრუნე "Employee is not active!".

let student1 = {
    _name: "Giorgi",
    _surname: "Beridze",
    _age: 17,
    _mathScore: 92,
    _englishScore: 65,
    _programmingScore: 88,
    _attendance: 85,

    get fullName() {
        return `${this._name} ${this._surname}`
    },

    get averageScore() {
        return (this._mathScore + this._englishScore + this._programmingScore) / 3
    },

    get academicStatus() {
        return this.averageScore >= 90 ? "Excelent": this.averageScore >= 75 ? "Good": 
        this.averageScore > 60 && this.averageScore < 74 ? "Satisfactory": "Failed"
    },

    get scholarshipStatus() {
        return this.averageScore >= 90 && this._attendance >= 90 ? "Full Scholarship": 
        this.averageScore >= 85 && this._attendance >= 80 ? "Partial Scholarship": "No Scholarship"
    },

    get studentReport() {
        return `${this.fullName}, ${this.averageScore}, ${this.academicStatus}, ${this.scholarshipStatus}`
    }
};


// მოთხოვნები:
// 1. fullName აბრუნებს მოსწავლის სახელსა და გვარს.
// 2. averageScore ითვლის სამი საგნის საშუალო ქულას.
// 3. academicStatus:
//    - საშუალო ქულა 90 ან მეტია — "Excellent".
//    - 75-დან 89-მდე — "Good".
//    - 60-დან 74-მდე — "Satisfactory".
//    - 60-ზე ნაკლები — "Failed".
// 4. scholarshipStatus:
//    - თუ საშუალო ქულა 90 ან მეტია და დასწრება 90 ან მეტია — "Full Scholarship".
//    - თუ საშუალო ქულა 85 ან მეტია და დასწრება 80 ან მეტია — "Partial Scholarship".
//    - სხვა შემთხვევაში — "No Scholarship".
// 5. studentReport აბრუნებს სრულ ანგარიშს და იყენებს ყველა სხვა Getter-ს.


let character = {
    _name: "Shadow",
    _health: 85,
    _energy: 25,
    _level: 12,
    _experience: 1200,
    _strength: 90,
    _isPoisoned: false,
    _hasWeapon: true,

    get healthStatus() {
        return this._health > 70 ? "Healthy": this._health >= 30 ? "Injured": "Critical"
    },

    get energyStatus() {
        return this._energy >= 70 ? "High Energy": this._energy >= 30 ? "Normal Energy": "Low Energy"
    },

    get levelStatus() {
        return this._level >= 10 ? "Advanced": this._level >= 5 ? "Intermediate": "Beginner"
    },

    get battleStatus() {
        return this._health <= 0 ? "Cannot Fight": this._isPoisoned ? "Poisoned":
        this._energy < 20 ? "Too Tired": this._hasWeapon === false ? "No Weapon": "Ready for Battle"
    },

    get characterRank() {
        return this._level >= 10 && this._strength >= 80 && this._experience >= 1000 ? "Legendary":
        this._level >= 7 && this._strength >= 60 ? "Elite":
        this._level >= 4 ? "Warrior": "Rookie"
    },

    get characterReport() {
        return `Health: ${this.healthStatus}, Energy: ${this.energyStatus}, Level: ${this.levelStatus}, BattleStatus: ${this.battleStatus}, Rank: ${this.characterRank}`
    }
};


// მოთხოვნები:
// 1. healthStatus:
//    - ჯანმრთელობა 70-ზე მეტია — "Healthy".
//    - 30-დან 70-მდე — "Injured".
//    - 30-ზე ნაკლები ან ტოლი — "Critical".
// 2. energyStatus:
//    - ენერგია 70 ან მეტია — "High Energy".
//    - 30-დან 69-მდე — "Normal Energy".
//    - სხვა შემთხვევაში — "Low Energy".
// 3. levelStatus:
//    - დონე 10 ან მეტია — "Advanced".
//    - დონე 5-დან 9-მდე — "Intermediate".
//    - სხვა შემთხვევაში — "Beginner".
// 4. battleStatus:
//    - თუ ჯანმრთელობა 0-ის ტოლია ან ნაკლებია — "Cannot Fight".
//    - თუ მოწამლულია — "Poisoned".
//    - თუ ენერგია 20-ზე ნაკლებია — "Too Tired".
//    - თუ იარაღი არ აქვს — "No Weapon".
//    - თუ ყველა პირობა გაიარა — "Ready for Battle".
// 5. characterRank:
//    - თუ დონე 10 ან მეტია, ძალა 80 ან მეტია და გამოცდილება 1000 ან მეტია — "Legendary".
//    - თუ დონე 7 ან მეტია და ძალა 60 ან მეტია — "Elite".
//    - თუ დონე 4 ან მეტია — "Warrior".
//    - სხვა შემთხვევაში — "Rookie".
// 6. characterReport აბრუნებს სრულ ინფორმაციას და იყენებს ყველა სხვა Getter-ს.

// შექმენით ობიექტი სადაც იქნება ორი proivacy მეთოდი მაინც,თქვენი დვალებაა სეტერების გამოყენებით შეცვალოთ
// ეს მნიშნველობები ახალი მნშვნელობებით და შემდეგ გეთერის დახმარებით გამოიტანოთ, დაგჭირდებათ ორი სეტერი და ორი გეთერი

let student2 = {
    _name: "Nika",
    _surname: "Beridze",
    _age: 17,
    _grade: 10,
    set name(newName) {
        this._name = newName
    },
    set surname(newSurname) {
        this._surname = newSurname
    },
    get fullName() {
        return `${this._name} ${this._surname}`
    }
}

student2.name = "Giorgi"
student2.surname = "Bedoidze"
student2.fullName
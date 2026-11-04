// 1)შექმენი ობიექტი bankAccount, რომელსაც ექნება შემდეგი თვისებები:
// - _owner — "Goga"
// - _balance — 2500
// - _pin — "1234"
// - _isBlocked — false
// შექმენი შემდეგი getter-ები და setter-ები:
// 1. owner
// - Getter-მა უნდა დააბრუნოს ანგარიშის მფლობელის სახელი.
// - Setter-მა უნდა მიიღოს ახალი სახელი, მაგრამ შეცვალოს მხოლოდ მაშინ, თუ ახალი მნიშვნელობა სტრიქონია და ცარიელი არ არის.
// - თუ მნიშვნელობა არასწორია, გამოიტანე შეტყობინება: "Invalid owner name!"
// 2. balance
// - Getter-მა უნდა დააბრუნოს მიმდინარე ბალანსი.
// - Setter-მა უნდა მიიღოს ახალი ბალანსი, მაგრამ ცვლილება დაუშვას მხოლოდ მაშინ, თუ ახალი მნიშვნელობა რიცხვია და 0-ზე ნაკლები არ არის.
// - თუ მნიშვნელობა არასწორია, გამოიტანე "Invalid balance!"
// 3. pin
// - Getter-მა არასოდეს უნდა დააბრუნოს PIN-ის ნამდვილი მნიშვნელობა. მან უნდა დააბრუნოს "PIN is hidden".
// - Setter-მა ახალი PIN უნდა მიიღოს მხოლოდ მაშინ, თუ ის ოთხნიშნა სტრიქონია.
// - სხვა შემთხვევაში გამოიტანე "PIN must contain exactly 4 digits!"
// 4. accountStatus — მხოლოდ Getter
// - თუ _isBlocked არის true, დააბრუნოს "Blocked".
// - სხვა შემთხვევაში დააბრუნოს "Active".
// 5. deposit — მხოლოდ Setter
// - Setter-მა მიიღოს თანხა და დაამატოს ბალანსს.
// - თანხა უნდა იყოს რიცხვი და 0-ზე მეტი.
// - თუ ანგარიში დაბლოკილია, თანხის დამატება არ უნდა მოხდეს.
// - არასწორი თანხის შემთხვევაში გამოიტანე "Invalid deposit amount!"
// - დაბლოკილი ანგარიშის შემთხვევაში გამოიტანე "Account is blocked!"
// 6. withdraw — მხოლოდ Setter
// - Setter-მა მიიღოს გასატანი თანხა.
// - თანხა უნდა იყოს 0-ზე მეტი და ბალანსზე ნაკლები ან მისი ტოლი.
// - დაბლოკილი ანგარიშიდან თანხის გატანა არ უნდა შეიძლებოდეს.
// - არასაკმარისი თანხის შემთხვევაში გამოიტანე "Insufficient balance!"

let bankAccount = {
    _owner: "Goga",
    _balance: 2500,
    _pin: "1234",
    _isBlocked: false,
    get owner() {
        return this._owner;
    },
    set owner(newOwner) {
        if (typeof newOwner === "string" && newOwner !== "") {
            this._owner = newOwner;
        } else {
            console.log("Invalid owner name!");
        }
    },
    get balance() {
        return this._balance;
    },
    set balance(newBalance) {
        if (typeof newBalance === "number" && newBalance >= 0) {
            this._balance = newBalance;
        } else {
            console.log("Invalid balance!");
        }
    },
    get pin() {
        return "PIN is hidden";
    },
    set pin(newPin) {
        if (typeof newPin === "string" && newPin.length === 4) {
            this._pin = newPin;
        } else {
            console.log("PIN must contain exactly 4 digits!");
        }
    },
    get accountStatus() {
        return this._isBlocked ? "Blocked" : "Active";
    },
    set deposit(amount) {
        if (this._isBlocked) {
            console.log("Account is blocked!");
        }
        else if (typeof amount === "number" && amount > 0) {
            this._balance += amount;
        } else {
            console.log("Invalid deposit amount!");
        }
    },
    set withdraw(amount) {
        if (this._isBlocked) {
            console.log("Account is blocked!");
        }
        else if (typeof amount === "number" && amount > 0 && amount <= this._balance) {
            this._balance -= amount;
        } else {
            console.log("Invalid withdrawal amount!");
        }
    }
}

// 2)შექმენი ობიექტი player, რომელსაც ექნება შემდეგი თვისებები:
// - _name — "Shadow"
// - _health — 100
// - _energy — 80
// - _level — 1
// - _experience — 0
// - _isAlive — true
// შექმენი შემდეგი getter-ები და setter-ები.
// 1. name
// - Getter-მა დააბრუნოს მოთამაშის სახელი.
// - Setter-მა სახელი შეცვალოს მხოლოდ მაშინ, თუ მნიშვნელობა სტრიქონია და სიგრძე მინიმუმ 3 სიმბოლოა.
// - სხვა შემთხვევაში გამოიტანოს "Name must contain at least 3 characters!"
// 2. health
// - Getter-მა დააბრუნოს ჯანმრთელობა.
// - Setter-მა მიიღოს ახალი ჯანმრთელობა მხოლოდ 0-დან 100-ის ჩათვლით.
// - თუ ჯანმრთელობა 0 გახდება, _isAlive ავტომატურად უნდა გახდეს false.
// - თუ ჯანმრთელობა 0-ზე მეტია, _isAlive უნდა გახდეს true.
// - სხვა მნიშვნელობის შემთხვევაში გამოიტანოს "Invalid health!"
// 3. energy
// - Getter-მა დააბრუნოს ენერგია.
// - Setter-მა ენერგია შეცვალოს მხოლოდ 0-დან 100-ის ჩათვლით.
// - არასწორი მნიშვნელობის შემთხვევაში გამოიტანოს "Invalid energy!"
// 4. experience
// - Getter-მა დააბრუნოს მიმდინარე გამოცდილება.
// - Setter-მა მიიღოს მხოლოდ 0 ან მეტი რიცხვი.
// - როდესაც გამოცდილება 100-ს ან მეტს მიაღწევს, მოთამაშის დონე უნდა გაიზარდოს 1-ით და გამოცდილებას უნდა გამოაკლდეს 100.
// - თუ დარჩენილი გამოცდილებაც 100-ს ან მეტია, დონე კვლავ უნდა გაიზარდოს. მაგალითად, 250 გამოცდილების მიღებისას მოთამაშემ უნდა მოიმატოს 2 დონე და დარჩეს 50 გამოცდილება.
// 5. level — მხოლოდ Getter
// - დააბრუნოს მოთამაშის მიმდინარე დონე.
// - დონის პირდაპირ შეცვლა Getter-ის საშუალებით შეუძლებელი უნდა იყოს.
// 6. status — მხოლოდ Getter
// - თუ მოთამაშე ცოცხალია და ენერგია 0-ზე მეტია, დააბრუნოს "Ready".
// - თუ მოთამაშე ცოცხალია, მაგრამ ენერგია 0 აქვს, დააბრუნოს "Exhausted".
// - თუ ჯანმრთელობა 0 აქვს, დააბრუნოს "Dead".
// 7. attack — მხოლოდ Setter
// - Setter-მა მიიღოს შეტევის ენერგიის ღირებულება.
// - თუ მოთამაშე მკვდარია, შეტევა არ უნდა შესრულდეს.
// - თუ ენერგია მოთხოვნილ ღირებულებაზე ნაკლებია, გამოიტანოს "Not enough energy!"
// - წინააღმდეგ შემთხვევაში ენერგია უნდა შემცირდეს შეტევის ღირებულებით და გამოიტანოს "Attack successful!"
// - შეტევა უნდა მიიღებოდეს მხოლოდ დადებითი რიცხვის შემთხვევაში.

let player = {
    _name: "Shadow",
    _health: 100,
    _energy: 80,
    _level: 1,
    _experience: 0,
    _isAlive: true,
    get name() {
        return this._name;
    },
    set name(newName) {
        if (typeof newName === "string" && newName.length >= 3) {
            this._name = newName;
        } else {
            console.log("Name must contain at least 3 characters!");
        }
    },
    get health() {
        return this._health;
    },
    set health(newHealth) {
        if (typeof newHealth === "number" && newHealth >= 0 && newHealth <= 100) {
            this._health = newHealth;
            if (this._health === 0) {
                this._isAlive = false;
            } else {
                this._isAlive = true;
            }
        } else {
            console.log("Invalid health!");
        }
    },
    get energy() {
        return this._energy;
    },
    set energy(newEnergy) {
        if (typeof newEnergy === "number" && newEnergy >= 0 && newEnergy <= 100) {
            this._energy = newEnergy;
        } else {
            console.log("Invalid energy!");
        }
    },
    get experience() {
        return this._experience;
    },
    set experience(newExperience) {
        if (typeof newExperience === "number" && newExperience >= 0) {
            this._experience += newExperience;
            if (this._experience >= 100) {
                this._level += 1;
                this._experience -= 100;
            }
        } else {
            console.log("Invalid experience!");
        }
    },
    get level() {
        return this._level;
    },
    get status() {
        if (this._isAlive === false) {
            return "Dead";
        } else if (this._energy > 0) {
            return "Ready";
        } else {
            return "Exhausted";
        }
    },
    set attack(energyCost) {
        if (this._isAlive === false) {
            console.log("Cannot attack, player is dead!");
        } else if (typeof energyCost === "number" && energyCost > 0) {
            if (this._energy < energyCost) {
                console.log("Not enough energy!");
            } else {
                this._energy -= energyCost;
                console.log("Attack successful!");
            }
        } else {
            console.log("Invalid energy cost!");
        }
    }
}; 
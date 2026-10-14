// 1)მოცემულია ობიექტი:
// let user = {
//   name: "Nika",
//   address: {
//     city: "Tbilisi",
//     street: "Rustaveli"
//   }
// };
// შეასრულე შემდეგი მოქმედებები:
// 1. შეცვალე მომხმარებლის ქალაქი "Batumi"-ით.
// 2. დაამატე მისამართის ობიექტში building თვისება მნიშვნელობით 15.
// 3. წაშალე street თვისება.
// 4. დაამატე მომხმარებლის ობიექტში ახალი ჩაშენებული ობიექტი contact, რომელშიც იქნება email: "nika@gmail.com".
let user = {
    name: "Nika",
    address: {
        city: "Tbilisi",
        street: "Rustaveli"
    }
}

user.address.city = "Batumi";
user.address.building = 15;
delete user.address.street;
user.contact = {
    email: "nika@gmail.com"
};

// 2)let computer = {
//   brand: "Asus",
//   specifications: {
//     processor: "i5",
//     ram: 8,
//     storage: 256
//   }
// };
// შეასრულე:
// 1. შეცვალე პროცესორი "i7"-ით.
// 2. შეცვალე RAM-ის მოცულობა 16-ით.
// 3. დაამატე graphicsCard თვისება მნიშვნელობით "RTX 4060".
// 4. წაშალე storage თვისება.
// 5. დაბეჭდე განახლებული specifications ობიექტი.
let computer = {
    brand: "Asus",
    specifications: {
        processor: "i5",
        ram: 8,
        storage: 256
    }
}

computer.specifications.processor = "i7";
computer.specifications.ram = 16;
computer.specifications.graphicsCard = "RTX 4060";
delete computer.specifications.storage;
console.log(computer.specifications);

// 3)let student = {
//   name: "Mariam",
//   personalInfo: {
//     age: 17,
//     city: "Kutaisi"
//   },
//   grades: {
//     math: 80,
//     english: 90,
//     history: 75
//   }
// };
// შეასრულე:
// 1. შეცვალე მოსწავლის ასაკი 18-ით.
// 2. შეცვალე ინგლისურის ქულა 95-ით.
// 3. დაამატე biology საგანი ქულით 88.
// 4. წაშალე history საგანი.
// 5. დაამატე phone თვისება personalInfo ობიექტში.
// 6. დაბეჭდე განახლებული მოსწავლის ყველა მონაცემი.
let student = {
    name: "Mariam",
    personalInfo: {
        age: 17,
        city: "Kutaisi"
    },
    grades: {
        math: 80,
        english: 90,
        history: 75
    }
}

student.personalInfo.age = 18;
student.grades.english = 95;
student.grades.biology = 88;
delete student.grades.history;
student.personalInfo.phone = "123-456-789";
console.log(student);

// 4)let product = {
//   name: "Laptop",
//   details: {
//     price: 2500,
//     color: "Black",
//     brand: "Lenovo"
//   },
//   stock: {
//     quantity: 10,
//     warehouse: "Tbilisi",
//     reserved: 2
//   }
// };
// შეასრულე:
// 1. შეცვალე პროდუქტის ფასი 2200-ით.
// 2. შეცვალე ფერი "Silver"-ით.
// 3. დაამატე warranty: 2 თვისება details ობიექტში.
// 4. წაშალე brand თვისება.
// 5. შეცვალე საწყობის რაოდენობა 15-ით.
// 6. წაშალე reserved თვისება.
// 7. დაამატე status: "Available" თვისება მთავარ ობიექტში.
let product = {
    name: "Laptop",
    details: {
        price: 2500,
        color: "Black",
        brand: "Lenovo"
    },
    stock: {
        quantity: 10,
        warehouse: "Tbilisi",
        reserved: 2
    }
}

product.details.price = 2200;
product.details.color = "Silver";
product.details.warranty = 2;
delete product.details.brand;
product.stock.quantity = 15;
delete product.stock.reserved;
product.status = "Available";
console.log(product);

// 5)let character = {
//   name: "Knight",
//   stats: {
//     health: 100,
//     power: 30,
//     defense: 20
//   },
//   equipment: {
//     weapon: "Sword",
//     armor: "Iron Armor"
//   }
// };
// შეასრულე:
// 1. გაზარდე health 100-დან 150-მდე.
// 2. შეცვალე power მნიშვნელობით 45.
// 3. წაშალე defense.
// 4. შეცვალე იარაღი "Magic Sword"-ით.
// 5. დაამატე shield: "Golden Shield" თვისება equipment ობიექტში.
// 6. წაშალე armor.
// 7. დაამატე level: 5 მთავარ ობიექტში.

let character = {
    name: "Knight",
    stats: {
        health: 100,
        power: 30,
        defense: 20
    },
    equipment: {
        weapon: "Sword",
        armor: "Iron Armor"
    }
}

character.stats.health += 50;
character.stats.power = 45;
delete character.stats.defense;
character.equipment.weapon = "Magic Sword";
character.equipment.shield = "Golden Shield";
delete character.equipment.armor;
character.level = 5;
console.log(character);

// 6)let movie = {
//   title: "Interstellar",
//   info: {
//     year: 2014,
//     genre: "Sci-Fi",
//     rating: 8.6
//   },
//   actors: ["Matthew", "Anne", "Jessica"]
// };
// შეასრულე:
// 1. შეცვალე ფილმის გამოშვების წელი 2015-ით.
// 2. შეცვალე რეიტინგი 9.0-ით.
// 3. დაამატე director: "Christopher Nolan" თვისება info ობიექტში.
// 4. წაშალე genre თვისება.
// 5. შეცვალე მასივში "Anne" მნიშვნელობით "Emma".
// 6. დაამატე მსახიობი "Michael" მასივის ბოლოში.
// 7. ამოიღე მასივიდან ბოლო მსახიობი.
// 8. წაშალე actors მასივი და მის ნაცვლად დაამატე ახალი მასივი ["Tom", "Leo"].

let movie = {
    title: "Interstellar",
    info: {
        year: 2014,
        genre: "Sci-Fi",
        rating: 8.6
    },
    actors: ["Matthew", "Anne", "Jessica"]
}

movie.info.year = 2015;
movie.info.rating = 9.0;
movie.info.director = "Christopher Nolan";
delete movie.info.genre;
movie.actors[1] = "Emma";
movie.actors.push("Michael");
movie.actors.pop();
delete movie.actors;
movie.actors = ["Tom", "Leo"];
console.log(movie);

// 7)let employee = {
//   name: "Gio",
//   job: {
//     position: "Developer",
//     department: "IT",
//     salary: 3000
//   },
//   address: {
//     city: "Tbilisi",
//     details: {
//       street: "Chavchavadze",
//       building: 10
//     }
//   },
//   skills: ["HTML", "CSS", "JavaScript"]
// };
// შეასრულე:
// 1. შეცვალე პოზიცია "Senior Developer"-ით.
// 2. შეცვალე ხელფასი 4500-ით.
// 3. წაშალე department.
// 4. შეცვალე მისამართის ქუჩა "Rustaveli"-ით.
// 5. შეცვალე შენობის ნომერი 25-ით.
// 6. დაამატე country: "Georgia" მისამართის ობიექტში.
// 7. დაამატე "React" უნარების მასივში.
// 8. წაშალე "CSS" მასივიდან.
// 9. ამოიღე მასივიდან პირველი ელემენტი.
// 10. დაამატე active: true მთავარ ობიექტში.
let employee = {
    name: "Gio",
    job: {
        position: "Developer",
        department: "IT",
        salary: 3000
    },
    address: {
        city: "Tbilisi",
        details: {
            street: "Chavchavadze",
            building: 10
        }
    },
    skills: ["HTML", "CSS", "JavaScript"]
}

employee.job.position = "Senior Developer";
employee.job.salary = 4500;
delete employee.job.department;
employee.address.details.street = "Rustaveli";
employee.address.details.building = 25;
employee.address.country = "Georgia";
employee.skills.push("React");
delete employee.skills[1];
employee.skills.shift();
employee.active = true;
console.log(employee);

// 8)let account = {
//   username: "Goga123",
//   profile: {
//     age: 20,
//     city: "Tbilisi"
//   },
//   game: {
//     level: 10,
//     coins: 500,
//     items: ["Sword", "Shield", "Potion"]
//   },
//   settings: {
//     sound: true,
//     language: "English"
//   }
// };
// შეასრულე ყველა მოქმედება:
// 1. შეცვალე მომხმარებლის ქალაქი "Batumi"-ით.
// 2. შეცვალე თამაშის დონე 15-ით.
// 3. შეცვალე მონეტების რაოდენობა 1000-ით.
// 4. დაამატე experience: 250 თვისება game ობიექტში.
// 5. შეცვალე "Shield" მასივში "Golden Shield"-ით.
// 6. დაამატე "Bow" ნივთების მასივში.
// 7. ამოიღე მასივიდან პირველი ნივთი.
// 8. წაშალე sound თვისება settings ობიექტიდან.
// 9. შეცვალე ენა "Georgian"-ით.
// 10. დაამატე premium: true მთავარ ობიექტში.
// 11. წაშალე age თვისება profile ობიექტიდან.
// 12. დაბეჭდე საბოლოოდ განახლებული account ობიექტი.

let account = {
    username: "Goga123",
    profile: {
        age: 20,
        city: "Tbilisi"
    },
    game: {
        level: 10,
        coins: 500,
        items: ["Sword", "Shield", "Potion"]
    },
    settings: {
        sound: true,
        language: "English"
    }
};

account.profile.city = "Batumi";
account.game.level = 15;
account.game.coins = 1000;
account.game.experience = 250;
account.game.items[1] = "Golden Shield";
account.game.items.push("Bow");
account.game.items.shift();
delete account.settings.sound;
account.settings.language = "Georgian";
account.premium = true;
delete account.profile.age;
console.log(account);

// 9)let user = {
//   name: "Nika",
//   age: 20,
//   city: "Tbilisi"
// };
// 1. შექმენი ფუნქცია updateUser, რომელსაც პარამეტრად გადაეცემა ობიექტი.
// 2. ფუნქციის შიგნით შეცვალე მომხმარებლის ასაკი 25-ით.
// 3. შეცვალე ქალაქი "Batumi"-ით.
// 4. დაამატე ახალი თვისება isActive: true.
// 5. გამოიძახე ფუნქცია და დაბეჭდე user.
let user = {
    name: "Nika",
    age: 20,
    city: "Tbilisi"
};

function updateUser(user) {
    user.age = 25;
    user.city = "Batumi";
    user.isActive = true;
}
updateUser(user);
console.log(user);

// 10)let student = {
//   name: "Mariam",
//   grades: {
//     math: 70,
//     english: 85
//   }
// };
// შექმენი ფუნქცია updateGrades, რომელსაც გადაეცემა სტუდენტის ობიექტი.
// ფუნქციამ უნდა:
// 1. მათემატიკის ქულა შეცვალოს 95-ით.
// 2. დაამატოს physics: 90 ჩაშენებულ grades ობიექტში.
// 3. წაშალოს english თვისება.
// 4. დაამატოს მთავარ ობიექტში passed: true.
// დაბეჭდე student ფუნქციის გამოძახების შემდეგ.

let student = {
    name: "Mariam",
    grades: {
        math: 70,
        english: 85
    }
};

function updateGrades(student) {
    student.grades.math = 95;
    student.grades.physics = 90;
    delete student.grades.english;
    student.passed = true;
}
updateGrades(student);
console.log(student);

// 11)let cart = {
//   owner: "Nika",
//   product: {
//     name: "Phone",
//     price: 1200,
//     quantity: 2
//   },
//   status: {
//     paid: false,
//     delivered: false
//   }
// };
// შექმენი ფუნქცია updateCart, რომელიც:
// 1. პროდუქტის ფასს შეცვლის 1000-ით.
// 2. რაოდენობას შეცვლის 3-ით.
// 3. დაამატებს category: "Electronics" თვისებას product ობიექტში.
// 4. წაშლის paid თვისებას status ობიექტიდან.
// 5. delivered თვისებას შეცვლის true-ით.
// 6. დაამატებს მთავარ ობიექტში discount: true თვისებას.
// ყველა ცვლილება ფუნქციაში გააკეთე და საბოლოოდ დაბეჭდე cart.

let cart = {
    owner: "Nika",
    product: {
        name: "Phone",
        price: 1200,
        quantity: 2
    },
    status: {
        paid: false,
        delivered: false
    }
};

function updateCart(cart) {
    cart.product.price = 1000;
    cart.product.quantity = 3;
    cart.product.category = "Electronics";
    delete cart.status.paid;
    cart.status.delivered = true;
    cart.discount = true;
}
updateCart(cart);
console.log(cart);
